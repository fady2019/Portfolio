import classes from './HomeParagraph.module.css';

const HomeParagraph = (props) => {
  return (
    <p className={classes['home-paragraph']}>
      Hi there, My name is <span className="bold">Fady Emad</span>, I'm from
      Cairo, Egypt. I did join the{' '}
      <span className="bold">
        Faculty of Computers and Artificial Intelligence, Cairo University
      </span>{' '}
      in 2019, and I started learning{' '}
      <span className="bold">Front-End Web Development</span> in 2020 by
      self-learning. I got a lot of experience by building many websites, so I
      faced many problems, and searching for their solutions helped me getting
      more skills.
    </p>
  );
};

export default HomeParagraph;
