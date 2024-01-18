"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useRef } from "react";
import Navigation from "./components/Navigation";

export default function Home() {
	const section1 = useRef(null);
	const section2 = useRef(null);
	const section3 = useRef(null);
	const section4 = useRef(null);

	return (
		<main className={styles.main}>
			<Navigation sectionRefs={[section1, section2, section3, section4]} />
			{/* Replace theese divs with acctual components */}
			<div ref={section1}></div>
			<div ref={section2}></div>
			<div ref={section3}></div>
			<div ref={section4}></div>
		</main>
	);
}
