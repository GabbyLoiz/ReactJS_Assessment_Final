import React, { Component } from 'react';

import UserTable from './tables/UserTable';

class UserForm extends Component {
  state = {
    usersData: [],
  }

  componentWillReceiveProps(nextProps){
    console.log("[UserForm] componentWillReceiveProps", nextProps)
    this.setState({usersData: nextProps});
    console.log("[UserForm] CurrentState(usersData)", nextProps)

    return (
      <div>
        <UserTable usersDataLoad={this.state.usersData} />
      </div>
    );
 }

  render () {
    return (
      <div>
        <UserTable usersDataLoad={this.state.usersData} />
      </div>
    );
  }
  
}

export default UserForm;
