import styles from "./WorkSection.module.css";
import BgImgl from "../../assets/bg-imgl.png";
import WorkImg1 from "../../assets/work-img1.png";
import WorkImg2 from "../../assets/work-img2.png";
import WorkImg3 from "../../assets/work-img3.png";
import WorkImg4 from "../../assets/work-img4.png";

const workImages = [WorkImg1, WorkImg2, WorkImg3, WorkImg4];
const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      {/* ******************* left side ***************** */}
      <div className={styles.leftSide}>
        <img src={BgImgl} alt="background-image" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      </div>

      {/* ******************* right side ***************** */}
      <div className={styles.rightSide}>
        <h1>HOW WE WORK</h1>
      </div>

      {/* ******************* photos section ***************** */}
      <div className={styles.photosSection}>
        <div className={styles.photos}>
          {workImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="work-images"
              className={styles.workImg}
            />
          ))}
        </div>
        <button>CONTACT US</button>
      </div>
    </section>
  );
};

export default WorkSection;
