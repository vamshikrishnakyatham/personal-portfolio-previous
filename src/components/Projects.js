import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import automated_car_driving from "../assets/img/Automated_Car_Driving.png";
import GAN_img from "../assets/img/GANs.jpeg";
import online_grocery_ordering from "../assets/img/Online_Grocery_Ordering_App.png";
import llama_2_img from "../assets/img/Lllama-2.png";
import onedatashare_img from "../assets/img/onedatashare.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import small_business_network_design from "../assets/img/Small_Business_Network_Design.png";
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
            title: "Llama 2 - QA: PyTorch-based Question Answering Model",
            description: "Developed Llama-QA, a sophisticated question answering (QA) model leveraging PyTorch, aimed at answering queries related to Programming Languages. Implemented an efficient grouped Multi Query Attention in this Llama QA Model.",
            imgUrl: llama_2_img,
          },
          {
            title: "GAN and Diffusion Based Image Generation",
            description: "Developed a cutting-edge image generation model utilizing Generator and Discriminator Architecture first followed by U-Net Stable Diffusion implemented in PyTorch. This project aimed to generate high-quality, realistic images by iteratively refining noise inputs.",
            imgUrl: GAN_img,
          },
          {
            title: "One Data Share",
            description: "Actively developing core services and transfer services for onedatashare.org by optimizing cross-platform data transfer through efficient batch multi-threading and its parameter refinement using Bayesian Optimization.",
            imgUrl: onedatashare_img,
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