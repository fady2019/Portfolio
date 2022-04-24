import HomeParagraph from '../components/home/HomeParagraph';
import CVButton from '../components/home/CVButton';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <h2>Welcome to my portfolio</h2>

      <HomeParagraph />

      <CVButton />
    </Fragment>
  );
};

export default Home;
