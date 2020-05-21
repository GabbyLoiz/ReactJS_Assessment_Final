import React, { useState } from 'react'

import classes from './UserForm.css';
import Button from '../Button/Button'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', email: '', phonenumber: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      className={classes.UserForm}
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.email || !user.phonenumber) return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <h2>Add user</h2>
      <h3>Name</h3>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} className={classes.InputElement}/>
      <h3>Email</h3>
      <input type="text" name="email" value={user.email} onChange={handleInputChange} className={classes.InputElement}/>
      <h3>Phone Number</h3>
      <input type="text" name="phonenumber" value={user.phonenumber} onChange={handleInputChange} className={classes.InputElement}/>

      <Button btnType="Success">Add</Button>
    </form>
  )
}

export default AddUserForm