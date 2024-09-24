import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Index"

function App() {

  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //     }
  //     if (window.screenY !== 0) {
  //       setIsTopOfPage(false)
  //     }
  //     window.addEventListener("scroll", handleScroll);
  //     return (() => window.removeEventListener("scroll", handleScroll))
  //   }
  // })
  return (
    <Navbar
    />
  )
}

export default App
