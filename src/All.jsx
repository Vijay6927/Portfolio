import Home from "./components/Home"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
const All = () => {
  return (
    <div className=" ">
      <Navigation/>
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default All
