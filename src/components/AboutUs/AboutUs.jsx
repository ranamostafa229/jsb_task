import styles from "./AboutUs.module.css";
import image from "../../assets/image.png";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      {/* ******************* Left side ***************** */}
      <div className={styles.leftSide}>
        <h1>ABOUT US</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div
          style={{
            display: "flex",
            width: "80%",
          }}
        >
          <button>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="#contact"
            >
              SEE MORE
            </a>
          </button>
        </div>
      </div>

      {/*  ******************* Right side **************** */}
      <div className={styles.rightSide}></div>

      {/*  ******************* Image Divider **************** */}

      <div className={styles.divider}>
        <img src={image} alt="chef-image" />
      </div>
    </section>
  );
};

export default AboutUs;
