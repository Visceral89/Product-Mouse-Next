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
					<div className={hero.informationWrapper}>
						<div className={hero.textContainer}>
							<h1>Forge your firepower</h1>
							<p className={hero.textBold}>
								all-new c404 for battle royale mastery. Focus your skill and own
								every moment of the fight.
							</p>
							<p>
								Make your weapons play harder in the configuration you deserver.
								Use the programmable controls, LIGHTSPEED, Bluetooth wireless
								16k dpi sensor and 240 battery life to the be the fastest
								gunslinger on the battlefield.
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
