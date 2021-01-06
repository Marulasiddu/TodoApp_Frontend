import React from 'react';
import Todo from '../todo/Todo';
import './Home.css';

function Home() {
    
    return (
        <React.Fragment>
            <div className='home_'>
                <Todo />
            </div>
        </React.Fragment>
    );
}

export default Home;