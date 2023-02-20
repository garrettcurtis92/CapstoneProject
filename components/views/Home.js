import html from "html-literal";

export default () => html`
  <section class="container">
    <div class="header">
    <input
      id="search-bar"
      class="flex-item"
      type="text"
      placeholder="Search for a specialty!"
    />
    <button class="flex-item" id="search-button">Search</button>
  </section>
`;
