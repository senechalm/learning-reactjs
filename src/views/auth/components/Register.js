import React from "react";
import { register } from '../../../common/user/UserFunctions'
import { Redirect, withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        redirectToReferrer: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

  onClick = e => {
    e.preventDefault();
  };

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
}

  onSubmit (e) {
    e.preventDefault()

    const user = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
    }
    register(user).then(res => {
      this.setState({redirectToReferrer: true});
    })
}

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('usertoken')){
      return (<Redirect to={'/login'}/>)
      }
    return (
      <div id="extr-page">
        <div id="main" role="main" className="animated fadeInDown">
          <div id="content" className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="well no-padding">
                  <form
                    id="smart-form-register"
                    className="smart-form client-form"
                    onSubmit={this.onSubmit}
                  >

                    <fieldset>

                      <section>
                        <label className="input">
                          <i className="icon-append fa fa-envelope" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                          <b className="tooltip tooltip-bottom-right">
                            
                          </b>
                        </label>
                      </section>

                      <section>
                        <label className="input">
                          <i className="icon-append fa fa-lock" />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                          <b className="tooltip tooltip-bottom-right">
                            
                          </b>
                        </label>
                      </section>

                      <section>
                        <label className="input">
                          <i className="icon-append fa fa-lock" />
                          <input
                            type="password"
                            name="passwordConfirm"
                            placeholder="Confirm password"
                          />
                          <b className="tooltip tooltip-bottom-right">
                            
                          </b>
                        </label>
                      </section>
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="first_name"
                              placeholder="First name"
                              value={this.state.first_name}
                              onChange={this.onChange}
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input
                              type="text"
                              name="last_name"
                              placeholder="Last name"
                              value={this.state.last_name}
                              onChange={this.onChange}
                            />
                          </label>
                        </section>
                      </div>

                      <section>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            name="subscription"
                            id="subscription"
                          />
                          <i />news and so on....
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" name="terms" id="terms" />
                          <i />agree with
                          <a href="#/"
                            onClick={this.onClick}
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </section>
                    </fieldset>
                    <footer>
                      <button type="submit"
                                className="btn btn-primary">
                                Register
                            </button>
                    </footer>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}
export default withRouter(Register);