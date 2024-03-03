import { useEffect, useState, useRef } from "react";

export default function Photography() {
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

        observer.observe(photographyTextRef.current);

        return () => observer.disconnect();
    }, [])

    return (
        <div className="text-center h-[600px] px-4 pb-12 flex flex-col justify-end bg-photography-mobile bg-no-repeat bg-cover bg-center md:bg-photography-desktop md:bg-top xl:h-[700px]">

            <div ref={photographyTextRef} className={`${intersected ? show : hide} transition-all duration-1000 md:delay-150 md:max-w-[350px] md:mx-auto`}>
                <h2 className="font-frauncesFont font-black text-3xl text-darkBlue mb-8">Photography</h2>

                <p className="font-barlowFont font-semibold text-darkBlue">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
        </div>
    )
}