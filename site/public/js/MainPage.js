
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

	displayItems() {
		return(
			this.state.latestItems.map((element) => {
				return(
					<div className="card" key = {element.Id.toString()}>
						<img src={"/getImage/" + element.Details} className="card-img-top" alt={element.ItemName}/>
						<div className="card-body"> 
							<a href={"item/" + element.Id} className="stretched-link">{element.ItemName}</a>
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
