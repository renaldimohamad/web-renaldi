import {useState} from "react"
import {Col, Container, Row} from "react-bootstrap"
import {useInView} from "react-intersection-observer"
import {SkillsBar} from "./skill-bar/skills-bar"

export const AboutPages = () => {
   const {ref: aboutPagesRef, inView: isAboutPagesVisible} = useInView({
      threshold: 0.5,
   })

   const [isVisible, setIsVisible] = useState(false)

   if (isAboutPagesVisible !== isVisible) {
      setIsVisible(isAboutPagesVisible)
   }

   const skillsColumn1 = [
      {name: "HTML", percentage: 100},
      {name: "CSS", percentage: 90},
      {name: "JavaScript", percentage: 85},
   ]

   const skillsColumn2 = [
      {name: "PHP", percentage: 70},
      {name: "Figma", percentage: 70},
      {name: "Photoshop", percentage: 55},
   ]

   return (
      <>
         <div
            ref={aboutPagesRef}
            className={`fade-in-section ${isVisible ? "visible" : ""}`}
         >
            <div>
               <Container>
                  <div className="d-flex flex-column gap-3">
                     <h5 className="fw-bold">Skills</h5>
                     <p>
                        Experienced in building web and mobile applications with
                        a focus on efficiency, creativity and innovation. With
                        expertise in frontend and backend development, I use
                        modern technologies to create functional and visually
                        appealing solutions. Below are some of the key skills
                        that have supported my professional journey{" "}
                     </p>
                     <Row className="d-flex align-items-center w-100 mt-3">
                        <Col md={6} sm={12}>
                           <div className="container-skills-sm">
                              <div className="skills-container">
                                 {skillsColumn1.map((skill, index) => (
                                    <SkillsBar
                                       key={index}
                                       name={skill.name}
                                       percentage={skill.percentage}
                                    />
                                 ))}
                              </div>
                           </div>
                        </Col>
                        <Col md={6} sm={12}>
                           <div className="skills-container">
                              {skillsColumn2.map((skill, index) => (
                                 <SkillsBar
                                    key={index}
                                    name={skill.name}
                                    percentage={skill.percentage}
                                 />
                              ))}
                           </div>
                        </Col>
                     </Row>
                  </div>
               </Container>
            </div>
         </div>
      </>
   )
}
