import html from "html-literal";

export default links => html`
  <nav>
      ${links
        .map(
          link =>
            `<li class="flex-item-nav"><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
