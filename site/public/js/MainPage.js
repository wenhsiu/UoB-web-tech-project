
class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			,
		};

		this.setSelectOption = this.setSelectOption.bind(this);
	}

    setNewItems() {
    	axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});		
        });
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
						<div className="card">
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
						</div>
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('content'));
