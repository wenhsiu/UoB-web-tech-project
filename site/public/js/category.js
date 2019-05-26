
class ItemsInCategory extends React.Component {
	constructor(props) {
		super(props);
		let path = window.location.pathname;
        let array = path.split("/");

		this.state = {
			cate: array[2],
			cateName:[],
			itemsList:[]
		};

		this.setCategory = this.setCategory.bind(this);
		this.setItemsList = this.setItemsList.bind(this);
		this.displayItems = this.displayItems.bind(this);
		this.getCategory = this.getCategory.bind(this);

		this.setCategory();
		this.setItemsList();

	}

	setCategory() {
    	axios.get("/getCateName/" + this.state.cate).then((res) => {
			console.log(res.data);
			if(res.data.length === 0){return;}
			this.setState({
				cateName: res.data
			})		
		});
	}

	getCategory() {
		if(this.state.cateName.length > 0) {
			return this.state.cateName[0].name
		}
	}

    setItemsList() {
    	axios.get("/getItemsByCate/" + this.state.cate).then((res) => {
			console.log(res.data);
			if(res.data.length === 0){return;}
			this.setState({
				itemsList: res.data
			})		
		});
	}

	displayItems() {
		return(
			this.state.itemsList.map((element) => {
				return(
					<div className="card" key = {element.Id.toString()}>
						<img src={"/getImage/" + element.Details} className="card-img-top" alt={element.ItemName}/>
						<div className="card-body"> 
							<a href={"/item/:id" + element.Id} className="stretched-link">{element.ItemName}</a>
						</div>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<div>
					<h2>{this.getCategory()}</h2>
					<div className="items">
						{this.displayItems()}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<ItemsInCategory />, document.getElementById('itemsList'));
