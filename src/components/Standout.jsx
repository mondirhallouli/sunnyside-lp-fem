export default function Standout() {
    return (
        <section className='flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center'>
            <div className='w-full'>
                <img src="/images/mobile/image-stand-out.jpg" alt="photo of a cup" className='md:hidden' />
                <img src="/images/desktop/image-stand-out.jpg" alt="photo of a cup" className='hidden md:block md:w-full md:h-full md:object-cover' />
            </div>

            <div className='box-border px-8 py-16 text-center md:text-left lg:px-20 2xl:px-44'>

                <h3 className='font-frauncesFont text-4xl font-black text-darkDesatBlue mb-6 lg:text-5xl md:leading-tight'>Stand out to the right audience</h3>

                <p className='font-barlowFont font-semibold text-lg text-darkGrayishBlue mb-6'>
                    Using a collaboration formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your digital places.
                </p>

                <a href="#" className='px-2 relative z-50 font-frauncesFont font-black tracking-wider transition-all before:content-[""] before:block before:w-full before:h-2 before:rounded before:-z-10 before:bg-softRed/30 before:absolute before:bottom-0 before:left-0 before:transition-colors hover:before:bg-softRed/100'>
                    LEARN MORE
                </a>
            </div>
        </section>
    )
}