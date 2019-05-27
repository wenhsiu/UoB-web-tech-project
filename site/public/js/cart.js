class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			itemsList: []
		};

		this.setItemsList = this.setItemsList.bind(this);
		this.getCookie = this.getCookie.bind(this);
		this.displayItems = this.displayItems.bind(this);

		this.setItemsList();


	}

	setItemsList() {
		if(this.getCookie("username") != "") {
			axios.get("/getItemsDetailedInfo/" + this.getCookie("username")).then((res) => {
				console.log(res.data);
				if(res.data.length === 0){return;}
				this.setState({
					itemsList: res.data
				})		
			});
		}
	}

	getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

	displayItems() {
		return(
			this.state.itemsList.map((element) => {
				return(
					<div className="card" key = {element.Id.toString()}>
						<img src={"/getImage/" + element.Details} className="card-img-top" alt={element.ItemName}/>
						<div className="card-body"> 
							<a href={"/public/" + element.Id} className="stretched-link">{element.ItemName}</a>
						</div>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<h3>Items in the {this.state.username}'s Cart</h3>
				<div className="items">
					{this.displayItems()}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Cart />, document.getElementById('itemsList'));
