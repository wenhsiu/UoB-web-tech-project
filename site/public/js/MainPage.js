
class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cates: []
		};

		this.setSelectOption = this.setSelectOption.bind(this);
	}

	setSelectOption(){
		axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});		
        });

		return(
			this.state.cates.map((element) => {
				return <li key = {element.id.toString()}> {element.name} </li>
			})
		)
    }


	navigateToLogin() {
        window.location.href="login.html";
    }

	render() {
		return (
			<div>
				<header>
					<div className="title row align-items-center">
						<div className="logo col-3 text-hide">
							<a href="homeItem.html" className="logo">Sharing within Bristol</a>
						</div>
						<div className="search col-6">
							<form>
								<input className="search_area" type="text" placeholder="What are you looking for?" />
								<button className="search_button" type="submit" value="search">
									<i className="fas fa-search"></i>
								</button>
							</form>
						</div>
						<div className="login col-3">
							<input className = "login_link" type="button" value="Login/Register" onClick={this.navigateToLogin} />
							<a href="購物車頁面！">
								<i className="fas fa-shopping-cart"></i>
							</a>
						</div>
					</div>

					<nav>
						<div id="category">
							<ul> 
								<li> Home </li>
								{this.setSelectOption()}
							</ul>
						</div>
					</nav>
				</header>
				<div className="banner">
					<img class="banner_img" src="../img/banner.png" />
				</div>
				<div id="item_display">
					<h2>What's New</h2>
					<div class="scrolling_box">
						<div class="card">
							<img src="http://lorempixel.com/output/cats-q-c-182-182-4.jpg" class="card-img-top" alt="item name" />
							<div class="card-body">
								<a href="#" class="stretched-link">item name</a>
							</div>
						</div>

						<div class="card">
							<img src="http://lorempixel.com/output/cats-q-c-182-182-1.jpg" class="card-img-top" alt="item name" />
							<div class="card-body">
								<a href="#" class="stretched-link">item name</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('container'));
