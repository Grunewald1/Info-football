import React from "react";
import { navLinks } from "../data";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from "next/head";



export default function Header({children, href}) {


	const router = useRouter()

	var responsive = ""; 

	function menuToggle() {
		if(responsive == "")
			responsive = "responsive"
		else
			responsive = ""
	};

	return (
		<div className={"topnav "+responsive} >

			<Head>
				<title>Infootball</title>
				<link rel="shortcut icon" href="/logosite.png" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

			</Head>

			<Image className="logo-container" layout="" width={"54px"} height={"54px"} src="/logosite.png"></Image>

			{navLinks.map((link, index) => {
				return (
					<Link href={link.path}>
						<a href={link.path} className={router.asPath === link.path ? 'active' : ''}>
							{link.name}
						</a>
					</Link>

				);
			})}


			<a href="" className="icon" onClick={menuToggle}>
				<i className="fa fa-bars"></i>
			</a>


		</div>


		// <div className="menu">



		// 	<nav className="navbar">
		// {navLinks.map((link, index) => {
		// 	return (
		// 		<ul className="navitem">
		// 			<Link className="navlink"href={link.path}>
		// 				<li key={index}>{link.name}</li>
		// 			</Link>
		// 		</ul>
		// 	);
		// })}
		// 	</nav>
		// </div>
	);
}