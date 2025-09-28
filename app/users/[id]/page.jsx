import CardComp from "../../../components/CardComp";
import { getData } from "../../../utils/dataServices";

export async function generateMetadata({ params }) {
  return {
    title: `user-${params.id}`,
    description: "This is user page",
  };
}

export default async function Users({ params }) {
  const users = await getData(`https://dummyjson.com/users/${params.id}`);
  if (!users?.id) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <CardComp
        // key={item.id}
        image={users.image}
        title={`${users.firstName} ${users.lastName}`}
        subtitle={users.email}
        gender={users.gender}
        age={users.age}
        href={`/users/${users.id}`}
      />
    </div>
  );
}
