// import {Route, NavLink, HashRouter} from "react-router-dom";
const {Route, NavLink, HashRouter} = 'react-router-dom';
const {Header} = './Header';
// import Header from "./Header";
// import Stuff from "./Stuff";
// import Contact from "./Contact";

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cates: [],
		};

		this.setSelectOption = this.setSelectOption.bind(this);
	}

	setSelectOption() {
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

    setItems() {
    	axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});		
        });
    }

	navigateToLogin() {
        window.location.href="login.html";
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
