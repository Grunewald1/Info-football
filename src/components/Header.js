import React from "react";
import { navLinks } from "../data";
import Link from "next/link";

export default function Header() {
	return (
		<div className="menu">
			<div>
				<div>Infootball</div>
			</div>
			<nav className="navbar">
				{navLinks.map((link, index) => {
					return (
						<ul className="navitem">
							<Link className="navlink"href={link.path}>
								<li key={index}>{link.name}</li>
							</Link>
						</ul>
					);
				})}
			</nav>
		</div>
	);
}