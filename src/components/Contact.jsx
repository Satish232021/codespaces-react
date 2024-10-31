const Contact = () => (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" className="textArea"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="footer">
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-square-x-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
  
  export default Contact;
  