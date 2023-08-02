import styles from '../../../styles/person-box.module.scss'
import Image from 'next/image'

export default function PersonBox({name, role, image, link}) {
    console.log(image)
    return(
        <div className={styles.member}>
            <div className={styles.wrapper_profile}>
                <Image
                    className={styles.member_profile}
                    src={image}
                    alt={name}
                    fill={true}
                    objectFit="cover"
                />
            </div>
            <div className={styles.wrapper_names}>
                <a href={link} style={{textDecoration: 'none'}}>
                    <p className={styles.member_name}>{name}</p>
                    <p className={styles.member_role}>{role}</p>
                </a>

            </div>
        </div>
    )
}