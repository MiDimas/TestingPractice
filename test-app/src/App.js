import './App.css';
import {useEffect, useState} from "react";

function App() {
    //Для теста асинхронщины
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    const onClick = () => {
        setToggle(prevState => !prevState)
    };

    useEffect( () => {
        const timeout = setTimeout( () => {
            setData({});
        }, 100);
        return (() => clearTimeout(timeout))
    }, []);
    return (
        <div className="App">
            {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
            {data && <div style={{color: "red"}}>data</div>}
            <h1>Hello world</h1>
            <button data-testid='toggle-btn' onClick={onClick}>click me</button>
            <input type="text" placeholder="input value ..." />
        </div>
    );
}

export default App;
