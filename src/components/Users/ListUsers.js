import React from 'react'
import classes from './ListUsers.module.css'
import ListUsersItem from './ListUsersItem'
import Card from '../UI/Card'

const ListUsers = (props) => {
    return (
        <div className={classes['list-users']}>
            {   props.list.length > 0 &&
                props.list.map((item, idx) => {
                    return (
                        <ListUsersItem name={item.name} age={item.age} key={idx} />
                    )
                })
            }
            {
                props.list.length === 0 &&
                <Card className={classes['list-users--empty']}>
                    Nothing to show
                </Card>
            }
        </div>
    )
}

export default ListUsers