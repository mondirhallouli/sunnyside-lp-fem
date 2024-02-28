export default function Graphics() {
    return (
        <section className="sm:grid sm:grid-cols-2 sm:justify-items-stretch">
            <div className="text-center h-[600px] px-4 pb-12 flex flex-col justify-end bg-graphicDesign-mobile bg-no-repeat bg-cover bg-center md:bg-graphicDesign-desktop md:bg-top xl:h-[700px]">

                <h2 className="font-frauncesFont font-black text-3xl text-darkDesatCyan mb-8">Graphic Design</h2>

                <p className="font-barlowFont font-semibold text-darkDesatCyan md:max-w-96 md:mx-auto">
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                </p>
            </div>

            <div className="text-center h-[600px] px-4 pb-12 flex flex-col justify-end bg-photography-mobile bg-no-repeat bg-cover bg-center md:bg-photography-desktop md:bg-top xl:h-[700px]">

                <h2 className="font-frauncesFont font-black text-3xl text-darkBlue mb-8">Photography</h2>

                <p className="font-barlowFont font-semibold text-darkBlue md:max-w-96 md:mx-auto">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
        </section>
    )
}