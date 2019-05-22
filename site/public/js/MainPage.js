import axios from 'axios';

class MainPage extends React.Component{
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
				return <ls key = {element.id.toString()}> {element.name} </ls>
			})
		)
    }


	navigateToLogin() {
        window.location.href="login.html";
    }

	render() {
		return (
			<header>
				<div className="title row align-items-center">
					<div className="logo col-3 text-hide">
						<a href="homeItem.html" className="logo">Sharing within Bristol</a>
					</div>
{/*					<div className="col-1 logo">
						<img src="img/logo.png" width="128">
					</div>*/}
					<div className="search col-6">
						<form>
							<input className="search_area" type="text" placeholder="What are you looking for?" />
							{/*<!-- <input type="submit" name="" value="search"> -->*/}
							<button className="search_button" type="submit" value="search">
								<i className="fas fa-search"></i>
							</button>
						</form>
					</div>
					<div className="login col-3">
						<input className = "login_link" type="button" value="Login/Register" onClick={this.navigateToLogin} />
{/*						<!-- <a className="login_link" href="login.html">
							<span>Login/Register</span>
						</a> -->*/}
						<a href="購物車頁面！">
							<i className="fas fa-shopping-cart"></i>
						</a>
					</div>
				</div>

				<nav>
					<div id="category">
						{this.setSelectOption()}
						<ul> {this.state.cates} </ul>
					</div>
				</nav>
			</header>
		)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('container'));
