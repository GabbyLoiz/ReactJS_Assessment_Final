import React, { useState } from 'react'

import classes from './UserForm.css';
import Button from '../Button/Button'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      className={classes.UserForm}
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <h2>Edit user</h2>
      <h3>Name</h3>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} className={classes.InputElement}/>
      <h3>Email</h3>
      <input type="text" name="email" value={user.email} onChange={handleInputChange} className={classes.InputElement}/>
      <h3>Phone Number</h3>
      <input type="text" name="phonenumber" value={user.phonenumber} onChange={handleInputChange} className={classes.InputElement}/>

      <Button btnType="Success">Update</Button>
      <Button btnType="Cancel" onClick={() => props.setEditing(false)}>
        Cancel
      </Button>
    </form>
  )
}

export default EditUserForm