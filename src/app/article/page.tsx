import styles from "../../../styles/article.module.scss";
import Image from "next/image"


export default function Article (){
    return(
        <div className={styles.container}>
            <div className={styles.container_content}>
                <h2 className={styles.heading}>Formal Methods for Control and Verification in Power Systems</h2>
                <div className={styles.container_image}>
                    <Image className={styles.image} src={"/../public/images/article.png"} width={706} height={534} alt={"asda"}></Image>
                </div>
                <div className={styles.container_text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper.  Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper. Donec porttitor velit pretium.</p>
                </div>
            </div>
        </div>
    )
}