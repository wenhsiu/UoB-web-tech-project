class Item extends React.Component {
    constructor(props) {
        super(props);
        let path = window.location.pathname;
        let array = path.split("/");

        this.state = {
            itemId: array[2],
            itemDetail: [],
            isAdded: null
        };

        this.getCookie = this.getCookie.bind(this);
        this.setItemDetail = this.setItemDetail.bind(this);
        this.displayItem = this.displayItem.bind(this);
        this.addCartButton = this.addCartButton.bind(this);
        this.checkAdded = this.checkAdded.bind(this);
        this.addOrDelete = this.addOrDelete.bind(this);

        this.setItemDetail();
        this.checkAdded();          
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

    addCartButton() {
        if(this.getCookie("username") != "") {
            if(this.state.isAdded == true) {
                return <input className = "add_cart" type="button" value="Delete" onClick={this.addOrDelete}/>
            } else {
                return <input className = "add_cart" type="button" value="Add to Cart" onClick={this.addOrDelete} />
            }
        }
    }

    checkAdded() {
        let user = this.getCookie("username");
               
        axios.post('/checkLikeItem/' + user, this.state)
        .then((res) => {
            this.setState({
                isAdded: res.data
            })
            console.log("***" + this.state.isAdded);
        })
        .catch(function(error){
            console.log(error);
        });

        console.log(this.state.isAdded);

    }

    addOrDelete(e) {
        let user = this.getCookie("username");

        if(user == "") {
            window.location.href="/login.html";
        } else {
            e.preventDefault();                  
            axios.post('/likeItem/' + user, this.state)
            .then(function(response){
                if(response.status === 200) {
                    console.log("Add/delete to cart succeed");
                }
            })
            .catch(function(error){
                console.log(error);
            });
        }

        window.location.href="/cart.html";
    }

    setItemDetail() {
        axios.get("/getOneItemById/" + this.state.itemId).then((res) => {
            if(res.data.length === 0){return;}
            this.setState({
                itemDetail: res.data
            })
        });
    }

    displayItem() {
        if(this.state.itemDetail.length < 0) {
            console.log(this.state.itemDetail);
        }

        return(
            this.state.itemDetail.map((element) => {
                return(
                    <div key = {element.Id.toString()}>
                        <h3 className="item_category">{element.name}</h3>
                        <div className="row about_item" >
                            <div className="col-6 item_img_part">
                                <img className="item_img" src={"/getImage/" + element.Details} alt={element.ItemName} />
                            </div>
                            <div className="col-6 info">
                                <div className="simple_info">
                                    <h4 className="item_name">Item: </h4>
                                    <p className="name">{element.ItemName}</p>
                                    <h4 className="item_value">Exchange Value: </h4>
                                    <p className="value">{element.Exchange}</p>
                                    {this.addCartButton()}
                               </div>
                                <h4 className="item_location">Location: </h4>
                                <p className="location">{element.Location}</p>
                                <h4 className="item_owner"> Owner: </h4>
                                <p className="owner">{element.OwnerId}</p>
                                <h4 className="item_description">Description: </h4>
                                <p className="description">{element.Description}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                {this.displayItem()}
            </div>
        )
    }
}

ReactDOM.render(<Item />, document.getElementById('item'));
