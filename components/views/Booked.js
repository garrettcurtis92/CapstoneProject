import html from "html-literal";
import thumbsUp from "../../assets/img/like.png";

export default state => {
  console.log("state", state);
  return html`
    <h1 class="bookedBox">
      Congratulations! your coach has been successfully booked. Information will
      be sent to your email.
      <br />
      <img id="thumbsUp" class="logo" src="${thumbsUp}" />
      <a class="makeAnotherSearch" href="/Home" title="/Home" data-navigo
        >Make another search!</a
      >
    </h1>
  `;
};
