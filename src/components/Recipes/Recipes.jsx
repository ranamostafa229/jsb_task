import useFetch from "../../hooks/useFetch";
import styles from "./Recipes.module.css";
const Recipes = () => {
  const { data } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast&limit=3"
  );
  return (
    <section className={styles.section}>
      <h1>RECIPES</h1>
      <div className={styles.container}>
        {data?.meals?.slice(0, 3).map((meal) => (
          <div className={styles.card} key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="" />
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
