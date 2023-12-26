import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
    const projects = [
        {
            title: "Automated Car Driving",
            description: "Supervised training of multiple agents, guiding expertly in navigating a simulated software environment. Ensured a seamless journey for a car from Point A to Point B with zero accidents.",
            imgUrl: projImg1,
          },
          {
            title: "Image Classification using Deep Learning",
            description: "Designed and implemented a PyTorch Neural Network Project for image classification, merging VGG and ResNet features resulting in 128 layers. Currently optimizing layer integration into MobileNet.",
            imgUrl: projImg2,
          },
          {
            title: "Online Grocery Ordering Application",
            description: "Implemented an Online Grocery Ordering Application developed using JAVA Spring Boot and React integrated with ML algorithms for Search Optimizations and Suggestions.",
            imgUrl: projImg3,
          },
          {
            title: "Small Business Network Design using secure web servers",
            description: "Developed an Enterprise-managed Global Wide Area Network using TCP/IP Protocols connecting branches worldwide for secure communication. Used DHCP, DNS, and reliable data transfer protocols GBN, SR.",
            imgUrl: projImg1,
          },
          {
            title: "Li-Fi Data Transmission using Arduino",
            description: "Revolutionizing communication, it employs light signals for data transmission, diverging from Wi-Fi’s radio signals. Programmed with Arduino C++, it integrates a Mobile Application for text conversion.",
            imgUrl: projImg2,
          }
        ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>

                    </p>
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
                            {projects.slice(3, 5).map((project, index) => {
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