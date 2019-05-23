
class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			latestItems:[],
			path: null
		};

		this.setNewItems = this.setNewItems.bind(this);
		this.displayItems = this.displayItems.bind(this);
	}

    setNewItems() {
    	axios.get("/getLatestItems").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				latestItems: res.data
			});
			
		});
	}

	displayItems() {
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
						<div className="card-body"> {element.ItemName} </div>
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
					{this.setNewItems()}
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
