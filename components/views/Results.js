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
            <img id="profileImg" src="${user.image}"/><button class="resultsSubmit">Book Now</button>
            ${user.name} | Specialty: ${user.specialty}
            </li>
            `;
          })}
        </ul>
      </div>
    </body>
  </html>
`;
