import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-lightblack text-green-400 py-10">

      
      <div className="text-center text-4xl pt-10 text-green-400 font-bold tracking-wider">
        <p>ABOUT <span className="text-green-600">US</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img className="w-full md:max-w-[360px] rounded-lg shadow-lg" src={assets.football} alt="SmartNutri" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-green-200">
          <p className="leading-relaxed">Welcome to SmartNutri, your trusted platform for connecting with expert mentors in various fields. At SmartNutri, we understand the importance of personalized guidance and the impact it can have on your professional and personal growth. That’s why we have created a space where individuals can easily find and schedule appointments with mentors who are eager to share their knowledge and expertise.</p>
          <p className="leading-relaxed">SmartNutri is committed to empowering learners and professionals by offering seamless access to mentorship. Whether you are looking to advance your career, learn new skills, or seek advice from experienced professionals, SmartNutri is here to support your journey with top-notch mentors and an intuitive platform. Start your mentoring journey today with SmartNutri.</p>
          <h2 className="text-green-400 font-semibold text-xl">Our Vision</h2>
          <p className="leading-relaxed">At SmartNutri, our vision is to create a world where knowledge and guidance are accessible to everyone, regardless of location or background. We aim to bridge the gap between aspiring learners and experienced mentors by providing a platform that fosters meaningful connections and empowers individuals to achieve their fullest potential.</p>
          <p className="leading-relaxed">Through continuous innovation, we envision SmartNutri as a global community where mentorship is not just a service, but a transformative experience that drives personal and professional growth.</p>
        </div>
      </div>

      <div className="text-3xl text-green-400 font-bold my-8">
        <p>WHY <span className="text-green-600">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-6">
        <div className="border border-green-600 px-10 py-10 flex flex-col gap-5 hover:bg-green-600 hover:text-lightblack transition-all duration-300 rounded-lg shadow-md text-green-300 cursor-pointer">
          <h3 className="text-lg font-semibold">EFFICIENCY</h3>
          <p>Seamless mentor appointment scheduling that adapts to your busy life.</p>
        </div>
        <div className="border border-green-600 px-10 py-10 flex flex-col gap-5 hover:bg-green-600 hover:text-lightblack transition-all duration-300 rounded-lg shadow-md text-green-300 cursor-pointer">
          <h3 className="text-lg font-semibold">CONVENIENCE</h3>
          <p>Access a diverse network of experienced mentors at your fingertips.</p>
        </div>
        <div className="border border-green-600 px-10 py-10 flex flex-col gap-5 hover:bg-green-600 hover:text-lightblack transition-all duration-300 rounded-lg shadow-md text-green-300 cursor-pointer">
          <h3 className="text-lg font-semibold">PERSONALIZATION</h3>
          <p>Get customized mentor recommendations to match your career or personal growth goals.</p>
        </div>
      </div>

    </div>
  );
}

export default About;
