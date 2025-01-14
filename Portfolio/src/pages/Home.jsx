import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div>
      {/* <header class="hero-page" id="hero">
          <div class="hero--container">
              <h1 class="hero--title hero--title__name">Olyad Kitila</h1>
              <h1 class="hero--title hero--title__wd">Web Developer</h1>
              <h2 class="hero--intro">coding one &#60;div&#62; at a time</h2>
              <button class="hero--btn">&#8595;</button>
          </div>
      </header> */}
      <section id="bio" class="bio-page">

          <content class="bio-info">
              <img src="../assets/bio/OlyadKitila_Headshot_Size_Square.jpg" alt="Olyad Kitila, Developer." id="bio-img" class="bio-img" />
              <div class="bio-info--cont">
                  <h2 class="bio--greeting">Hi, I'm Olyad.</h2>
                  <p class="bio--desc">Olyad Kitila is a computer scientist and artist who is always 
                      experimenting and manipulating new technologies to solve problems. 
                      Combining his process of iteration, experience in programming  knowledge of artistic practices, 
                      he creates art and code alike with an intent to enhance the viewer’s experience of everyday life.
                      <br></br>
                      <br></br>
                      He currently lives and works in Columbia and Silver Spring, Maryland.
                  </p> 
              </div>
          </content>

          <h3 class="bio-info--prompt">Check out some of my projects below!</h3>
          <div class="bio-info--action">
            <button class="bio-info--action_link" onClick={() => navigate('./Code')}>Code</button>
            <button class="bio-info--action_link" onClick={() => navigate('./Art')}>Art</button>
          </div>
          

          
      </section>
      
      <section id="contact" class="contact-section">
          <content class="contact-section--header">
              <h2>Let's work together...</h2>
          </content>
          <div class="contact-section--links">
              <a 
              href="https://github.com/thymetime"
              target="_blank"
              class="contact-link"
              id="contact-github">
              <i class="fab fa-github-square"></i>
              <span class="contact-names">Github</span>
              </a>

              <a 
              href="https://www.linkedin.com/in/olyad-kitila-366a1218b/"
              target="_blank"
              class="contact-link"
              id="contact-linkedin">
              <i class="fab fa-linkedin-square"></i>
              <span class="contact-names">LinkedIn</span>
              </a>

              <a 
              href="https://www.instagram.com/holy__field/"
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
