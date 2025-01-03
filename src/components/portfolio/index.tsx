import {Container} from "react-bootstrap"
import "./portfolio.css"
import {IoIosLink} from "react-icons/io"
import {Link} from "react-router-dom"
import {FooterPages} from "../footer"

const Index = () => {
   const cardPortfolio = [
      {
         images: "/images/satuklinik.png",
         title: "Satu Klinik Mobile",
         link: "/satu-klinik-details",
      },
      {
         images: "/images/circle.png",
         title: "Circle App",
         link: "/circle-details",
      },
      {
         images: "/images/dumbsound.png",
         title: "DumbSound App",
         link: "/dumb-sound-details",
      },
      {
         images: "/images/todo-app.png",
         title: "Todo App",
         link: "/todoapp-details",
      },
   ]

   return (
      <>
         <div className=" fade-in">
            <div className="className">
               <Container>
                  <div className="d-flex flex-column gap-3">
                     <h4>Portfolio </h4>
                     <p>
                        Here, you'll find a variety of projects I've worked on,
                        each reflecting my creativity and skills in app
                        development. Each project is carefully designed to meet
                        user needs and provide an optimal experience. I hope you
                        enjoy this exploration and gain inspiration from the
                        works featured.
                     </p>
                  </div>

                  <Container>
                     <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                        {cardPortfolio.map((card, i) => {
                           return (
                              <div className="container-card-portfolio" key={i}>
                                 <div className="className">
                                    <img
                                       src={card.images}
                                       alt=""
                                       className={`images-card-portfolio delay-${i}`}
                                    />
                                    <div className="d-flex">
                                       <h6>{card.title}</h6>
                                       <Link to={card.link}>
                                          <IoIosLink color="#ffffff" />
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </Container>
               </Container>
            </div>

            <div className="container-footer">
               <FooterPages />
            </div>
         </div>
      </>
   )
}

export default Index
