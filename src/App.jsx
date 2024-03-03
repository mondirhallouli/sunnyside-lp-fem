import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Graphics from "./components/Graphics";
import Header from "./components/Header";
import Photography from "./components/Photography";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

export default function App() {
    return (
        <main className="w-full overflow-x-hidden">
            <Header />
            <Transform />
            <Standout />
            <section className="sm:grid sm:grid-cols-2 sm:justify-items-stretch">
                <Graphics />
                <Photography />
            </section>
            <Testimonials />
            <Gallery />
            <Footer />
        </main>
    )
}