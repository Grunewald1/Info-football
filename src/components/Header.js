import React from "react";
import { navLinks } from "../data";
import Link from "next/link";

export default function Header() {
	return (
		<div className="menu">
			<div className="logo-container">
				<div>
					<img  width="100" height = "64"src="/logosite.png"></img>
				</div>
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