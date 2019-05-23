class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cates: [],
		};

		this.setCategories = this.setCategories.bind(this);
		this.displayLogo = this.displayLogo.bind(this);
		this.displayCategories = this.displayCategories.bind(this);

		this.setCategories();
	}

	setCategories() {
		axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});		
        });
    }

    displayCategories() {
    	return(
			this.state.cates.map((element) => {
				return <li key = {element.id.toString()}> {element.name} </li>
			})
		)
    }

    displayLogo() {
    	return(
    		<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.33 261.53">
				<defs>
				<style>
					{`.cls-1,.cls-2{fill:none}
					.cls-1,.cls-2,.cls-6,.cls-7,.cls-8{stroke:#000;stroke-miterlimit:10}
					.cls-1,.cls-6,.cls-7,.cls-8{stroke-width:3px}
					.cls-2{stroke-width:5px}
					.cls-3,.cls-7{fill:#3eccc5}
					.cls-4,.cls-8{fill:#fbb03b}
					.cls-5,.cls-6{fill:#e27579}
					.cls-6{stroke-linecap:round}
					.cls-9{font-size:90px}
					.cls-10,.cls-9{font-family:AvenirNext-Regular, Avenir Next}
					.cls-10{font-size:60px}`}
				</style>
				</defs>
				<title>logo</title>
				<circle className="cls-1" cx="131.18" cy="130.76" r="120.9"/>
				<circle className="cls-2" cx="130.76" cy="130.76" r="128.26"/>
				<rect className="cls-3" x="226.6" y="123.34" width="3.69" height="3.69" transform="translate(-46.29 67.26) rotate(-21.01)"/>
				<rect className="cls-3" x="231.37" y="125.47" width="3.69" height="3.69" transform="translate(-46.73 69.11) rotate(-21.01)"/>
				<rect className="cls-3" x="228.73" y="118.58" width="3.69" height="3.69" transform="translate(-44.44 67.7) rotate(-21.01)"/>
				<rect className="cls-3" x="233.11" y="120.85" width="3.69" height="3.69" transform="translate(-44.96 69.42) rotate(-21.01)"/>
				<rect className="cls-3" x="144.15" y="107.07" width="3.69" height="3.69" transform="translate(-45.94 36.62) rotate(-21.01)"/>
				<rect className="cls-3" x="148.92" y="109.19" width="3.69" height="3.69" transform="translate(-46.38 38.47) rotate(-21.01)"/>
				<rect className="cls-3" x="146.27" y="102.31" width="3.69" height="3.69" transform="translate(-44.09 37.06) rotate(-21.01)"/>
				<rect className="cls-3" x="150.66" y="104.57" width="3.69" height="3.69" transform="translate(-44.61 38.79) rotate(-21.01)"/>
				<rect className="cls-3" x="83.09" y="91.13" width="3.69" height="3.69" transform="translate(-44.28 13.67) rotate(-21.01)"/>
				<rect className="cls-3" x="87.86" y="93.25" width="3.69" height="3.69" transform="translate(-44.73 15.52) rotate(-21.01)"/>
				<rect className="cls-3" x="85.21" y="86.36" width="3.69" height="3.69" transform="translate(-42.43 14.11) rotate(-21.01)"/>
				<rect className="cls-3" x="89.6" y="88.63" width="3.69" height="3.69" transform="translate(-42.95 15.84) rotate(-21.01)"/>
				<rect className="cls-4" x="206.81" y="89.95" width="3.69" height="3.69" transform="translate(-35.64 57.94) rotate(-21.01)"/>
				<rect className="cls-4" x="211.58" y="92.08" width="3.69" height="3.69" transform="translate(-36.08 59.79) rotate(-21.01)"/>
				<rect className="cls-4" x="208.93" y="85.19" width="3.69" height="3.69" transform="translate(-33.79 58.39) rotate(-21.01)"/>
				<rect className="cls-4" x="213.32" y="87.46" width="3.69" height="3.69" transform="translate(-34.31 60.11) rotate(-21.01)"/>
				<rect className="cls-4" x="122.67" y="67.12" width="3.69" height="3.69" transform="translate(-33.04 26.26) rotate(-21.01)"/>
				<rect className="cls-4" x="127.43" y="69.24" width="3.69" height="3.69" transform="translate(-33.49 28.11) rotate(-21.01)"/>
				<rect className="cls-4" x="124.79" y="62.36" width="3.69" height="3.69" transform="translate(-31.19 26.7) rotate(-21.01)"/>
				<rect className="cls-4" x="129.17" y="64.62" width="3.69" height="3.69" transform="translate(-31.72 28.43) rotate(-21.01)"/>
				<rect className="cls-4" x="59.25" y="130.49" width="3.69" height="3.69" transform="translate(-59.98 7.74) rotate(-21.01)"/>
				<rect className="cls-4" x="64.02" y="132.62" width="3.69" height="3.69" transform="translate(-60.42 9.59) rotate(-21.01)"/>
				<rect className="cls-4" x="61.37" y="125.73" width="3.69" height="3.69" transform="translate(-58.13 8.18) rotate(-21.01)"/>
				<rect className="cls-4" x="65.76" y="128" width="3.69" height="3.69" transform="translate(-58.65 9.91) rotate(-21.01)"/>
				<rect className="cls-5" x="225.47" y="166.84" width="3.69" height="3.69" transform="translate(-61.96 69.74) rotate(-21.01)"/>
				<rect className="cls-5" x="230.24" y="168.96" width="3.69" height="3.69" transform="translate(-62.4 71.59) rotate(-21.01)"/>
				<rect className="cls-5" x="227.59" y="162.08" width="3.69" height="3.69" transform="translate(-60.11 70.19) rotate(-21.01)"/>
				<rect className="cls-5" x="231.98" y="164.34" width="3.69" height="3.69" transform="translate(-60.63 71.91) rotate(-21.01)"/>
				<rect className="cls-5" x="62.71" y="171.49" width="3.69" height="3.69" transform="translate(-74.45 11.7) rotate(-21.01)"/>
				<rect className="cls-5" x="67.48" y="173.62" width="3.69" height="3.69" transform="translate(-74.89 13.55) rotate(-21.01)"/>
				<rect className="cls-5" x="64.83" y="166.73" width="3.69" height="3.69" transform="translate(-72.6 12.15) rotate(-21.01)"/>
				<rect className="cls-5" x="69.22" y="169" width="3.69" height="3.69" transform="translate(-73.12 13.87) rotate(-21.01)"/>
				<rect className="cls-5" x="173.46" y="68.3" width="3.69" height="3.69" transform="translate(-30.09 44.55) rotate(-21.01)"/>
				<rect className="cls-5" x="178.23" y="70.42" width="3.69" height="3.69" transform="translate(-30.53 46.4) rotate(-21.01)"/>
				<rect className="cls-5" x="175.58" y="63.53" width="3.69" height="3.69" transform="translate(-28.24 44.99) rotate(-21.01)"/>
				<rect className="cls-5" x="179.97" y="65.8" width="3.69" height="3.69" transform="translate(-28.76 46.71) rotate(-21.01)"/>
				<path className="cls-6" d="M150.2,159.33l33.07-36.64c10.09.71,17.21,4.34,20.15,10.26,2.1,4.23,2,9.47-.33,15.26Z" transform="translate(-16.6 -22.96)"/>
				<path className="cls-6" d="M150.76,159.92l-33.07-36.64c-10.09.71-17.21,4.34-20.15,10.26-2.1,4.23-2,9.47.33,15.26Z" transform="translate(-16.6 -22.96)"/>
				<rect className="cls-7" x="83.42" y="154.11" width="101.49" height="65.37" rx="2" ry="2"/>
				<rect className="cls-8" x="75.17" y="136.37" width="118" height="28.47" rx="2" ry="2"/>
				<line className="cls-1" x1="133.61" y1="219.48" x2="133.61" y2="136.37"/>
				<text className="cls-9" transform="translate(281.77 130.76)">SHARING</text>
				<text className="cls-10" transform="translate(296.3 202.32)">Within Bristol</text>
			</svg>
		)
    }

	render() {
		return(
			<header>
				<div className="title row align-items-center">
					<div className="logo col-3 text-hide">
						{this.displayLogo()}
						<a href="homeItem.html" className="logo">Sharing within Bristol</a>
						}
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
							{this.displayCategories()}
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}
ReactDOM.render(<Header />, document.getElementById('header'));
// export default Header;
