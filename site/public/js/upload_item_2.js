
class UploadItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cates: [],
            details: {
                file: null,
                cate: null,
                name: "",
                exchangingItem: "",
                location: "",
                description: "",
            }
        };
        this.setSelectOption = this.setSelectOption.bind(this);
        this.onChangeUploadItemImage = this.onChangeUploadItemImage.bind(this);
        this.onClickCategories = this.onClickCategories.bind(this);
        this.onChangeUploadItemDetails = this.onChangeUploadItemDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setSelectOption(){
		return(
			this.state.cates.map((element) => {
				return <option key = {element.id.toString()}> {element.name} </option>
			})
		);
    }
    onChangeUploadItemImage(){
        var image = URL.createObjectURL(event.target.files[0]);
        var detail = this.state.details;
        detail.file = image;
        
        this.setState({            
		    detials: detail
        });
    }

    onChangeUploadItemDetails(){
        var name = document.getElementById("name").value;
        var value = document.getElementById("value").value;  
        var location = document.getElementById("location").value;
        var description = document.getElementById("description").value;

        var detail = this.state.details;

        detail.name = name;
        detail.exchangingItem = value;
        detail.location = location;
        detail.description = description;
        
        this.setState({details: detail});        
    }

    onClickCategories(){
        axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});			
		});	
    }

    onSubmit(event){
        event.preventDefault();        
        let data = new FormData();

        data.append("ItemInfo", this.state.details);
        data.append("username", "ab123");

        for(var d of data){
            console.log(d);
        }

        axios.post("/UploadItem", data)
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    render(){
        return (
            <div>
                <div id="image">
                    <input type="file" onChange={this.onChangeUploadItemImage}/>
                    <img src={this.state.details.file}/>			
				</div>
				<div className="item">
					<form>
						<input id="name" className="item_name" type="text" data-bind="textInput: filter, valueUpdate: 'afterkeydown'" maxLength="45" placeholder="item name" onChange={this.onChangeUploadItemDetails} />
					</form>

					<form>
						<input id="value" className="item_value" type="text" data-bind="textInput: filter, valueUpdate: 'afterkeydown'" maxLength="45" placeholder="Exchange items/ value, ex: a cup of coffee" onChange={this.onChangeUploadItemDetails} />
					</form>

					<form>
						<input id="location" className="item_location" type="text" data-bind="textInput: filter, valueUpdate: 'afterkeydown'" maxLength="45" placeholder="item location" onChange={this.onChangeUploadItemDetails} />
					</form>

					<form id="select_cate">
                        <select id="select" className="item_category" onClick={this.onClickCategories}>										
                            <option>Select a category</option>
                            {this.setSelectOption()};				
                        </select>
					</form>

					<form>
						<textarea id="description" className="item_description" maxLength="200" placeholder="description" onChange={this.onChangeUploadItemDetails} ></textarea>
					</form>	
				</div>
				<div id="submit">
					<input className="button post" type="button" value="Post" onClick={this.onSubmit} />
				</div>
            </div>    
        );
    }
}

ReactDOM.render(<UploadItem />, document.getElementById('item_container'));