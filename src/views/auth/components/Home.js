import React from "react";
import logo from '../../../logo.svg';

import { connect } from "react-redux";
import { requestUserInfo } from "../../../common/user";
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
        redirectToReferrer: false
    }
}

componentDidMount() {
  console.log("before"+this.props.username)
  this.props.requestUserInfo();
  console.log("after"+this.props.username)
}
  routeChange(e) {
    e.preventDefault()
    sessionStorage.removeItem('usertoken')
    this.setState({redirectToReferrer: true});
}
    render() {
      if (this.state.redirectToReferrer){
        return (<Redirect to={'/login'}/>)
        }
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <span>user: {this.props.username}</span>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React 
              </a>


              <div id="logout" className="btn-header transparent pull-right">
            <span>
              <a
                href="/login"
                title="Sign Out"
                data-logout-msg="You can improve your security further after logging out by closing this opened browser"
                onClick={this.routeChange.bind(this)}
              >
                <i className="fa fa-sign-out" /> Logout
              </a>
            </span>
          </div>

              
            </header>

            
          </div>
        );
      }
}
const mapStateToProps = (state) => state.user;

function mapDispatchToProps (dispatch) {
  return {
    requestUserInfo: ()=> dispatch(requestUserInfo()) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home); 