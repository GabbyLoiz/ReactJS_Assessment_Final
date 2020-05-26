import React, { Component } from 'react';

import axios from './axios-users'
import UserForm from './UserForm';

class App extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
      console.log("ComponentDidMount");
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
              const fetchedUsers = [];
              for (let key in res.data) {
                  fetchedUsers.push({
                      ...res.data[key],
                      id: key
                  });
              }
              this.setState({loading: false, users: fetchedUsers});
              console.log('Import successful')
              console.log("[App.js] users", this.state.users)
          })
          .catch(err => {
              console.log('Import unsuccessful')
          });
  }

  render () {
    return (
      <div>
        <UserForm userData={this.state.users} />
      </div>
    );
  }
}

export default App;
