import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

// function App() {
//     //Для теста асинхронщины
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//
//     const onClick = () => {
//         setToggle(prevState => !prevState)
//     };
//
//     useEffect( () => {
//         const timeout = setTimeout( () => {
//             setData({});
//         }, 100);
//         return (() => clearTimeout(timeout))
//     }, []);
//     return (
//         <div className="App">
//             {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//             {data && <div style={{color: "red"}}>data</div>}
//             <h1>Hello world</h1>
//             <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//             <div data-testid='value-elem'>{value}</div>
//             <input type="text" placeholder="input value ..."
//                    data-testid='value-input'
//                    onChange={({target}) => setValue(target.value)}
//             />
//         </div>
//     );
// }
function App () {
    return (
        <BrowserRouter>
            <Link to={'/'} data-testid={'main-link'}>main</Link>
            <Link to={'/about'} data-testid={'about-link'}>about</Link>
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/about'} element={<AboutPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
