import React from "react";

import { login } from '../../../common/user/UserFunctions'
import { Redirect, withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: '',
        redirectToReferrer: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this)
}

onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
}

login (e) {
    e.preventDefault()

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    login(user).then(res => {
        if (res) {
          this.setState({redirectToReferrer: true});
        }
    })
}

  onClick = e => {
    e.preventDefault();
  };
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('usertoken')){
      return (<Redirect to={'/'}/>)
      }
    return (
      <div id="extr-page">

        <div id="main" role="main" className="animated fadeInDown">
          <div id="content" className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                <div className="well no-padding">
                      <fieldset>
                        <section>
                          <label className="label">E-mail</label>
                          <label className="input">
                            {" "}
                            <i className="icon-append fa fa-user" />
                            <input
                              type="email"
                              name="email"
                              data-smart-validate-input=""
                              data-required=""
                              data-email=""
                              data-message-required=""
                              data-message-email=""
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                            <b className="tooltip tooltip-top-right">
                              <i className="fa fa-user txt-color-teal" />
                              
                            </b>
                          </label>
                        </section>
                        <section>
                          <label className="label">Password</label>
                          <label className="input">
                            {" "}
                            <i className="icon-append fa fa-lock" />
                            <input
                              type="password"
                              name="password"
                              data-smart-validate-input=""
                              data-required=""
                              data-minlength="3"
                              data-maxnlength="20"
                              data-message=""
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                            <b className="tooltip tooltip-top-right">
                              <i className="fa fa-lock txt-color-teal" /> 
                            </b>{" "}
                          </label>

                        </section>
                      </fieldset>
                      <footer>
                        <input type="submit" className="btn btn-primary" value="Login" onClick={this.login}/> 
                      </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);