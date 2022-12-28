import { Component } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  state = {
    usersList: usersJson,
    filter: '',
  };

  handleDeleteUser = idToDelete => {
    this.setState(prevState => ({ usersList: prevState.usersList.filter(user => user.id !== idToDelete) }));
  };

  handleChangeFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  getFilteredUsers = () => {
    const { filter, usersList } = this.state;
    return usersList.filter(user => user.name.includes(filter));
  };

  render() {
    const { filter } = this.state;
    const { handleDeleteUser, handleChangeFilter, getFilteredUsers } = this;
    const filteredUsers = getFilteredUsers();

    return (
      <>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search username"
            value={filter}
            onChange={handleChangeFilter}
          />
          <button className="btn btn-primary" type="button">
            Clear
          </button>
        </div>

        <div className="mb-5">
          {filteredUsers.map(user => (
            <UsersItem key={user.id} user={user} onDeleteUser={handleDeleteUser} />
          ))}
        </div>
      </>
    );
  }
}
