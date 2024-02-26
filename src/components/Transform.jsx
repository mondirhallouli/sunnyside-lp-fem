import transformMobile from '/images/mobile/image-transform.jpg';
import transformDesktop from '/images/desktop/image-transform.jpg';

export default function Transform() {
    return (
        <section className='flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center'>
            <div className='w-full md:order-2'>
                <img src="/images/mobile/image-transform.jpg" alt="photo of an egg on a yellow background" className='md:hidden' />
                <img src="/images/desktop/image-transform.jpg" alt="photo of an egg on a yellow background" className='hidden md:block md:w-full md:h-full md:object-cover' />
            </div>

            <div className='box-border px-8 py-16 text-center md:text-left lg:px-20 2xl:px-44'>

                <h3 className='font-frauncesFont text-4xl font-black text-darkDesatBlue mb-6 lg:text-5xl md:leading-tight'>Transform your brand</h3>

                <p className='font-barlowFont font-semibold text-lg text-darkGrayishBlue mb-6'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>

                <a href="#" className='px-2 relative z-50 font-frauncesFont font-black tracking-wider transition-all before:content-[""] before:block before:w-full before:h-2 before:rounded before:-z-10 before:bg-yellow/30 before:absolute before:bottom-0 before:left-0 before:transition-colors hover:before:bg-yellow/100'>
                    LEARN MORE
                </a>
            </div>
        </section>
    )
}