import React, { useState } from 'react'

import classes from './UserTable.css'

import Button from '../Button/Button'
import AddUserForm from '../forms/AddUser';
import EditUserForm from '../forms/EditUser';

const UserTable = props => {

  const usersTemp = [
    { id: 1, name: 'Gab', email: 'gabbyloiz13@gmail.com', phonenumber: '111-111-1111' },
    { id: 2, name: 'Gabo', email: 'greengabby13@gmail.com', phonenumber: '222-222-2222' },
    { id: 3, name: 'Gabby', email: 'johngab1@gmail.com', phonenumber: '333-333-3333' },
    { id: 4, name: 'John', email: 'john393@gmail.com', phonenumber: '444-444-4444' },
    { id: 5, name: 'loiz', email: 'john.gabriel.loiz@gmail.com', phonenumber: '555-555-5555' },
  ]

  const usersData = Object.values(props.usersDataLoad)[0]

  const [users, setUsers] = useState(usersTemp)

  console.log("[UserTable] props.usersDataLoad", props.usersDataLoad)
  console.log("[UserTable] usersTemp", usersTemp)

  console.log("[UserTable] usersData", usersData)
  console.log("[UserTable] users", users)

  //Add
  const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
  }

  //Delete
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Update
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', email: '', phonenumber: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    
    setCurrentUser({ id: user.id, name: user.name, email: user.email, phonenumber: user.phonenumber })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  let table = (
    <div className={classes.UserTable}>
      <h2>View users</h2>
      <table className={classes.Table}>
        <thead>
          <tr key="Head">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>
                  <Button
                    btnType="Success">View</Button>
                  <Button
                    btnType="Success"
                    clicked={() => {
                      editRow(user)
                    }}
                  >
                  Update
                  </Button>
                  <Button
                    btnType="Delete" 
                    clicked={() => deleteUser(user.id)} 
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="container">
      <h1 className="Title">Enter your Contact Information</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
            {table}
        </div>
      </div>
    </div>
  ) 
}

export default UserTable