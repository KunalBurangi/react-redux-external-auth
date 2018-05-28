import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {SpinLoader } from "react-css-loaders";
import '../Login/login.css'
import * as auth_Action from '../../actions/auth_Actions';
import ExternalLogin from './ExternalLogin';
import * as ExternalLogin_Action from '../../actions/ExternalLogin_Action'
class login extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
     //   this.props.dispatch(userActions.logout());
        this.state = {
            Username: '',
            Password: '',
            submitted: false,
            loading: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger;
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
        const { dispatch } = this.props;
        if(JSON.parse(sessionStorage.getItem('token'))!=null){
            dispatch(ExternalLogin_Action.addExternalLogin(JSON.parse(sessionStorage.getItem('token'))));

        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.setState({ submitted: true });
        const { Username, Password } = this.state;
        const { dispatch } = this.props;
        // if(!JSON.parse(localStorage.getItem('token'))==null){
        //     dispatch(ExternalLogin_Action.addExternalLogin(JSON.parse(localStorage.getItem('token'))));

        // }
        if (Username && Password) {
            dispatch(auth_Action.login(Username, Password));
        }
         if(JSON.parse(sessionStorage.getItem('error'))===400){
            alert('Invalid Email or Password');
            sessionStorage.removeItem('error');
     }
    }
    render() {

const{loading}=this.state;
if(loading){
    return(
        <div className="Loader">
            <SpinLoader  
            color="#4B4E53" />
        </div>
    )
}
        return (
//             <div className="container">
//     <div className="row">
//         <div className="col-md-12">
//             <h2 className="text-center text-white mb-4"> Login Form</h2>
//             <div className="row">
//                 <div className="col-md-6 mx-auto">
//                     <div className="card rounded-0">
//                         <div className="card-header">
//                             <h3 className="mb-0">Login</h3>
//                         </div>
//                         <div className="card-body">
//                             <form className="form" onSubmit={this.handleSubmit} role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
//                                 <div className="form-group">
//                                     <label for="uname1">Username</label>
//                                     <input type="text" className="form-control form-control-lg rounded-0" name="Username" value={this.state.Username} onChange={this.handleChange} id="uname1" required=""/>
//                                     <div className="invalid-feedback">Oops, you missed this one.</div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Password</label>
//                                     <input type="password" className="form-control form-control-lg rounded-0" name="Password" value={this.state.Password} onChange={this.handleChange} id="pwd1" required="" autocomplete="new-password"/>
//                                     <div className="invalid-feedback">Enter your password too!</div>
//                                 </div>
//                                 <div>
//                                     <label className="custom-control custom-checkbox">
//                                       <input type="checkbox" className="custom-control-input"/>
//                                       <span className="custom-control-indicator"></span>
//                                       <span className="custom-control-description small text-dark">Remember me on this computer</span>
//                                     </label>
//                                 </div>
                                
//                                 <div classNameName="loginbtn">
//                                 <button type="submit" classNameName="btn btn-success mx-auto" id="btnLogin">Login</button>
//                                <br />
//                                <br/>
//                                <ExternalLogin  /><br />
//                                 <Link  classNameName="btn btn-link" to="/register" >not a member? Join Now!</Link>
                            
//                                 </div>
//                                </form>
//                         </div>
//                     </div>
//                 </div>
//               </div>
//         </div>
//     </div>
//     <div classNameName="Footer">
//                 </div>
// </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group card_margin">
            <div className="card p-4">
              <div className="card-body">
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                  <form className="form" onSubmit={this.handleSubmit} role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="icon-user"></i>
                    </span>
                  </div>
                  
                  <input type="text" className="form-control" placeholder="Username" name="Username" value={this.state.Username} onChange={this.handleChange} id="uname1" required=""/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="icon-lock"></i>
                    </span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password"  name="Password" value={this.state.Password} onChange={this.handleChange} id="pwd1" required="" autocomplete="new-password" />
                </div>
                <div className="row">
                  <div className="col-6">
                  <button type="submit" className="btn btn-success mx-auto" id="btnLogin">Login</button>
                  </div>
                  <div className="col-6 text-right">
                    <button type="button" className="btn btn-link px-0">Forgot password?</button>
                  </div>
                </div>
                </form>
              </div>
              
            </div>
            <div className="card text-white bg-primary py-5 d-md-down-none"width="44%">
              <div className="card-body text-center">
                <div>
                  <h2>Login With</h2>
                  <ExternalLogin  /><br />
                  <Link  className="btn btn-primary active mt-3" to="/register" >Register Now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    debugger;
  
    if(sessionStorage.getItem('user')!=null){
        debugger;
    alert("Login Successful");
    }
    else{
        alert("Logut Successful");
    }
    return {
       
    DATA  :state.auth
};
}


export default connect(mapStateToProps )(login);