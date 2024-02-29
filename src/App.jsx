import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Graphics from "./components/Graphics";
import Header from "./components/Header";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

export default function App() {
    return (
        <main className="w-full overflow-x-hidden">
            <Header />
            <Transform />
            <Standout />
            <Graphics />
            <Testimonials />
            <Gallery />
            <Footer />
        </main>
    )
}