import html from "html-literal";

export default state => html`
  <!DOCTYPE html>
  <html>
    <head>
      <title>User Search Results</title>
    </head>
    <body>
      <div class="resultsBox">
        <h2 class="resultsHeader">Search Results:</h2>
        <ul>
          ${state.users.map(user => {
            return `
            <li class="results">
            <img id="profileImg" src="${user.image}"/>
            ${user.name} | Specialty: ${user.specialty}
            <a id="bookNowButton" class="resultsSubmit" href="/Booked" title="/Booked" data-navigo>Book Now</a>
            </li>
            `;
          })}
        </ul>
      </div>
    </body>
  </html>
`;
