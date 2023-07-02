import './App.css';
import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import AppRouter from "./components/AppRouter/AppRouter";

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
// Для тестирования роутера
function App () {
    return (
    <div>
            <Link to={'/'} data-testid={'main-link'} className="link-route">main</Link>
            <Link to={'/about'} data-testid={'about-link'} className="link-route">about</Link>
            <Link to={'/users'} data-testid={'users-link'} className="link-route">users</Link>
            <AppRouter />
    </div>
    );
}

export default App;
