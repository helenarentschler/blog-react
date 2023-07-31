import { useState } from 'react';

const Home = () => {

    // useState hook retorna array
    // name é uma variavel reativa
    const [name, setName] = useState('Helena');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('Sandro');
        setAge(30);
    }
   
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age }</p>
            <button onClick={handleClick}> Click me </button>
        </div>
     );
}
 
export default Home;