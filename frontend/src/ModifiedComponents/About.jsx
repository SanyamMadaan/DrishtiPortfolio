import pic2 from '../Image/pic2.jpg'

const About = () => {
    return (
        <>
            <div className="text-black  mt-24 ml-10 lg:mr-10 flex flex-col-reverse lg:flex-row justify-between items-center" id="about">
                <div className="w-full lg:w-1/2 mt-1 mb-10 lg:mb-0">
                    <div className='flex justify-center'>
                    <h1 className="text-black mt-5 font-bold text-4xl text-center lg:text-left">Hi, I am </h1><br />
                    </div>
                    
                    <div className='flex justify-center mt-2'>
                    <span className='text-black mt-0 font-bold text-4xl text-center lg:text-left italic'> CA DRISHTI MADAAN</span>
                    </div>
                    
                    <br />
                    <div className='flex justify-center'>
                    <p className="italic font-semibold text-xl lg:text-left">
                        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                    </p>
                    </div>
                    
                    <br />

                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-1 mb-3 lg:mt-0">
                    <img className="border-2 rounded-full border-purple-500 p-1 w-60 h-60 sm:w-80 sm:h-80 " src={pic2} alt="Profile" />
                </div>
            </div>
        </>
    );
}

export default About;
