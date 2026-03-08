export default async function getProducts() {
  try {
    const response = await fetch("/api/products");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
