import { FiAlertTriangle } from "react-icons/fi"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="flex justify-center items-center min-h-dvh">
        <div className="flex flex-col justify-center items-center">
          <FiAlertTriangle className="text-9xl text-red-500"/>
          <span className="text-[#fff] font-WorkSans font-medium text-xl">File Not Found <NavLink to='/' className='font-WorkSans font-medium text-blue-600 underline'>back to HomePage</NavLink></span>
        </div>
    </section>
  )
}

export default NotFound