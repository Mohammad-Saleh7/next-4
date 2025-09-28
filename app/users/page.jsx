import dynamic from "next/dynamic";
import Card from "../../components/CardComp";
import { getData } from "../../utils/dataServices";

export const metadata = {
  title: "Users",
  description: "This is Users Page",
};

const UserCard = dynamic(() => import("../../components/CardComp"), {
  ssr: "false",
  loading: () => <h2 style={{ color: "red" }}>Loading User Card </h2>,
});

export default async function Users() {
  const data = await getData("https://dummyjson.com/users");
  const users = data.users?.slice(0, 5) || [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      {users.map((item) => (
        <UserCard
          key={item.id}
          image={item.image}
          title={`${item.firstName} ${item.lastName}`}
          subtitle={item.email}
          gender={item.gender}
          age={item.age}
          href={`/users/${item.id}`}
        />
      ))}
    </div>
  );
}
