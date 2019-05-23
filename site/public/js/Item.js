class Item extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	itemId:"",
            details: {
            	itemName:"",
                img: null,
                file: null,
                cate: "",
                owner: "",
                exchangingItem: "",
                location: "",
                description: "",
            },
            url: null
        };
    }



    render() {
        return (
            <div>
                <h3 class="item_category">Replace by category</h3>
                
                <div class="row">
                    <div class="col-6">
                        <img class="item_img" src="http://lorempixel.com/output/cats-h-c-480-640-3.jpg" />
                    </div>
                    <div class="col-6">
                        <div class="simple_info">
                            <h3 class="item_name">item name</h3>
                            <h3 class="item_value">item value</h3>
                            <input class = "add_cart" type="button" value="Add to Cart" />
                        </div>
                        <h3 class="item_location">item location</h3>
                        <h3 class="item_owner">item owner</h3>
                        <h3 class="item_description">item description</h3>
                    </div>
                </div>

            </div>
        )
    }
}