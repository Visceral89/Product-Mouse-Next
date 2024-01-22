import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<Link href={"/"}>Logo</Link>
			</div>
			<div className={styles.linkContainer}>
				<Link href={"#section1"}>Home</Link>
				<Link href={"#section2"}>About</Link>
				<Link href={"#section4"}>Product</Link>
				<Link href={"#section5"}>Specifications</Link>
			</div>
		</nav>
	);
}
