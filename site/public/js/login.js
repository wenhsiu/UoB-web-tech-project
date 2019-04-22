class LoginForm extends React.Component{

    state = {
        account: "",
        password: ""
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    handleClick = (e) => {
        e.preventDefault();        
        axios.post('/UserLogin', this.state).then(function(response){            
            console.log(response);            
            if(response.status === 200) {//add username into cookie
                let d = new Date();
                d.setTime(d.getTime() + (24*60*60*1000));
                let expire = "expires=" + d.toUTCString();
                document.cookie = "username=" + response.data + ";" + expire + "path=/;";
            }
            //TODO: display the password hint somewhere on the web page.            
        }).catch(function(error){           
            console.log(error);
        });             
    }
    handleACChange = (e) => {
        this.setState({account: e.target.value})						
    }
    handlePWChange = (e) => {
        this.setState({password: e.target.value})				
    } 

    render(){
        return(							
            <div className="box">
                 <header>
				    <h1>Use Your Username to Login</h1>
			    </header>
                <form  onKeyPress={this.handleKeyPress}>
                    <input className="username" type="text" /*data-bind="textInput: filter, valueUpdate: 'afterkeydown'"*/ placeholder="Username" onChange={this.handleACChange} />
                    <i className="fas fa-user username_icon "></i>
                </form>
                <form  onKeyPress={this.handleKeyPress}>
                    <input className="password" type="password" /*data-bind="textInput: filter, valueUpdate: 'afterkeydown'"*/ placeholder="Password" onChange={this.handlePWChange}/>								
                    <i className="fas fa-lock password_icon"></i>	
                </form>
                <form>		
                    <button className='button' onClick={this.handleClick}>Login</button>
                </form>
                <div className="password_hint">
				<span>Forget Passwords?</span>			
			    </div>
			    <div className="new_member">
				    <span>Not a member?</span>
				    <a href="register.html">Join Now!</a>
			    </div>
            </div>
        )
    }
}

ReactDOM.render(<LoginForm />, document.getElementById('container'));
