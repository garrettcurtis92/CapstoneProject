import html from "html-literal";

export default state => html`
  <!DOCTYPE html>
  <html>
    <head>
      <title>User Search Results</title>
    </head>
    <body>
      <h1>Search Results:</h1>
      <ul>
        ${state.users.map(user => {
          return `<li class="results">
            <img src="${user.image}"/>
            ${user.name} | Specialty: ${user.specialty}
            </li>
            <button class="flex-item">Book Now</button>`;
        })}
      </ul>
    </body>
  </html>
`;
