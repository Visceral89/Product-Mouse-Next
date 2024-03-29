"use client";

import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import Circle from "../utils/Cicle";
import CircleActive from "../utils/CicleActive";

export default function Navigation({ activeSectionIndex }: any) {
	console.log(activeSectionIndex);

	return (
		<nav className={styles.navigation}>
			{[...Array(5)].map((_, index) => (
				<Link
					key={index}
					href={`#section${index + 1}`}
					className={
						activeSectionIndex === index ? styles.active : styles.inactive
					}
				>
					{activeSectionIndex === index ? <CircleActive /> : <Circle />}
				</Link>
			))}
		</nav>
	);
}
