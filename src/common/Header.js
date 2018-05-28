import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from '../_healpers/history';
import './header.css'
class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handelLogout = this.handelLogout.bind(this);

  }
  handelLogout(e) {
    debugger;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('error');
    sessionStorage.removeItem('userData');
    history.push('/login');
  }
  render() {

    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3" >
      //   <a className="navbar-brand">crud-react-redux</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav ml-auto">

      //       <li className="nav-item active">
      //         <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink className="nav-link" to="/about">About us</NavLink>
      //       </li>

      //       <li className="nav-item">
      //         <NavLink className="nav-link" exact to="/employee">Employee</NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <img className="img img-rounded !important" src={JSON.parse(sessionStorage.getItem('userImage'))} />
      //       </li>
      //       <li className="nav-item">
      //         <button className="btn btn-link" onClick={this.handelLogout} >Logout</button>
      //       </li>
      //     </ul>

      //   </div>
      // </nav>

      <header class="app-header navbar">
      <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo" />
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo" />
      </a>
      {/* <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <ul class="nav navbar-nav d-md-down-none">
        <li class="nav-item px-3">
        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li class="nav-item px-3">
        <NavLink className="nav-link" exact to="/employee">Employee</NavLink>
        </li>
        <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" data-toggle="dropdown" id="Preview" href="#" role="button" aria-haspopup="true" aria-expanded="false">
Account Settings
</a>
<div class="dropdown-menu" aria-labelledby="Preview">
<a class="dropdown-item" href="#">Set Password</a>
<a class="dropdown-item" href="#">Change Password</a>
<a class="dropdown-item" href="#">Dropdown Link 3</a>
</div>
</li>

      </ul>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item d-md-down-none">
          <a class="nav-link" href="#">
            <i class="icon-list"></i>
          </a>
        
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <img class="img-avatar" src={JSON.parse(sessionStorage.getItem('userImage'))} alt="admin@bootstrapmaster.com" />
          </a>
            </li>
          
        <li class="nav-item px-3">
        <button className="btn btn-link" onClick={this.handelLogout} >Logout</button>
        </li>
      
            </ul>
               </header>

    );
  }
}
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    DATA: state.auth
  };
}


export default connect(mapStateToProps)(Header);
