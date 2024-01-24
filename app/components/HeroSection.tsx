import Link from "next/link";
import styles from "../styles/Section.module.scss";
import hero from "../styles/Hero.module.scss";
import { forwardRef } from "react";
import Navigation from "./Navigation";
import Image from "next/image";

interface Props {
	activeSectionIndex: number;
}

const HeroSection = forwardRef<HTMLDivElement, Props>(
	({ activeSectionIndex }, ref) => {
		return (
			<section id='section1' className={styles.Section} ref={ref}>
				<div className={hero.sectionWrapper}>
					<div>Hero Section</div>
					<div>Image</div>
				</div>
			</section>
		);
	}
);

export default HeroSection;
