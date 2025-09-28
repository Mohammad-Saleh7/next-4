export async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("data not found");
  }
  const data = res.json();
  return data;
}
