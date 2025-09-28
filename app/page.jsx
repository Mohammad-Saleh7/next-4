import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getData } from "../utils/dataServices";

export const metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

const UsersCards = dynamic(() => import("../components/CardComp"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>Loading User Cards...</h2>,
});
const PostsCards = dynamic(() => import("../components/Cardposts"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>Loading Posts Cards...</h2>,
});
const RecipesCards = dynamic(() => import("../components/CardComp"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>Loading Recipes Cards...</h2>,
});

export default async function page() {
  const [usersRes, recipesRes, postsRes] = await Promise.all([
    getData("https://dummyjson.com/users"),
    getData("https://dummyjson.com/recipes"),
    getData("https://dummyjson.com/posts"),
  ]);

  const users = usersRes?.users?.slice(0, 5) || [];
  const recipes = recipesRes?.recipes?.slice(0, 5) || [];
  const posts = postsRes?.posts?.slice(0, 5) || [];

  return (
    <div>
      <main
        style={{
          display: "grid",
          gap: 32,
          padding: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <section>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Users
          </h2>
          <Suspense fallback={<h3 style={{ color: "red" }}>Loading users…</h3>}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 15,
              }}
            >
              {users.map((u) => (
                <UsersCards
                  key={u.id}
                  image={u.image}
                  title={`${u.firstName} ${u.lastName}`}
                  subtitle={u.email}
                  gender={u.gender}
                  age={u.age}
                  href={`/users/${u.id}`}
                />
              ))}
            </div>
          </Suspense>
        </section>

        <section>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Recipes
          </h2>
          <Suspense
            fallback={<h3 style={{ color: "red" }}>Loading recipes…</h3>}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 15,
              }}
            >
              {recipes.map((r) => (
                <RecipesCards
                  key={r.id}
                  href={`/recipes/${r.id}`}
                  image={r.image}
                  title={r.name}
                  subtitle={`Calories: ${r.caloriesPerServing}`}
                />
              ))}
            </div>
          </Suspense>
        </section>

        <section>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Posts
          </h2>
          <Suspense fallback={<h3 style={{ color: "red" }}>Loading posts…</h3>}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 15,
              }}
            >
              {posts.map((p) => (
                <PostsCards
                  key={p.id}
                  title={p.title}
                  subtitle={p.body?.slice(0, 20)}
                  href={`/posts/${p.id}`}
                />
              ))}
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}
