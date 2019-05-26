class UploadItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cates: [],
            details: {
                img: null,
                file: null,
                cate: null,
                name: "",
                exchangingItem: "",
                location: "",
                description: "",
            }
        };
        this.setSelectOption = this.setSelectOption.bind(this);
        this.postUsername = this.postUsername.bind(this);
        this.postImage = this.postImage.bind(this);
        this.postDetails = this.postDetails.bind(this);
        this.onChangeUploadItemImage = this.onChangeUploadItemImage.bind(this);
        this.onClickCategories = this.onClickCategories.bind(this);
        this.onChangeUploadItemDetails = this.onChangeUploadItemDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.setCategories = this.setCategories.bind(this);


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

    setSelectOption() {
        return(
            this.state.cates.map((element) => {
                return <option key = {element.id.toString()}> {element.name} </option>
            })
        );
    }
    onChangeUploadItemImage(){
        var image = URL.createObjectURL(event.target.files[0]);
        var detail = this.state.details;
        detail.img = event.target.files[0];
        detail.file = image;
        
        this.setState({            
            detials: detail
        });
    }

    postUsername(){
        let user = this.getCookie("username");
        return axios.post("/UploadItem/Username", {foo: user});
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

    postImage(){
        let Img = new FormData();
        Img.append("file", this.state.details.img);
        return axios.post("/UploadItem/Image", Img, "userpic.jpg");
    }
    postDetails(){
        var detail = new FormData();

        detail.append("name", this.state.details.name);
        detail.append("cate", this.state.details.cate);
        detail.append("exchangeItem", this.state.details.exchangingItem);
        detail.append("location", this.state.details.location);
        detail.append("description", this.state.details.description);

        return axios.post("/UploadItem/Details", detail);
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
        var cate = document.getElementById("select").value;
        console.log(document.getElementById("select").value);
        var detail = this.state.details;
        detail.cate = cate;
        this.setState({details: detail});


    }

    onSubmit(event){
        event.preventDefault();        
        let data = new FormData();

        axios.all([this.postUsername(), this.postImage(), this.postDetails()]).then(function(res){
            console.log(res);
        });
        
        for(var d of data){
            console.log(d);
        }

        
    }

    render(){
        return (
            <div>
                <div className="row container-fluid">
                    <div id="image" className="col-6">
                        <input type="file" onChange={this.onChangeUploadItemImage}/>
                        <img src={this.state.details.file}/>            
                    </div>
                    <div className="item col-6">
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
                            <select id="select" className="item_category" onChange={this.onClickCategories}>                                     
                                <option>Select a category</option>
                                {this.setSelectOption()};               
                            </select>
                        </form>

                        <form>
                            <textarea id="description" className="item_description" maxLength="200" placeholder="description" onChange={this.onChangeUploadItemDetails} ></textarea>
                        </form> 
                    </div>
                </div>
                <div id="submit" className="row container-fluid">
                    <input className="button post" type="button" value="Post" onClick={this.onSubmit} />
                </div>
            </div>   
        );
    }
}

ReactDOM.render(<UploadItem />, document.getElementById('item_container'));