import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="NavBar">
			<div className="NavBar--button">
				<Link className="NavBar--text" to={'/category/blends'}>Blends de Té</Link>
				<Link className="NavBar--text" to={'/category/biscuits'}>Biscuits</Link>
				<Link className="NavBar--text" to={'/category/teteras'}>Teteras</Link>
			</div>
			<div className="App-logo">
				<Link to={'/'}>
					<img src='/images/logo.png' className="App-logo--img" alt="logo" />
				</Link>
			</div>
			<Link to={'/cart'}>
				<CartWidget />
			</Link>
		</nav>
	);
};

export default Navbar;
