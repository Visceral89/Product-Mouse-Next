"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";

export default function Home() {
	const [activeSection, setActiveSection] = useState(0);
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);

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

		const refs = [section1Ref, section2Ref /* ... more refs */];
		refs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
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
