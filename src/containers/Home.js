import React, { Component } from 'react';
import { TodoList } from '../components';
class Home extends Component {
    render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    }
}

export default Home;