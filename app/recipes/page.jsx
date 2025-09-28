import { getData } from "@/utils/dataServices";
import Card from "../../components/CardRecipes";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Recipes",
  description: "This is Recipes Page",
};

const RecipesCard = dynamic(() => import("../../components/CardRecipes"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>Loading Recipes cards </h2>,
});

export default async function Recipes() {
  const data = await getData("https://dummyjson.com/recipes");
  const recipes = data.recipes?.slice(0, 5) || [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      {recipes.map((item) => (
        <RecipesCard
          key={item.id}
          href={`/recipes/${item.id}`}
          image={item.image}
          title={item.name}
          subtitle={`Calories: ${item.caloriesPerServing}`}
        />
      ))}
    </div>
  );
}
