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
				<div className={styles.sectionWrapper}>
					<div className={hero.informationWrapper}>
						<div className={styles.textContainer}>
							<h1>Forge your firepower</h1>
							<p className={styles.textBold}>
								Introducing the all-new C404, engineered for Battle Royale
								supremacy. Sharpen your skills and dominate every moment of the
								conflict.
							</p>

							<p>
								Elevate your gameplay with the precision you deserve. Harness
								the power of programmable controls, LIGHTSPEED wireless
								technology, and Bluetooth connectivity. With a 16K DPI sensor
								and up to 240 hours of battery life, become the ultimate
								sharpshooter in every gaming arena.
							</p>
							<button>play advanced</button>
						</div>
					</div>
					<div className={hero.imageWrapper}>Image</div>
				</div>
			</section>
		);
	}
);

export default HeroSection;
