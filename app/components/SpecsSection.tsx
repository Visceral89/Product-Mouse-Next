import Link from "next/link";
import styles from "../styles/Section.module.scss";
import { forwardRef } from "react";
import Navigation from "./Navigation";

interface Props {
	activeSectionIndex: number;
}

const SpecsSection = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<section id='section5' className={styles.Section} ref={ref}>
			Specs Section
		</section>
	);
});

export default SpecsSection;
