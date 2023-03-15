import html from "html-literal";

export default () => html`
  <div class="contactUsBox">
    <section class="flex-section">
      <h1 class="contact-header">We'd love to hear from you!</h1>
      <form action="https://formspree.io/f/xqkopjdn" method="post">
        <label
          class="flex-item"
          for="first_name"
          placeholder="First Name"
        ></label>
        <input
          class="flex-item"
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
        /><br /><br />

        <label
          class="flex-item"
          for="last_name"
          placeholder="Last Name"
        ></label>
        <input
          class="flex-item"
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
        /><br /><br />

        <label class="flex-item" for="phone" placeholder="Phone Number"></label>
        <input
          class="flex-item"
          name="fone"
          id="fone"
          placeholder="555-555-5555"
        /><br /><br />

        <label class="flex-item" for="email" placeholder="Email"></label>
        <input
          class="flex-item"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        /><br /><br />

        <label
          class="flex-item"
          for="message"
          placeholder="Write us a message!"
        ></label
        ><br />
        <textarea
          class="flex-item"
          id="message"
          name="message"
          rows="5"
          cols="30"
          placeholder="Message"
        ></textarea
        ><br /><br />

        <button class="flex-item" id="button">Submit</button>
      </form>
    </section>
  </div>
`;
