
class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			latestItems:[],
			path: null,
			url: null,
			itemId: []
		};

		this.setNewItems = this.setNewItems.bind(this);
		this.displayItems = this.displayItems.bind(this);

		this.setNewItems();
	}

    setNewItems() {
    	axios.get("/getLatestItems").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				latestItems: res.data
			});
			
		});
	}

	// getItemsId() {
	// 	this.state.latestItems.map((element) => {

	// 	})
	// }



	displayItems() {
		return(
			this.state.latestItems.map((element) => {

				axios.get("/getImage", element.Details).then((res) => {
					if(res.data.length === 0){return;}
					this.setState({
						path: res.data
					})
				});

				// this.setState({url: 'item/:' + element.Id});


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
