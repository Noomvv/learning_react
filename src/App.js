import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import React from 'react';



class App extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Владимир',
                    lastname: 'Мун',
                    bio: 'Программист, который любит React',
                    age: 24,
                    isHappy: false
                },
                {
                    id: 2,
                    firstname: 'Софья',
                    lastname: 'Пыхтина',
                    bio: 'Пупсик, которая любит React',
                    age: 19,
                    isHappy: true
                }
            ]
        }
        this.addUser = this.addUser.bind(this);
    }
  
  render() {
    return (
      <div>
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} />
        </main>

        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }

  addUser(user) {
    const id = this.state.users.lenght + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
  }

}

export default App;
