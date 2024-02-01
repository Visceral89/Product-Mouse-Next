import Link from "next/link";
import styles from "../styles/Section.module.scss";
import about from "../styles/About.module.scss";
import { forwardRef } from "react";
import Navigation from "./Navigation";

interface Props {
	activeSectionIndex: number;
}

const AboutSection = forwardRef<HTMLDivElement, Props>(
	({ activeSectionIndex }, ref) => {
		return (
			<section id='section2' className={styles.Section} ref={ref}>
				<div className={styles.sectionWrapper}>
					<div className={about.canvasWrapper}>
						<canvas></canvas>
					</div>
					<div className={about.informationWrapper}>
						<div className={about.textContainer}>
							<h1>MAKE YOUR PLAY</h1>
							<p>
								Seize control with the C404 — the ultimate weapon for MMO and
								Battle Royale supremacy. With its ergonomic design tailored for
								strategic play, the C404 LIGHTSPEED Wireless Gaming Mouse
								empowers you with 15 programmable controls. Experience seamless
								gameplay with dual LIGHTSPEED and Bluetooth connectivity,
								bolstered by a leading-edge HERO 16K sensor. This mouse isn’t
								just a tool; it’s an extension of your will, ensuring you stay
								in the fight longer, strike faster, and elevate every aspect of
								your game.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
);

export default AboutSection;
