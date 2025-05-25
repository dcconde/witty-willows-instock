import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import inStockLogo from "../../assets/logo/instock-logo.svg";
import "./header.scss";

function Header() {
	return (
		<header className="header">
			<Link to="/" className="header__logo-link">
				<img src={inStockLogo} alt="instock logo" className="header__logo" />
			</Link>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className="header__nav-item">
						<NavLink
							to="/"
							className="header__nav-link header__nav-link--warehouses"
						>
							Warehouses
						</NavLink>
					</li>
					<li className="header__nav-item">
						<NavLink
							to="/inventory"
							className="header__nav-link header__nav-link--inventory"
						>
							Inventory
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
