import {useEffect, useState} from "react"
import "./typing-effect.css"

interface ITyingEffectProps {
   text: string
   speed: number
   className?: string
}

const TypingEffect = ({text, speed, className}: ITyingEffectProps) => {
   const [displayedText, setDisplayedText] = useState("")
   const [isDeleting, setIsDeleting] = useState(false)
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         if (!isDeleting) {
            setDisplayedText((prev) => text.substring(0, prev.length + 1))

            setTimeout(() => {
               if (displayedText === text) {
                  setIsDeleting(true)
               }
            }, 1500)
         } else {
            setDisplayedText((prev) => text.substring(0, prev.length - 1))
            if (displayedText === "") {
               setIsDeleting(false)
               if (index === text.length - 1) {
                  setIndex((prev) => (prev + 1) % text.length)
               }
            }
         }
      }, speed)

      return () => clearInterval(interval)
   }, [displayedText, isDeleting, text, speed])

   return <p className={className}>{displayedText}</p>
}

export default TypingEffect
