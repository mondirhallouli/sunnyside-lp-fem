import { useState, useEffect, useRef } from "react"

export default function Testimonials() {
    const testimonialsRef = useRef();
    const [testimonialsIntersect, setTestimonialsIntersect] = useState();
    const show = 'opacity-100 blur-0';
    const hide = 'opacity-0 blur-sm';

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setTestimonialsIntersect(entry.isIntersecting);
        });

        observer.observe(testimonialsRef.current);

        return () => observer.disconnect();
    }, [])

    return (
        <section className="container mx-auto px-6 py-16 md:px-0 lg:py-28">
            <h3 className="font-frauncesFont font-black tracking-widest text-center mb-16 text-grayishBlue lg:mb-20">
                CLIENT TESTIMONIALS
            </h3>

            <div ref={testimonialsRef} className="w-full flex flex-col flex-wrap justify-center items-center gap-14 md:flex-row">

                <div className={`${testimonialsIntersect ? show : hide} transition-all duration-1000 max-w-96 flex flex-col justify-center items-center gap-7`}>

                    <div className="w-20 rounded-full overflow-hidden">
                        <img src="/images/image-emily.jpg" alt="photo of Emily" className="w-full h-full" />
                    </div>
                    <p className="font-barlowFont font-medium text-center text-lg text-darkDesatBlue">
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <div className="text-center">
                        <span className="block font-frauncesFont font-black text-lg text-darkDesatBlue pb-2">
                            Emily R.
                        </span>
                        <span className="font-barlowFont font-medium text-darkGrayishBlue">
                            Marketing Director
                        </span>
                    </div>
                </div>

                <div className={`${testimonialsIntersect ? show : hide} transition-all duration-1000 delay-300 max-w-96 flex flex-col justify-center items-center gap-7`}>

                    <div className="w-20 rounded-full overflow-hidden">
                        <img src="/images/image-thomas.jpg" alt="photo of Thomas" className="w-full h-full" />
                    </div>
                    <p className="font-barlowFont font-medium text-center text-lg text-darkDesatBlue">
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a stisfying and enjoyable experience.
                    </p>
                    <div className="text-center">
                        <span className="block font-frauncesFont font-black text-lg text-darkDesatBlue pb-2">
                            Thomas S.
                        </span>
                        <span className="font-barlowFont font-medium text-darkGrayishBlue">
                            Chief Operating Officer
                        </span>
                    </div>
                </div>

                <div className={`${testimonialsIntersect ? show : hide} transition-all duration-1000 delay-500 max-w-96 flex flex-col justify-center items-center gap-7`}>

                    <div className="w-20 rounded-full overflow-hidden">
                        <img src="/images/image-jennie.jpg" alt="photo of Jennie" className="w-full h-full" />
                    </div>
                    <p className="font-barlowFont font-medium text-center text-lg text-darkDesatBlue">
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <div className="text-center">
                        <span className="block font-frauncesFont font-black text-lg text-darkDesatBlue pb-2">
                            Jennie F.
                        </span>
                        <span className="font-barlowFont font-medium text-darkGrayishBlue">
                            Business Owner
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}