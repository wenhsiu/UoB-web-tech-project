class Cart extends React.Component {
	state = {
		itemsList:[],
	};

	constructor(props) {
		super(props);

		this.setItemsList = this.setItemsList.bind(this);
		this.displayItems = this.displayItems.bind(this);

		this.setItemsList();
	}

	setItemsList() {
		
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
							<a href={"/item/:id" + element.Id} className="stretched-link">{element.ItemName}</a>
						</div>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<h3>Items in the Cart</h3>
				<div class="items">
					{this.displayItems()}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Cart />, document.getElementById('itemsList'));
