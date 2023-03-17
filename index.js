import { Header, Nav, Footer, Main } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}
function afterRender(state) {
  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });
  if (state.view === "Home") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      console.log(inputList.searchTerm.value);

      axios
        .get(`${process.env.USER_API_URL}/users/${inputList.searchTerm.value}`)
        .then(response => {
          console.log(response.data);

          store.Results.users = response.data;
          router.navigate("/Results");
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "About";
    switch (view) {
      case "About":
        axios
          .get(
            `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
          )
          .then(response => {
            console.log(response.data);

            store.About.joke = response.data.joke;
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
