
class Upload extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			file: null
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		})
	}

	render() {
		return (
			<div>
				<input type="file" onChange={this.handleChange}/>
				<img src={this.state.file}/>
			</div>
		);
	}
}
ReactDOM.render(<Upload />, document.getElementById('image'));

class Category extends React.Component {
	constructor(){
		super();
		this.state = {
			cates: []
		};
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(){
		axios.get("/Categories").then((res) => {
			if(res.data.length === 0){return;}
			this.setState({
				cates: res.data
			});
			console.log("state: " + this.state.cates);
		});		
	};

	setOptions(){
		return(
			this.state.cates.map((element) => {
				console.log(element.name + "\t" + element.id);
				return <option key = {element.id.toString()}> {element.name} </option>
			})
		)
	}

	render(){
		return (			
				<select className="item_category" onClick={this.handleClick}>										
					<option>Select a category</option>
					{this.setOptions()};				
				</select>			
		)
	};
}
ReactDOM.render(<Category />, document.getElementById('select_cate'));