import React from 'react'

import classes from './UserForm.css';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';

const ViewUserForm = props => {
    return (
        <form
            className={classes.UserForm} >
            <h2>View user</h2>
            <h3>Id: {props.id}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Phone Number: {props.phonenumber}</h3>

            <Button btnType="Add"><Link to="/">Back</Link></Button>
        </form>
    )
}

export default ViewUserForm