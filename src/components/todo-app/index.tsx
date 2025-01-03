import {Carousel, Col, Container, Row} from "react-bootstrap"
import {FooterPages} from "../footer"
import "./todo-app.css"
import {useState} from "react"

const Index = () => {
   const [isExpanded, setIsExpanded] = useState(false)

   const toggleExpand = () => {
      setIsExpanded(!isExpanded)
   }

   return (
      <Container>
         <div className="fade-in">
            <div className="d-flex flex-column gap-4">
               <h4>Portfolio Details</h4>
               <p>
                  Welcome to the Todo App project details page! This application
                  is designed to help users manage and organize their daily
                  to-do lists easily. With a simple and intuitive interface,
                  Todo App makes it easy to add, edit and delete tasks, as well
                  as set priorities. This project demonstrated my ability to
                  create responsive web applications that offer a pleasant and
                  efficient user experience. Below, you will find more
                  information about this project, including category, creation
                  date, and a complete description of available features
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
                                    src="/images/todo-app.png"
                                    alt="Todo App "
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/todo-app1.png"
                                    alt="Todo App "
                                    className="img-portfolio-details"
                                 />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img
                                    src="/images/todo-app2.png"
                                    alt="Todo App "
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
                                 <p>Todo App</p>
                              </div>

                              <div className="d-flex gap-2">
                                 <h6>Project date :</h6>
                                 <p>2023</p>
                              </div>
                              <div className="d-flex gap-2">
                                 <h6>Project URl :</h6>
                                 <a
                                    href="https://knowledge-test-web.vercel.app/"
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
                                       www.todoApp.com
                                    </p>
                                 </a>
                              </div>
                           </div>

                           <div
                              style={{
                                 display: "flex",
                                 justifyContent: "center",
                                 width: "100%",
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
                                    {isExpanded
                                       ? `The Todo App is a modern, user-friendly web
                                    application designed to help users manage
                                    their daily tasks and improve productivity.
                                    This project showcases a clean and
                                    responsive design with intuitive navigation,
                                    ensuring a seamless user experience across
                                    all devices. It features a secure
                                    registration and login system that allows
                                    users to create personal accounts and access
                                    their individual task lists. Users can
                                    easily register by providing their email and
                                    password, ensuring their data is protected
                                    and accessible only to them. Once logged in,
                                    they can manage their tasks efficiently,
                                    enabling them to prioritize their work and
                                    stay organized throughout the day.`
                                       : `The Todo App is a modern, user-friendly web
                                    application designed to help users manage
                                    their daily tasks and improve productivity.
                                    This project showcases a clean and
                                    responsive design with intuitive navigation,
                                    ensuring a seamless user experience across
                                    all devices.`}{" "}
                                    {""}
                                    <span
                                       onClick={toggleExpand}
                                       style={{
                                          color: "rgb(28, 129, 129)",
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                       }}
                                    >
                                       {isExpanded ? "Read less" : "Read more"}
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
   )
}

export default Index
