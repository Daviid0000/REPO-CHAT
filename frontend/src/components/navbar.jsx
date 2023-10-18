
export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark  bg-warning mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">tuRemo</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Soporte</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <button class="btn btn-outline-light m-2" type="submit">Registrarse</button>
          <button class="btn btn-outline-light m-2" type="submit">Ingresar</button>

        </form>

      </div>
    </div>
            </nav>
        </div>
        )
    }
    


