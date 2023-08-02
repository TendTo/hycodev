import Image from 'next/image'
import styles from '../../../styles/researcher-box.module.scss'

export default function ResearchBox () {
    return (
        <div className={styles.container}>
            <h2>Researchers</h2>
            <div className={styles.researcher}>
                <div className={styles.researcher__photo}>
                    <div className={styles.spin}>
                    </div>
                    <Image className={styles.image} src={"/../public/images/ben-wooding.png"} alt={"ben"} width={428} height={449}/>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.heading}>Ben Wooding</h4>
                    <p className={styles.paragraph}>Phd Student</p>
                    <p className={styles.paragraph}>email: ben@newcastle.ac.uk</p>
                </div>
            </div>
            <div className={styles.researcher}>
                <div className={styles.researcher__photo}>
                    <div className={styles.spin}>
                    </div>
                    <Image className={styles.image} src={"/../public/images/ben-wooding.png"} alt={"ben"} width={428} height={449}/>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.heading}>Ben Wooding</h4>
                    <p className={styles.paragraph}>Phd Student</p>
                    <p className={styles.paragraph}>email: ben@newcastle.ac.uk</p>
                </div>
            </div>
        </div>
    )
}