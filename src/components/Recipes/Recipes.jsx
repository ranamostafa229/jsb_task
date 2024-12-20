import useFetch from "../../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import styles from "./Recipes.module.css";
const Recipes = () => {
  const { data } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
  );
  return (
    <section className={styles.section}>
      <h1>RECIPES</h1>
      <div className={styles.container}>
        {data?.meals?.slice(0, 3).map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <button>
        <a style={{ textDecoration: "none", color: "inherit" }} href="#contact">
          CONTACT US
        </a>
      </button>
    </section>
  );
};

export default Recipes;
