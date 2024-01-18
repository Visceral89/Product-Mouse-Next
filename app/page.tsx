"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";

export default function Home() {
	const [activeSection, setActiveSection] = useState(0);
	const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);

				if (visibleSection) {
					const visibleSectionIndex = sectionRefs.findIndex(
						(ref) => ref.current === visibleSection.target
					);
					setActiveSection(visibleSectionIndex);
				}
			},
			{ threshold: 0.6 }
		);

		sectionRefs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

	return (
		<main className={styles.main}>
			<Navigation activeSelectionIndex={activeSection} />
			{/* Replace theese divs with acctual components */}
			<div id='section1'></div>
			<div id='section2'></div>
			<div id='section3'></div>
			<div id='section4'></div>
		</main>
	);
}
