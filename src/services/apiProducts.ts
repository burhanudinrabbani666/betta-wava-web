export default async function getProducts() {
  try {
    const response = await fetch("https://betta-wava.burhanudin.com/products");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
