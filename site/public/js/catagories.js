
class ItemsInCategory extends React.Component {
	state = {
		cate: "",
		itemsList:[],
	};

	constructor(props) {
		super(props);

		this.setItemsList = this.setItemsList.bind(this);
		this.displayItems = this.displayItems.bind(this);

		this.setItemsList();
	}

	setCate() {
		axios.get("/getItemsByCate/:ID").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				itemsList: res.data
			})
		});
	}

    setItemsList() {
    	axios.get("/getItemsByCate/:ID").then((res) => {
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
							<a href={"item/:id" + element.Id} className="stretched-link">{element.ItemName}</a>
						</div>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<div className="banner">
					<img className="banner_img" src="../img/banner.png" />
				</div>
				<div id="item_display">
					<h2>replace by Category</h2>
					<div className="items">
						{this.displayItems()}
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('content'));
