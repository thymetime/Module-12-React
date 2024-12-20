export default function Home() {
  return (
    <div>
      <header class="hero-page" id="hero">
          <div class="hero--container">
              <h1 class="hero--title hero--title__name">Olyad Kitila</h1>
              <h1 class="hero--title hero--title__wd">Web Developer</h1>
              <h2 class="hero--intro">coding one &#60;div&#62; at a time</h2>
              <button class="hero--btn">&#8595;</button>
          </div>
      </header>
      <section id="bio" class="bio-page">
          <content class="bio-info">
              <div class="bio-info--cont">
                  <h2 class="bio--greeting">Hey there!</h2>
                  <p class="bio--desc">Olyad Kitila is an ex-film major turned computer scientist who is always 
                      experimenting and manipulating new mediums to fit his aesthetic mold. 
                      Combining his process of iteration and knowledge of artistic practices, 
                      he creates art and code alike with an intent to enhance the viewer’s experience of everyday life.
                      <br></br>
                      <br></br>
                      He currently lives and works in Columbia and Silver Spring, Maryland.
                  </p> 
              </div>
              <h3 class="bio-info--prompt">Check out some of my projects below!</h3>
          </content>
          <img src="../src/assets/IMG_4217.JPG" alt="Olyad Kitila, Developer." id="bio-img" class="bio-img" />
          
      </section>
      
      <section id="contact" class="contact-section">
          <content class="contact-section--header">
              <h2>Let's work together...</h2>
              <p>How do you like your coffee?</p>
          </content>
          <div class="contact-section--links">
              <a 
              href="https://twitter.com/"
              target="_blank"
              class="contact-link"
              id="contact-twitter">
              <i class="fab fa-twitter-square"></i>
              <span class="contact-names">Twitter</span>
              </a>

              <a 
              href="https://facebook.com/"
              target="_blank"
              class="contact-link"
              id="contact-facebook">
              <i class="fab fa-facebook-square"></i>
              <span class="contact-names">Facebook</span>
              </a>

              <a 
              href="https://instagram.com/"
              target="_blank"
              class="contact-link"
              id="contact-instagram">
              <i class="fab fa-instagram"></i>
              <span class="contact-names">Instagram</span>
              </a>
          </div>
      </section>
      
    </div>
  );
}
