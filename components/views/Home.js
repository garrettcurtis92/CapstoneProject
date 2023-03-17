import html from "html-literal";
import nomadLogo from "../../assets/img/nomad-coach.png";

export default () => html`
  <section class="searchBar">
    <div class="header">
      <div class="logoContainer">
        <img class="logo" src="${nomadLogo}"/>
      </div>
      <div class="search_container">
      <form class="classForm">
    <input
      name="searchTerm"
      id="search-bar"
      class="search_input"
      type="text"
      placeholder="Search"
    />
    <input type="submit" name="submit" class="searchButton" id="search-button" value="Search" placeholder="$1" />
    </form>
    </div>

  </section>

`;
