import { getData } from "@/utils/dataServices";
import Card from "../../components/CardPosts";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Posts",
  description: "This is Posts Page",
};

const PostsCard = dynamic(() => import("../../components/Cardposts"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>loading Posts Cards</h2>,
});

export default async function Posts() {
  const data = await getData("https://dummyjson.com/posts");
  const posts = data.posts?.slice(0, 5) || [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      {posts.map((item) => (
        <PostsCard
          key={item.id}
          title={`${item.title}`}
          subtitle={`${item.body?.slice(0, 20)}`}
          href={`/posts/${item.id}`}
        />
      ))}
    </div>
  );
}
