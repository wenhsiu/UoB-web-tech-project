
class MainPage extends React.Component {
	// state = {
	// 	latestItems:[],
	// }

	constructor(props) {
		super(props);
		this.state = {
			latestItems:[],
			path: [],
			itemURL: [],
			itemId: []
		};

		this.setNewItems = this.setNewItems.bind(this);
		this.displayItems = this.displayItems.bind(this);
		this.getItemsId = this.getItemsId.bind(this);
		this.getImagePath = this.getImagePath.bind(this);

		this.setNewItems();
		// this.setState({itemId: this.state.latestItems.filter(this.getItemsId)})
		// console.log(this.state.latestItems);
		// this.getItemsId();
		if(this.state.latestItems.length > 0) {
			console.log(this.state.latestItems);
			this.getItemsId();
			// this.getImagePath();
		}
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

	getImagePath() {
		// this.state.latestItems.map((element) => {
		// 	axios.get("/getImage", {
		// 		params: {
		// 			imgName: element.Details
		// 		}
		// 		}).then((res) => {
		// 		if(res.data.length === 0){return;}
		// 		this.setState({
		// 			path: res.data
		// 		})
		// 	});
		// });

		for(let i = 0; i < this.state.latestItems.length; i++) {
			axios.get("/getImage", {
				params: {
					imgName: this.state.latestItems.Details
				}
				}).then((res) => {
				if(res.data.length === 0){return;}
				this.setState({
					path: res.data
				})
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
				
				axios.get("/getImage", {
					params: {
						imgName: element.Details
					}
					}).then((res) => {
					if(res.data.length === 0){return;}
					this.setState({
						path: res.data
					})
				});


				return(
					<div className="card" key = {element.Id.toString()}>
						<img src={this.state.path} className="card-img-top" alt={element.ItemName}/>
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
{/*						<div className="card">
							<img src="http://lorempixel.com/output/cats-q-c-182-182-4.jpg" className="card-img-top" alt="item name" />
							<div className="card-body">
								<a href="#" className="stretched-link">item name</a>
							</div>
						</div>

						<div className="card">
							<img src="http://lorempixel.com/output/cats-q-c-182-182-1.jpg" className="card-img-top" alt="item name" />
							<div className="card-body">
								<a href="#" className="stretched-link">item name</a>
							</div>
						</div>*/}
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('content'));
