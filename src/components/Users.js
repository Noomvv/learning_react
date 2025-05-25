import React from 'react';

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            age: 22,
            isHappy: false
        }
    ]

  render() {
    if(this.users.length > 0)
        return (<div>
            {this.users.map((el) => (<div className="user" key={el.id}>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.bio}</p>
                <b>{el.isHappy ? 'Счастлив' : 'Не особо'}</b>
            </div>))}
        </div>)
    else
        return (<div className="user">
            <h3>Пользователей нет</h3>
        </div>)
    }
}

export default Users