class Item extends React.Component {
    constructor(props) {
        super(props);
        let path = window.location.pathname;
        let array = path.split("/");

        this.state = {
            itemId: array[2],
            itemDetail: []
        };

        this.setItemDetail = this.setItemDetail.bind(this);
        this.displayItem = this.displayItem.bind(this);

        // this.getItemId();
        this.setItemDetail();             
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
                        <div className="row" >
                            <div className="col-6">
                                <img className="item_img" src={"/getImage/" + element.Details} alt={element.ItemName} />
                            </div>
                            <div className="col-6">
                                <div className="simple_info">
                                    <h3 className="item_name">{element.ItemName}</h3>
                                    <h3 className="item_value">{element.Exchange}</h3>
                                    <input className = "add_cart" type="button" value="Add to Cart" />
                                </div>
                                <h3 className="item_location">item location</h3>
                                <h3 className="item_owner">{element.OwnerId}</h3>
                                <h3 className="item_description">{element.Description}</h3>
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
