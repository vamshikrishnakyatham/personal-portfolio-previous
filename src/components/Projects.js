import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>

                    </p>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}