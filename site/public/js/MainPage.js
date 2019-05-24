
class MainPage extends React.Component {
	state = {
		latestItems:[],
		path: null,
		url: null,
		itemId: []
	};

	constructor(props) {
		super(props);

		this.setNewItems = this.setNewItems.bind(this);
		this.displayItems = this.displayItems.bind(this);
		this.getItemsId = this.getItemsId.bind(this);

		this.setNewItems();
	}

    setNewItems() {
    	axios.get("/getLatestItems").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				latestItems: res.data
			})
		});
	}

	getItemsId() {
		// console.log(this.state.itemId);
		// console.log(this.state.latestItems[0]);
		for(let i = 0; i < this.state.latestItems.length; i++) {
			this.state.itemURL.push(`'item/'{this.state.latestItems[i].Id}`);

			this.setState({
				itemURL: this.state.itemURL
			});
		}
	}


	displayItems() {
		// if(this.state.latestItems.length > 0) {
		// 	console.log(this.state.latestItems[0].Id);
		// }

		// if(this.state.path.length > 0) {
		// 	console.log(this.state.path[0]);
		// }

		return(
			this.state.latestItems.map((element) => {
				return(
					<div className="card" key = {element.Id.toString()}>
						<img src={"/getImage/" + element.Details} className="card-img-top" alt={element.ItemName}/>
						<div className="card-body"> 
							<a href={this.state.url} className="stretched-link">{element.ItemName}</a>
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
					<h2>What's New</h2>
					<div className="scrolling_box">
						{this.displayItems()}
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('content'));
