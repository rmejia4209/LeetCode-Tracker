
"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"


/**
 * ==============   Utils   ================
 */
function shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5)
}


function Home() {

  /*
    <div className="flex items-center">
      Home Page
    </div>          transition={{
            type: "spring",
            damping: 150,
            stiffness: 2000,
          }}
  */


  const [order, setOrder] = useState([
    'Roxie', 'Puma', 'Vino', 'Diamond', 'Pet Rock', 'Murphy', 'Kiki', 'Keke'
  ])

  useEffect(() => {
      const timeout = setTimeout(() => setOrder(shuffle([...order])), 5000)
      return () => clearTimeout(timeout)
  }, [order])

  return (
    <table className="table table-pin-rows border-8 h-fit">
    <thead>
      <tr>
        <th>Sticky</th>
      </tr>
    </thead>
    <tbody>      
      {order.map((word) => (
        <motion.tr
          key={word}
          layout
          transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}

        ><td>{word}</td></motion.tr>
      ))}
    </tbody>     

    </table>
  )
}

export default Home;