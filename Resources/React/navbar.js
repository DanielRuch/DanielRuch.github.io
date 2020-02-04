import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
    return (
      <div>
        <p>List Based</p>
        <Nav class="navbar navbar-expand-lg navbar-light bg-light my-0 py-0 sticky-top" style="border-bottom: 4px solid lightseagreen; ">
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  };

const domContainer = document.querySelector('#react_navbar);
ReactDOM.render(e(LikeButton), domContainer);
  export default Example;