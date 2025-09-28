import { getData } from "../../../utils/dataServices";
import Card from "../../../components//Cardposts";

export async function generateMetadata({ params }) {
  return {
    title: `post-${params.id}`,
    description: "This is recipes page",
  };
}

export default async function Posts({ params }) {
  const posts = await getData(`https://dummyjson.com/posts/${params.id}`);

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
        // key={item.id}
        title={`${posts.title}`}
        subtitle={`${posts.body?.slice(0, 20)}`}
        href={`/posts/${posts.id}`}
      />
    </div>
  );
}
