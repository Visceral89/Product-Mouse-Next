"use client";

import Link from "next/link";
import styles from "../styles/Navigation.module.scss";

export default function Navigation({ activeSelectionIndex }: any) {
	return (
		<nav className={styles.navigation}>
			{[...Array(5)].map((_, index) => (
				<Link
					key={index}
					href={`#section${index + 1}`}
					className={
						activeSelectionIndex === index ? styles.active : styles.inactive
					}
				>
					<div></div>
				</Link>
			))}
		</nav>
	);
}
