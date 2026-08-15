import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav_custom">

      {/* Name for logo */}
      <li id="nav-logo" className="nav-item_custom">
        <Link to="/">
          Olyad Kitila
        </Link>      
      </li>

      {/* <nav id="nav-dropdown">

        <li class="nav-dropdown_about">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              ABOUT
            </Link>            
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="nav-dropdown_sub-menu">
              <li>
                <Link
                  to="/Code"
                  className={currentPage === '/Code' ? 'nav-link active' : 'nav-link'}
                >
                  CODE
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={currentPage === '/Code' ? 'nav-link active' : 'nav-link'}
                >
                  ART
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={currentPage === '/Code' ? 'nav-link active' : 'nav-link'}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </li>
      </nav> */}

      <nav class="nav-tabs_custom">
        <li className="nav-item_custom">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "About"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item_custom">
          <Link
            to="/Code"
            // Check to see if the currentPage is `Code`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Code' ? 'nav-link active' : 'nav-link'}
          >
            CODE
          </Link>
        </li>
        <li className="nav-item_custom">
          <Link
            to="/Art"
            // Check to see if the currentPage is `Art`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Art' ? 'nav-link active' : 'nav-link'}
          >
            ART
          </Link>
        </li>
        <li className="nav-item_custom">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </Link>
        </li>
      </nav>

      <ul class="nav-icons_custom">
        <a 
        href="https://github.com/thymetime"
        target="_blank"
        class="contact-link"
        id="contact-github">
        <img class="contact-icons" src="../assets/social-icons/png/003-github.png"></img>
        </a>

        <a 
        href="https://www.linkedin.com/in/olyad-kitila-366a1218b/"
        target="_blank"
        class="contact-link"
        id="contact-linkedin">
        <img class="contact-icons" src="../assets/social-icons/png/001-linkedin.png"></img>
        </a>

        <a 
        href="https://www.instagram.com/no.plugins"
        target="_blank"
        class="contact-link"
        id="contact-instagram">
        <img class="contact-icons" src="../assets/social-icons/png/002-instagram.png"></img>
        </a>
      </ul>
      
    </ul>
  );
}

export default NavTabs;
