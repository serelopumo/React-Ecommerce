import './Navbar.css';
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
	return (
		<nav className="NavBar">
			<div className="NavBar--button">
				<button className="NavBar--text">Blends de Té</button>
				<button className="NavBar--text">Biscuits</button>
				<button className="NavBar--text">Teteras</button>
			</div>
			<div className="App-logo">
				<img src={logo} className="App-logo--img" alt="logo" />
			</div>
			<CartWidget />
		</nav>
	);
};

export default Navbar;
