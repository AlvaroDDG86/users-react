import React from 'react'
import classes from './ListUsers.module.css'
import ListUsersItem from './ListUsersItem'

const ListUsers = (props) => {
    return (
        <div className={classes['list-users']}>
            {
                props.list.map((item, idx) => {
                    return (
                        <ListUsersItem name={item.name} age={item.age} key={idx} />
                    )
                })
            }
        </div>
    )
}

export default ListUsers