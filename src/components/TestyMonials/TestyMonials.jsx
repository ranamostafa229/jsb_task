import styles from "./TestyMonials.module.css";
import StarImg from "../../assets/star.png";

const cardItem = [
  {
    name: "Kathryn Murphy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    stars: StarImg,
  },
  {
    name: "Kathryn Murphy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    stars: StarImg,
  },
  {
    name: "Kathryn Murphy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    stars: StarImg,
  },
  {
    name: "Kathryn Murphy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    stars: StarImg,
  },
];
const TestyMonials = () => {
  return (
    <section className={styles.section}>
      <h1>TESTYMONIALS</h1>
      <div className={styles.container}>
        {cardItem.map((item, index) => (
          <div className={styles.card} key={index}>
            <span>{item.name}</span>
            <p>{item.text}</p>
            <div style={{ display: "flex", gap: "5px" }}>
              <img src={item.stars} alt="" />
              <img src={item.stars} alt="" />
              <img src={item.stars} alt="" />
              <img src={item.stars} alt="" />
              <img src={item.stars} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// {Array.from(Array(3)).map((item, index) => (
//     <div className={styles.card} key={index}>
//       <img src={StarImg} alt="" />
//       <span>Kathryn Murphy</span>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text
//         ever since the 1500s, when an unknown printer took a galley of
//         type and scrambled
//       </p>
//     </div>
//   ))}
export default TestyMonials;
