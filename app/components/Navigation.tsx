"use client";

import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import { useEffect, useState } from "react";

export default function Navigation({ activeSelectionIndex }: any) {
	return (
		<nav>
			{[...Array(5)].map((_, index) => (
				<Link
					key={index}
					href={`#section${index + 1}`}
					className={activeSelectionIndex === index ? styles.active : ""}
				>
					<div></div>
				</Link>
			))}
		</nav>
	);
}
