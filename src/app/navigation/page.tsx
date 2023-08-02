import styles from "../../../styles/navigation.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <Image src="/../public/images/logo-hycodev.png" alt={"hycodev logo"}
                   width={392/3 * 1.1}
                   height={100/3 * 1.1}
            className={styles.navbar_image}/>
            <div className={styles.links}>
                <Link href='/home' className={styles.navbar_item}>
                    HOME
                </Link>
                <Link href='/the-team' className={styles.navbar_item}>
                    THE TEAM
                </Link>
                <Link href='/publications' className={styles.navbar_item}>
                    PUBLICATIONS
                </Link>
                <Link href='/software' className={styles.navbar_item}>
                    SOFTWARE
                </Link>
                <Link href='/join-us' className={styles.navbar_item}>
                    JOIN US
                </Link>
            </div>
        </div>

    );
}