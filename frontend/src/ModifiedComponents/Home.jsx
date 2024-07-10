import Navbar from './Navbar';
import About from './About';
import { Services } from './Services';
import Appointment from './Appointment';
import Contact from './Contact';

const Home=()=>{
    return(
        <>
        <div className="text-black w-full h-full">
            <Navbar/>
            <About/>
            <Services/>
            <Appointment/>
            {/* <Contact/> */}
        </div>
        </>
    )
}

export default Home;