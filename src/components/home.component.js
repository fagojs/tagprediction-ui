import { FaArrowAltCircleRight, FaHome } from "react-icons/fa";

import "../css/home.css";

const Home = () => {
  return (
    <div className="home_container">
      <section className="header_desc">
        <FaHome className="faws" />
        <h1>Stackoverflow Tag Prediction</h1>
      </section>
      <hr />
      <section className="section_desc">
        <p className="our_words">
          Tag prediction of stackoverflow is our final major project as of our
          four years of engineering. This is so far the progress we have
          achieved on this road of project and we are heartly convinced with
          support of our teachers, supervisor, elder brothers-sisters, friends
          and all those who have directly or indirectly provided their helping
          hands to our achievement so far on this project. As of now we provide
          this sample to meet up with our proposal objectives and we are open to
          the feedback and your comments.
          <br />
          <br />
          <b>
            <FaArrowAltCircleRight /> Team Tag-Prediction
          </b>
        </p>
      </section>
      <hr />
    </div>
  );
};

export default Home;
