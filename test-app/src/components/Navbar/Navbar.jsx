import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={'/'} data-testid={'main-link'} className="link-route">main</Link>
            <Link to={'/about'} data-testid={'about-link'} className="link-route">about</Link>
            <Link to={'/users'} data-testid={'users-link'} className="link-route">users</Link>
        </div>
    );
};

export default Navbar;