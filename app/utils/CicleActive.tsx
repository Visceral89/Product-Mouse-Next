import Image from "next/image";
import styles from "../styles/Navigation.module.scss";

export default function CircleActive() {
	return (
		<div className={styles.circleActive}>
			<Image src='active.svg' height={24} width={24} alt='circle icon' />
		</div>
	);
}
