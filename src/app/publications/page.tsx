import Banner from '../article-banner/page'
import styles from '../../../styles/publications.module.scss'
import Article from '../article/page'
import ResearchBox from '../researcher-box/page'
import PublicationsList from '../publications-list/page'

export default function Publications (){
    return(
        <div className={styles.container}>

            <Banner source={"/../public/images/cropped.png"} title={"POWER SYSTEMS"}></Banner>
            <div className={styles.banner}>
                <Article/>
                <ResearchBox></ResearchBox>
            </div>
            <div className={styles.list}>
                <PublicationsList/>
            </div>

        </div>
    )
}