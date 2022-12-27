import { Component } from 'react';

import { login } from 'helpers/login';
import { Skills } from 'components/Skills/Skills';
import { skillsList } from 'config';

// const initialState = { email: '', password: '', agreed: false };

const phones = [
  { value: 'iphone', title: 'IPhone' },
  { value: 'xiaomi', title: 'Xiaomi' },
  { value: 'samsung', title: 'Samsung' },
];

export class LoginForm extends Component {
  state = { email: '', password: '', agreed: false };
  // state = { ...initialState };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleChangeTerms = e => {
    const { checked } = e.target;
    this.setState({ agreed: checked });
  };
  handleChangeCredentials = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, agreed } = this.state;
    if (!agreed) {
      return alert('Please agree terms');
    }
    login(this.state);
    this.setState({ email: '', password: '', agreed: false });
    // this.setState(initialState);
  };

  render() {
    const { handleChangeEmail, handleChangePassword, handleChangeTerms, handleSubmit, handleChangeCredentials } = this;
    const { email, password, agreed } = this.state;

    return (
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChangeCredentials}
            // onChange={handleChangeEmail}
            name="email"
            type="text"
            required
            className="form-control"
            id="email"
            value={email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="text"
            className="form-control"
            id="password"
            required
            onChange={handleChangeCredentials}
            // onChange={handleChangePassword}
            value={password}
          />
        </div>
        {/* <Skills name="phones" list={phones} />
        <Skills list={skillsList} /> */}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            checked={agreed}
            name="terms"
            onChange={handleChangeTerms}
          />
          <label className="form-check-label" htmlFor="terms">
            Agree to terms
          </label>
        </div>

        <button className="btn btn-primary" type="submit" disabled={!agreed}>
          Submit
        </button>
      </form>
    );
  }
}
