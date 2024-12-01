import faker from "faker";

const mount = (el = "#dev-cart") => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// Context/Situation: We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-cart'
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
