class Cart extends React.Component {
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
				<h3>how mant items are in this cart</h3>
				<div class="items">
					<div class="card">
						<img src="http://lorempixel.com/output/cats-q-c-182-182-4.jpg" class="card-img-top" alt="item name" />
						<div class="card-body">
							<!-- <h5 class="card-title">item name</h5> -->
							<a href="#" class="stretched-link">item name</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Cart />, document.getElementById('content'));
