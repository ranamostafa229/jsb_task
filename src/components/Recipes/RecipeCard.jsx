import styles from "./Recipes.module.css";

const RecipeCard = ({ meal }) => {
  return (
    <div className={styles.card} key={meal.idMeal}>
      <img src={meal.strMealThumb} alt="meal" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          gap: "10px",
        }}
      >
        <span className={styles.title}>{meal.strMeal}</span>
        <span className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
