import Container from '../ui/Container';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <Container>
        <p>Copyright &copy; 2022 Fady Emad</p>
      </Container>
    </footer>
  );
};

export default Footer;
