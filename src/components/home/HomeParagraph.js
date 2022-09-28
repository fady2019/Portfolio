import classes from './HomeParagraph.module.css';

const HomeParagraph = (props) => {
    return (
        <p className={classes['home-paragraph']}>
            Hi there, My name is <span className="bold">Fady Emad</span>, I'm from Cairo, Egypt. I'm a{' '}
            <span className="bold">Software Engineer, Full-Stack (MERN) Developer</span>. I did join{' '}
            <span className="bold">Faculty of Computers and Artificial Intelligence, Cairo University</span>{' '}
            in 2019, and I started learning <span className="bold">Front-End Web Development</span> in 2020,
            and <span className="bold">Back-End Web Development</span> in 2022 by self-learning. I got a lot
            of experience while building many websites, so I faced many problems, and searching for their
            solutions helped me getting more skills.
        </p>
    );
};

export default HomeParagraph;
