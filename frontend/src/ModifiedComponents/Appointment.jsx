import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

const Appointment = () => {
  //states
  const url="http://localhost:3000";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const[btn,setBtn]=useState("BOOK NOW");

  const val=useRef();
  const SendEmail = async (e) => {
    e.preventDefault();

    try {
        setBtn("Submitting...");
      const response = await axios.post(`${url}/submit`, {
        email,
        name,
        subject,
        phone,
      });
      if (response.status == 200) {
        setEmail("");
        setName("");
        setSubject("");
        setPhone("");
        setBtn("BOOK NOW");
        alert("Details Submitted Successfully..We Will Contact You Soon");
      }
    } catch (e) {
        setBtn("BOOK NOW");
      console.log(e);
      alert("Server is Down.. Please Try again later");
    }
  };

  return (
    <div
      id="appointment"
      className="flex justify-center items-center flex-col mt-20  px-4 "
    >
      <h1 className="lg:text-5xl text-black italic md:text-5xl text-4xl mt-10 font-bold text-center">Book an Appointment</h1>
      <h2 className="text-black font-medium text-center mt-4 text-xl lg:text-2xl md:text-2xl">
        Feel free to reach out to me for any questions or Tax related advice
      </h2>
      <div className="border-2 w-full md:w-3/4 lg:w-1/2 border-white flex flex-col p-8 justify-center items-center rounded-md  mt-8 mb-4">
        <form onSubmit={SendEmail} className="w-full lg:border-2 lg:w-2/3 border-black p-5 rounded-lg">
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 mt-2 mb-4 p-2 rounded-md border-2 border-black text-black text-xl"
            type="text"
            value={name}
            placeholder="Full Name/Company Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 mt-2 mb-4 p-2 rounded-md border-2 border-black text-black text-xl"
            type="email"
            value={email}
            placeholder="Email Address"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-12 mt-2 mb-4 p-2 rounded-md border-2 border-black text-black text-xl"
            type="text"
            value={phone}
            placeholder="Phone Number"
            required
          />
          <input
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-12 mt-2 mb-4 p-2 rounded-md border-2 border-black text-black text-xl"
            type="text"
            value={subject}
            placeholder="Subject"
            required
          />
          <button
            type="submit"
            className="text-white w-full h-18   bg-black border-2 border-white p-2 rounded-md mb-2 mt-2 cursor-pointer"
          >
{btn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
