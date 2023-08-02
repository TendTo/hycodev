import Image from 'next/image'
import styles from "../../../styles/article-banner.module.scss";

export default function Banner ({title, source}) {
    return (
    <div className={styles.container}>
        <div className={styles.backdrop}></div>
        <Image style={{objectFit:"cover"}} src={source} fill={true}
        />
        <h1 className={styles.heading}>{title}</h1>
    </div>
    )
}