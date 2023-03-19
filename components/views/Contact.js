import html from "html-literal";

export default () => html`
  <div id="contactBox" class="contactUsBox">
    <section class="flex-section">
      <form
        class="contactForm"
        action="https://formspree.io/f/xqkopjdn"
        method="post"
      >
        <h2 class="contact-header">Contact Us</h2>
        <input
          class="flex-item"
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
        /><br /><br />
        <input
          class="flex-item"
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
        /><br /><br />
        <input
          class="flex-item"
          name="fone"
          id="fone"
          placeholder="555-555-5555"
        /><br /><br />
        <input
          class="flex-item"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        /><br /><br />
        <textarea
          class="flex-item"
          id="message"
          name="message"
          rows="5"
          cols="30"
          placeholder="Message"
        ></textarea
        ><br />

        <button class="submitButton" id="button">Submit</button>
      </form>
    </section>
  </div>
`;
