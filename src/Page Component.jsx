import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = (props) => {
  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className={"container-fluid"}>
          <a className={"navbar-brand"} href="#">
            Your Blog
          </a>
          <button
            className={"navbar-toggler"}
            type="button"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div
            className={"collapse navbar-collapse"}
            id={"navbarSupportedContent"}
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <a
                  className={"nav-link active"}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#">
                  Contact
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Posts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Create</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            <form className={"d-flex"} role={"search"}>
              <input
                className={"form-control me-2"}
                type={"search"}
                placeholder={"Search"}
              />
              <button className={"btn btn-outline-primary"} type={"submit"}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;