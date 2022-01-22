import React from 'react'
import classes from './ListUsersItem.module.css'
import Card from '../UI/Card'

const ListUsersItem = (props) => {
    return (
        <Card className={classes['list-users-item']}>
            <div className={classes['list-users-item__name']}>{props.name}</div>
            <div>Age: {props.age}</div>
        </Card>
    )
}

export default ListUsersItem