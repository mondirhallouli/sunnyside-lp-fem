import { useEffect, useState, useRef } from "react";

export default function Graphics() {
    const graphicsTextRef = useRef();
    const photographyTextRef = useRef();
    const [intersected, setIntersected] = useState();
    const show = 'opacity-100 blur-0';
    const hide = 'opacity-0 blur-sm';

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIntersected(entry.isIntersecting);
            });
        });

        observer.observe(graphicsTextRef.current, photographyTextRef.current);

        return () => observer.disconnect();
    }, [])

    return (
        <section className="sm:grid sm:grid-cols-2 sm:justify-items-stretch">

            <div className="text-center h-[600px] px-4 pb-12 flex flex-col justify-end bg-graphicDesign-mobile bg-no-repeat bg-cover bg-center md:bg-graphicDesign-desktop md:bg-top xl:h-[700px]">

                <div ref={graphicsTextRef} className={`${intersected ? show : hide} transition-all duration-1000 md:max-w-[400px] md:mx-auto`}>
                    <h2 className="font-frauncesFont font-black text-3xl text-darkDesatCyan mb-8">Graphic Design</h2>

                    <p className="font-barlowFont font-semibold text-darkDesatCyan">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                    </p>
                </div>
            </div>

            <div className="text-center h-[600px] px-4 pb-12 flex flex-col justify-end bg-photography-mobile bg-no-repeat bg-cover bg-center md:bg-photography-desktop md:bg-top xl:h-[700px]">

                <div ref={photographyTextRef} className={`${intersected ? show : hide} transition-all duration-1000 delay-150 md:max-w-[350px] md:mx-auto`}>
                    <h2 className="font-frauncesFont font-black text-3xl text-darkBlue mb-8">Photography</h2>

                    <p className="font-barlowFont font-semibold text-darkBlue">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </section>
    )
}