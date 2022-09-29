import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h1 className='header'>Blog Part</h1>
            <div className='q1'>
                <h3 className='qq1'>How Does React work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='q2'>
                <h3 className='qq2'>difference between props and state</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
            <div className='q3'>
                <h3 className='qq3'>How Does React work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
        </div>
    );
};

export default Blog;