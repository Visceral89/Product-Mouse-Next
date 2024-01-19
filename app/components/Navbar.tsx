import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div>Logo</div>
			<div>
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>About</Link>
				<Link href={"/"}>Product</Link>
				<Link href={"/"}>Specifications</Link>
			</div>
		</nav>
	);
}
