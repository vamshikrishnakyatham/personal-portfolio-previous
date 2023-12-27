import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import wine_quality_pred from "../assets/img/Wine_Quality_Prediction.png";
import automated_car_driving from "../assets/img/Automated_Car_Driving.png";
import image_classification from "../assets/img/Image-Classification-Using-Deep-Learning.png";
import online_grocery_ordering from "../assets/img/Online_Grocery_Ordering_App.png";
import small_business_network_design from "../assets/img/Small_Business_Network_Design.png";
import lifi_data_transmission from "../assets/img/LiFi_Data_Transmission.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
    const projects = [
        {
            title: "Automated Car Driving",
            description: "Supervised training of multiple agents, guiding expertly in navigating a simulated software environment. Ensured a seamless journey for a car from Point A to Point B with zero accidents.",
            imgUrl: automated_car_driving,
          },
          {
            title: "Image Classification using Deep Learning",
            description: "Designed and implemented a PyTorch Neural Network Project for image classification, merging VGG and ResNet features resulting in 128 layers. Currently optimizing layer integration into MobileNet.",
            imgUrl: image_classification,
          },
          {
            title: "Wine Quality Prediction Application",
            description: "Engineered a high-accuracy wine quality prediction system by ensemble modeling SVM, KNN, Random Forests, Decision Trees, XGB, and Logistic Regression. Users input data via an intuitive interface for swift predictions.",
            imgUrl: wine_quality_pred,
          },
          {
            title: "Online Grocery Ordering Application",
            description: "Implemented an Online Grocery Ordering Application developed using JAVA Spring Boot and React integrated with ML algorithms for Search Optimizations and Suggestions.",
            imgUrl: online_grocery_ordering,
          },
          {
            title: "Small Business Network Design using secure web servers",
            description: "Developed an Enterprise-managed Global Wide Area Network using TCP/IP Protocols connecting branches worldwide for secure communication. Used DHCP, DNS, and reliable data transfer protocols GBN, SR.",
            imgUrl: small_business_network_design,
          },
          {
            title: "Li-Fi Data Transmission using Arduino",
            description: "Revolutionizing communication, it employs light signals for data transmission, diverging from Wi-Fi’s radio signals. Programmed with Arduino C++, it integrates a Mobile Application for text conversion.",
            imgUrl: lifi_data_transmission,
          }
        ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible } ) => 
                        <div className={isVisible ? "animate__animated animate__bounce": ""}>
                    <h2>Projects</h2>
                    <p>

                    </p>
                    </div> }
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            {projects.slice(0, 3).map((project, index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                )
                            }    
                            )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                            {projects.slice(3, 6).map((project, index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                )
                            })}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}