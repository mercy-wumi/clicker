import React, { useState } from 'react';

const Button = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log('Clicked');
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

// what excites me the most about react?
// react concept of component reusability and also been able to write jsx which is similiar to html makes it fun.

// What's the next react related topic you really want to learn?
// I would be looking into react framework (nextjs), state management with redux toolkit and testing.++++++++++++

// what kinds of projects have I worked on using react?
// I have worked on majorly frontend designs (User interfaces, fetching data from api and populating it in the frontend)
// and am currently working on a fullstack web app with it using firebase as the backend (airbnb clone).

export default Button;

