import MediaType from "./context/MediaContext/MediaType"
import Home from "./features/Home"
import NavBar from "./features/NavBar"


function App() {

  return (
    <MediaType>
      <div className="w-[100vw] h-[100vh]">
        <NavBar />
        <Home />
      </div>
    </MediaType>
  )
}

export default App
