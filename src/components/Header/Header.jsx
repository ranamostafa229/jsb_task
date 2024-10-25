import styles from "./Header.module.css";
import BgImg1 from "../../assets/bg-img1.png";
import BgImg2 from "../../assets/bg-img2.png";
import vkIcon from "../../assets/vk-icon.png";
import instIcon from "../../assets/instagram-icon.png";
import fbIcon from "../../assets/facebook-icon.png";
import twIcon from "../../assets/twitter-icon.png";
import BreadImg from "../../assets/bread.png";
import Button from "../Button/Button";

const Header = () => {
  return (
    <section className={styles.section}>
      {/* ******************* Left side ***************** */}
      <div className={styles.leftSide}>
        <div className={styles.leftSideText}>
          <span>Peachy Pup Bakery</span>
          <div>
            <h1>Tasty pastries</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button>SEE MORE</button>
            {/* <Button title="SEE MORE" /> */}
          </div>
        </div>
        {/* ****************** Left side image **************** */}
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
      </div>

      {/*  ******************* Right side **************** */}
      <div className={styles.rightSide}>
        <img src={BgImg1} alt="bg-img1" />
      </div>

      {/*  ******************* Image Divider **************** */}

      <div className={styles.divider}>
        <img src={BreadImg} alt="bread-image" />
      </div>
    </section>
  );
};

export default Header;
