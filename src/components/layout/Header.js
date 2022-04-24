import classes from './Header.module.css';

import Navbar from './Navbar';

import Container from '../ui/Container';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Container>
        <Navbar></Navbar>
      </Container>
    </header>
  );
};

export default Header;
