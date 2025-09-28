import { getData } from "../../../utils/dataServices";
import Card from "../../../components/CardRecipes";

export async function generateMetadata({ params }) {
  return {
    title: `recipes-${params.id}`,
    description: "This is recipes page",
  };
}

export default async function Recipes({ params }) {
  const recipes = await getData(`https://dummyjson.com/recipes/${params.id}`);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <Card
        key={recipes.id}
        href={`/recipes/${recipes.id}`}
        title={recipes.name}
        image={recipes.image}
        subtitle={`Calories: ${recipes.caloriesPerServing}`}
        Difficulty={recipes.difficulty}
        CookTime={recipes.cookTimeMinutes}
      />
    </div>
  );
}
