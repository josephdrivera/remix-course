import { NavLink } from '@remix-run/react';

function NavItem({path, label}) {
	return (
		<li className="nav-item">
			<NavLink to={path}>{label}</NavLink>
		</li>
	);
}

function MainNavigation() {
	return (
		<nav id="main-navigation">
			<ul>
				<NavItem path="/" label="Home"/>
				<NavItem path="/notes" label="My Notes"/>
			</ul>
		</nav>
	);
}

export default MainNavigation;