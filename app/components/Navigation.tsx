"use client";

import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function Navigation({ sectionRefs }) {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		sectionRefs.forEach((ref, index) => {
			if (useInView(ref.current)) {
				setActiveSection(index);
			}
		});
	}, [sectionRefs]);

	return (
		<nav>
			{sectionRefs.map((_: any, index: number) => (
				<Link
					key={index}
					href={`#section${index + 1}`}
					className={activeSection === index ? "highlight" : ""}
				></Link>
			))}
		</nav>
	);
}
