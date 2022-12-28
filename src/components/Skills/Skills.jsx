import { Component } from 'react';

export class Skills extends Component {
  state = { variant: null };

  handleChangeSkill = event => {
    this.setState({ variant: event.target.value });
  };

  render() {
    const { handleChangeSkill } = this;
    const { list, name } = this.props;
    const { variant } = this.state;
    return (
      <form>
        {list.map(item => (
          <div key={item.value} className="form-check">
            <input
              className="form-check-input"
              onChange={handleChangeSkill}
              type="radio"
              name={name || 'skills'}
              id={item.value}
              value={item.value}
              checked={variant === item.value}
            />
            <label className="form-check-label" htmlFor={item.value}>
              {item.title}
            </label>
          </div>
        ))}

        <button type="submit" className="btn  btn-primary mt-5">
          Submit
        </button>
      </form>
    );
  }
}
