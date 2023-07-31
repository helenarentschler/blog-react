import { useState } from 'react';

const Home = () => {

    const handleClick = () => {
        console.log("Hello");
    }
    const handleClickAgain = (name, event) => {
        console.log("Hello " + name, event.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}> Click me </button>
            {/* funçao anonima receb o evento e passa passa a funçao interna */}
            <button onClick={(event) => handleClickAgain("Helena", event)}> Click Again </button>
        </div>
     );
}
 
export default Home;