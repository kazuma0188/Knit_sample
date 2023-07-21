import React ,{ useState }from "react";
import { Link } from 'react-router-dom';

export const Home = () => {
  const [count,setCount] = useState(0);
  //const [val, setVal] = useState("");
  const increment = () =>{
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  }
    return (
      
      <div className="Home">
        <h1>Home</h1>
        <h1>kooko{ count }</h1>
        <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br/>
      <Link to="/main">Homemain</Link>
      
      </div>
      
    );
  
  };
export default Home