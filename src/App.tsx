import MediaType from "./context/MediaContext/MediaType"
import About from "./features/About"
import Home from "./features/Home"
import NavBar from "./features/NavBar"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <MediaType>
      <main className="h-full w-full">
        <NavBar />
        <Home />
        <About />
      </main>
    </MediaType>
  )
}

export default App
