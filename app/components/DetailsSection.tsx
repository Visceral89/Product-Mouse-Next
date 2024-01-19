import Link from "next/link";
import styles from "../styles/Section.module.scss";
import { forwardRef } from "react";
import Navigation from "./Navigation";

interface Props {
	activeSectionIndex: number;
}

const DetailsSection = forwardRef<HTMLDivElement, Props>(
	({ activeSectionIndex }, ref) => {
		return <section ref={ref}>Details Section</section>;
	}
);

export default DetailsSection;
