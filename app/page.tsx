"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useRef, useState, forwardRef } from "react";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
	const [activeSectionIndex, setActiveSectionIndex] = useState(0);

	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);
				if (visibleSection) {
					const visibleSectionIndex = entries.indexOf(visibleSection);
					setActiveSectionIndex(visibleSectionIndex);
				}
			},
			{ threshold: 0.6 }
		);

		// Observe each section
		const refs = [section1Ref, section2Ref, section3Ref, section4Ref];
		refs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<main className={styles.main}>
			<HeroSection activeSectionIndex={activeSectionIndex} ref={section1Ref} />
			<AboutSection activeSectionIndex={activeSectionIndex} ref={section2Ref} />
			{/* Replace theese divs with acctual components */}
			<div id='section1'></div>
			<div id='section2'></div>
			<div id='section3'></div>
			<div id='section4'></div>
		</main>
	);
}
