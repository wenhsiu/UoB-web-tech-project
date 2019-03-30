class EntranceURL extends React.Component{

    navigateToLogin() {
        window.location.href="login.html";
    }

    navigateToItems() {
        window.location.href="mainpage.html";
    }
    render(){
        return(							
            <div className="box">
                <header>
                    <h1 className="title">Sharing within Bristol</h1>
                    <h2 className="subTitle">Share Your Unwanted Stuff or Get a Real Bargain Here!</h2>
                </header>

                <div className="link">
                    <form>
                        <input className="button" type="button" value="Login / Sign Up" onClick={this.navigateToLogin} />
                    </form>
                    <form>
                        <input className="button" type="button" value="Browser the Stuff" onClick={this.navigateToItems} />
                    </form> 
                </div>
            </div>
        )
    }
}

ReactDOM.render(<EntranceURL />, document.getElementById('container'));
