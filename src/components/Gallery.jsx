export default function Gallery() {
    return (
        <section className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4">
            <img src="/images/mobile/image-gallery-milkbottles.jpg" alt="milk bottles" className="md:hidden" />
            <img src="/images/mobile/image-gallery-orange.jpg" alt="orange fruit" className="md:hidden" />
            <img src="/images/mobile/image-gallery-cone.jpg" alt="icecream cone" className="md:hidden" />
            <img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" className="md:hidden" />

            <img src="/images/desktop/image-gallery-milkbottles.jpg" alt="milk bottles desktop" className="hidden md:block" />
            <img src="/images/desktop/image-gallery-orange.jpg" alt="orange fruit desktop" className="hidden md:block" />
            <img src="/images/desktop/image-gallery-cone.jpg" alt="icecream cone desktop" className="hidden md:block" />
            <img src="/images/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes desktop" className="hidden md:block" />
        </section>
    )
}