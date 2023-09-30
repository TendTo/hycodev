import styles from "../../styles/components/splash-screen.module.scss";
import React from "react";

const SplashScreen = () => {
  return (
    <div className={styles.container}>
      <video
        autoPlay
        muted
        width="500"
        style={{ backgroundColor: "transparent" }}
      >
        <source src="videos/hycodev_logo_white.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
export default SplashScreen;
