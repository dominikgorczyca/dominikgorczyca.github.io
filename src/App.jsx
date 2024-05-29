import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="text-main antialiased w-full overflow-x-hidden">
            <div className="fixed top-9 -z-10 h-full w-full">
                <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>
            <Navbar />

            <div className="container mx-auto px-8">
                <Hero/>
                <About/>
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
