import faker from "faker";

const mount = (el = "#dev-products") => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation: We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

export { mount };
