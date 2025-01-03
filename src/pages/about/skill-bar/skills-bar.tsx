import {useEffect, useState} from "react"
import {useInView} from "react-intersection-observer"
import "./skills-bar.css"

export const SkillsBar = ({
   name,
   percentage,
}: {
   name: string
   percentage: number
}) => {
   const [fillWidth, setFillWidth] = useState(0)
   const {ref, inView} = useInView({
      triggerOnce: true, // Animasi hanya terjadi sekali
      threshold: 0.5, // Elemen harus 50% terlihat untuk memulai animasi
   })

   useEffect(() => {
      if (inView) {
         let currentPercentage = 0

         const interval = setInterval(() => {
            if (currentPercentage < percentage) {
               currentPercentage += 1 // Increment 1% setiap interval
               setFillWidth(currentPercentage)
            } else {
               clearInterval(interval) // Hentikan interval ketika mencapai nilai target
            }
         }, 20) // Durasi animasi (semakin kecil semakin cepat)

         return () => clearInterval(interval) // Bersihkan interval saat komponen unmount
      }
   }, [inView, percentage])

   return (
      <div className="skill-bar" ref={ref}>
         <div className="skill-info">
            <span>{name}</span>
            <span>{fillWidth}%</span> {/* Menampilkan nilai dinamis */}
         </div>
         <div className="skill-progress">
            <div className="skill-fill" style={{width: `${fillWidth}%`}}></div>
         </div>
      </div>
   )
}
