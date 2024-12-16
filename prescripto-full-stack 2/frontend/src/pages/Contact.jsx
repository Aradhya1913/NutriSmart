
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>

<div className="text-center text-4xl pt-10 text-green-400 font-bold tracking-wider">
        <p>CONTACT <span className="text-green-600">US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Vidya Nagar <br /> BH Road Tiptur, Karnaaka India</p>
          <p className=' text-gray-500'>Tel: (08134) 0000-0000 <br /> Email: SmartNuri@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>Fitness @ SmartNutri </p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Connect Us </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
