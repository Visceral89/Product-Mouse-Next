"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useRef, useState, createRef } from "react";

import {
	HeroSection,
	AboutSection,
	DetailsSection,
	ProductSection,
	SpecsSection,
} from "./utils";
/*
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import DetailsSection from "./components/DetailsSection";
import ProductSection from "./components/ProductSection";
import SpecsSection from "./components/SpecsSection";
*/
export default function Home() {
	const [activeSectionIndex, setActiveSectionIndex] = useState(0);

	// Create an array to hold refs for each section
	const sectionRefs = useRef([...Array(5)].map(() => createRef()));

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Find the index of the section that is currently visible
						const visibleSectionIndex = sectionRefs.current.findIndex(
							(ref) => ref.current === entry.target
						);
						setActiveSectionIndex(visibleSectionIndex);
					}
				});
			},
			{ threshold: 0.6 }
		);

		// Observe each section
		sectionRefs.current.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		// Cleanup
		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref.current) observer.unobserve(ref.current);
			});
		};
	}, []);

	return (
		<main className={styles.main}>
			<HeroSection
				activeSectionIndex={activeSectionIndex}
				ref={sectionRefs.current[0]}
			/>
			<AboutSection
				activeSectionIndex={activeSectionIndex}
				ref={sectionRefs.current[1]}
			/>
			<DetailsSection
				activeSectionIndex={activeSectionIndex}
				ref={sectionRefs.current[2]}
			/>
			<ProductSection
				activeSectionIndex={activeSectionIndex}
				ref={sectionRefs.current[3]}
			/>
			<SpecsSection
				activeSectionIndex={activeSectionIndex}
				ref={sectionRefs.current[4]}
			/>
		</main>
	);
}
