import {Carousel, Col, Container, Row} from "react-bootstrap"
import {FooterPages} from "../footer"
import {useState} from "react"

const Index = () => {
   const [isReadMore, setIsReadMore] = useState(false)

   const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
   }

   return (
      <>
         <Container>
            <div className="fade-in">
               <div className="d-flex flex-column gap-3">
                  <h4>Portfolio Details</h4>
                  <p>
                     Welcome to the Circle app project details page! Circle is
                     an innovative social media platform designed to foster
                     meaningful connections and conversations among users. With
                     its user-friendly interface and a host of engaging
                     features, Circle allows users to create, share, and
                     discover content that resonates with their interests.
                     Whether it's connecting with friends, participating in
                     community discussions, or sharing moments that matter,
                     Circle is all about building a vibrant and supportive
                     online community. On this page, you will find more
                     information about this project, including its features,
                     launch date, and the vision behind its creation.
                  </p>
               </div>
               <div className="className">
                  <Container>
                     <Row>
                        <Col
                           md={7}
                           style={{
                              marginBottom: "2rem",
                           }}
                        >
                           <div className="container-portfolio-details">
                              <Carousel
                                 controls={false}
                                 style={{
                                    boxShadow:
                                       "0px  12px 45px 0px  rgba(0, 0, 0, 0.5)",
                                 }}
                              >
                                 <Carousel.Item>
                                    <img
                                       src="/images/circle1.png"
                                       alt="Circle App"
                                       className="img-portfolio-details"
                                    />
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img
                                       src="/images/circle2.png"
                                       alt="Circle App"
                                       className="img-portfolio-details"
                                    />
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img
                                       src="/images/circle3.png"
                                       alt="Circle App"
                                       className="img-portfolio-details"
                                    />
                                 </Carousel.Item>
                              </Carousel>
                           </div>
                        </Col>
                        <Col md={5}>
                           <div className="d-flex justify-content-center flex-column gap-4">
                              <div
                                 style={{
                                    border: "0px solid #1f2122",
                                    borderRadius: "6px",
                                    height: "100%",
                                    padding: "2rem",
                                    boxShadow:
                                       "0px  12px 45px 0px  rgba(0, 0, 0, 0.5)",
                                 }}
                              >
                                 <h5
                                    style={{
                                       textAlign: "justify",
                                    }}
                                 >
                                    Project information
                                 </h5>

                                 <hr />
                                 <div className="d-flex gap-2">
                                    <h6>Category :</h6>
                                    <p>Circle App</p>
                                 </div>

                                 <div className="d-flex gap-2">
                                    <h6>Project date :</h6>
                                    <p>2024</p>
                                 </div>
                                 <div className="d-flex gap-2">
                                    <h6>Project URL :</h6>
                                    <a
                                       href="https://github.com/renaldimohamad/B55-circle-web"
                                       target="_blank"
                                       style={{
                                          textDecoration: "none",
                                       }}
                                    >
                                       <p
                                          style={{
                                             color: "rgb(28, 129, 129)",
                                             fontWeight: "bold",
                                          }}
                                       >
                                          www.circle.com
                                       </p>
                                    </a>
                                 </div>
                              </div>

                              <div
                                 style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "90%",
                                 }}
                              >
                                 <div
                                    style={{
                                       display: "flex",
                                       flexDirection: "column",
                                       justifyContent: "center",
                                    }}
                                 >
                                    <h5
                                       style={{
                                          textAlign: "justify",
                                       }}
                                    >
                                       Description
                                    </h5>
                                    <p
                                       style={{
                                          textAlign: "justify",
                                       }}
                                    >
                                       {isReadMore
                                          ? "Circle is a dynamic social media app designed to create a vibrant online community where users can share their thoughts, experiences, and creativity. The app offers an intuitive interface that allows users to easily post updates, photos, and videos to express themselves. With powerful engagement features, users can like and comment on posts, fostering discussions and building connections with friends and followers. Circle also prioritizes user experience by providing personalized feeds that highlight relevant content based on user interests. Join Circle to connect, share, and engage in meaningful conversations with a community that celebrates creativity and connection!"
                                          : "Circle is a dynamic social media app designed to create a vibrant online community where users can share their thoughts, experiences, and creativity. The app offers an intuitive interface that allows users to easily post updates..."}{" "}
                                       {""}
                                       <span
                                          onClick={toggleReadMore}
                                          style={{
                                             background: "none",
                                             border: "none",
                                             color: "rgb(28, 129, 129)",
                                             cursor: "pointer",
                                          }}
                                       >
                                          {isReadMore
                                             ? "Read Less"
                                             : "Read More"}
                                       </span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>
            </div>
            <Container>
               <div className="container-footer">
                  <FooterPages />
               </div>
            </Container>
         </Container>
      </>
   )
}

export default Index
