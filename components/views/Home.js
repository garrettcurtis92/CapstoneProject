import html from "html-literal";
import nomadLogo from "../../assets/img/nomad-coach.png";
import trainerPic from "../../assets/img/trainer.png";
export default () => html`

<div>

</div>
  <section class="searchBar">

    <div class="header">

      <div class="logoContainer">
      <img class="trainerPic" src="${trainerPic}" />
        <img class="logo" src="${nomadLogo}"/>
      </div>
      <div class="search_container">
      <form class="classForm">
    <input
      name="searchTerm"
      id="search-bar"
      class="search_input"
      type="text"
      placeholder="Search for a Specialty"
      required
    />
    <input type="submit" name="submit" class="searchButton" id="search-button" value="Search"/>
    </form>
    </div>

  </section>

`;
