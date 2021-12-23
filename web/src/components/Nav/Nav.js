import styled from 'styled-components';

const Wrapper = styled.nav``;

const ButtonWrapper = styled.button``;

import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';

class Example extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
    );
  }
}

const Nav = () => {
  return <Example />;
};

export default Nav;
