class LoginForm extends React.Component{					
    state = {
        account: "",
        password: ""
    }

    handleClick = (e) => {
        e.preventDefault()						
        axios.post('/', this.state)
    }
    handleACChange = (e) => {
        this.setState({account: e.target.value})						
    }
    handlePWChange = (e) => {
        this.setState({password: e.target.value})						
    }
    render(){
        return(							
        <div id="login">
            <form>
                <input className="username" type="text" data-bind="textInput: filter, valueUpdate: 'afterkeydown'" placeholder="Username" />
                <i className="fas fa-user username_icon "></i>
            </form>
            <form>
                <input className="password" type="text" data-bind="textInput: filter, valueUpdate: 'afterkeydown'" placeholder="Password" />								
                <i className="fas fa-lock password_icon"></i>	
            </form>
            <form>		
                <button className='button'>Login</button>
            </form>
        </div>
        )
    }
}
ReactDOM.render(<LoginForm />, document.getElementById('myForm'));