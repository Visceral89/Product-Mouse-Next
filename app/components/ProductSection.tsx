import Link from "next/link";
import styles from "../styles/Section.module.scss";
import { forwardRef } from "react";
import Navigation from "./Navigation";

interface Props {
	activeSectionIndex: number;
}

const ProductSection = forwardRef<HTMLDivElement, Props>(
	({ activeSectionIndex }, ref) => {
		return (
			<section id='section4' className={styles.Section} ref={ref}>
				<Navigation activeSectionIndex={activeSectionIndex} />
				Product Section
			</section>
		);
	}
);

export default ProductSection;
