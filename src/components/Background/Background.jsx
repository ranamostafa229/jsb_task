import styles from "./Background.module.css";
import BgImg1 from "../../assets/bg-img1.png";
import BgImg2 from "../../assets/bg-img2.png";
import vkIcon from "../../assets/vk-icon.png";
import instIcon from "../../assets/instagram-icon.png";
import fbIcon from "../../assets/facebook-icon.png";
import twIcon from "../../assets/twitter-icon.png";
import BreadImg from "../../assets/bread.png";
const Background = ({
  title,
  description,
  textButton,
  upperText,
  leftSideImg,
}) => {
  return (
    <section className={styles.section}>
      {/* ******************* Left side ***************** */}
      <div className={styles.leftSide}>
        <div className={styles.leftSideText}>
          <span>{upperText}</span>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>{textButton}</button>
          </div>
        </div>
      </div>
      {/* ****************** Left side image **************** */}
      {leftSideImg && (
        <>
          <div className={styles.leftSideImg}>
            <img src={BgImg2} alt="bg-img1" />
            <div className={styles.socialIcons}>
              <img src={vkIcon} alt="vk-icon" />
              <img src={instIcon} alt="instgram-icon" />
              <img src={fbIcon} alt="facebook-icon" />
              <img src={twIcon} alt="twitter-icon" />
            </div>
          </div>
          <div className={styles.telephone}>
            <strong>Telephone:</strong>
            +7 700 000 00 00
          </div>
        </>
      )}
      {/* ******************* Right side ***************** */}
    </section>
  );
};

export default Background;
