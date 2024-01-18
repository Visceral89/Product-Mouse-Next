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
			<section ref={ref}>
				<Navigation activeSectionIndex={activeSectionIndex} />
				Component Section
			</section>
		);
	}
);

export default ProductSection;
