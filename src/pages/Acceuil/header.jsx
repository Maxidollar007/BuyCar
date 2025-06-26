import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { createBrowserRouter,Link } from "react-router-dom"
import { Inscription } from "../inscription/Inscription";
export function Headerpage(){
    return<>
        <div className=" justify-around flex items-center  border-red-400 w-full bg-transparent shadow-xl nav" >
            <h1 className="flex text-4xl" style={{transform: "rotateZ(-01deg)"}}>
                <IoCarSportOutline color="rgba(219, 49, 49, 0.856)" size="30px " className="mx-2"/>  BUY CARS
            </h1>
            <ul className="sous-nav text-md font-normal">
                    <li><Link to={'/'}>Acceuil</Link></li>
                    <li><Link to={'/Service'}>Services</Link></li>
                    <li><Link to={'/About'}>A propos</Link></li>
            </ul>
            <div className="flex items-center" >
                <Link to={'/login'}><button type="button" className='py-3 px-5 rounded-2xl bg-gray-500 text-sm text-white hover: cursor-pointer hover: hover:bg-red-400 hover:transition duration-1000'>Connexion/Inscription</button></Link><span id="icons" className="flex justify-center items-center">
                    <AiOutlineWhatsApp color="#16191D" size="30px " /> <a href=""><FaFacebookF color="#16191D" size="30px " /></a>
<a href=""></a>                </span>
            </div>
        </div>
    </>
}