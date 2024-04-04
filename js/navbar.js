// Bootstrap Component: Offcanvas dark navbar

function renderNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">David Echeverri</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/html/index.html">Home</a> <!--Modify-->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/html/page1.html">page1</a> <!--Modify-->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/html/page2.html">page2</a> <!--Modify-->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/html/page3.html">page3</a> <!--Modify-->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  `;

  document.querySelector('#navbar').innerHTML = navbarHTML;
}

document.addEventListener('DOMContentLoaded', renderNavbar);