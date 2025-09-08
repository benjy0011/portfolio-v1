import MediaType from "./context/MediaContext/MediaType"
import About from "./features/About"
import Experience from "./features/Experiences"
import Home from "./features/Home"
import NavBar from "./features/NavBar"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Projects from "./features/Projects"
import ContactMe from "./features/ContactMe"

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <MediaType>
      <main className="h-full w-full">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <ContactMe />
      </main>
    </MediaType>
  )
}

export default App
