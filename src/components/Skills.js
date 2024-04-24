import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter0 from "../assets/img/meter0.svg";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter0} alt="Image"></img>
                  <h5>
                    Java, Javascript, Python, C++, C, Kotlin Programming
                    Languages
                  </h5>
                </div>
                <div className="item">
                  <img src={meter0} alt="Image"></img>
                  <h5>
                    Spring Framework (Spring Boot, Batch, Security, MVC, Data
                    JPA, Cloud)
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Node.js, Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Flask, Django</h5>
                </div>
                <div className="item">
                  <img src={meter0} alt="Image"></img>
                  <h5>React.js, Next.js, Angular.js</h5>
                </div>
                <div className="item">
                  <img src={meter0} alt="Image"></img>
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>
                    Databases (SQL, NoSQL, MongoDB, PostgreSQL etc), Redis,
                    Vault Management
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Full Stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image"></img>
                  <h5>Data Science</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Artificial Intelligence, Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>
                    Deep Learning (Building Neural Networks using PyTorch,
                    TensorFlow, Keras)
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Natural Language Processing (GPT, Llama, BERT)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>Computer Vision and Image Processing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>
                    Big Data Engineering (Apache Flink, Apache Spark, Apache
                    Hadoop, MapReduce)
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"></img>
                  <h5>DevOps Engineering (AWS, Azure, GCP)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"></img>
                  <h5>
                    Continous Integration and Continous Delivery (CI/CD) -
                    Jenkins, ArgoCD, Spinnaker
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left"></img>
    </section>
  );
};
