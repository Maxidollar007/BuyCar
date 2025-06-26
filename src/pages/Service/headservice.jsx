import { IoCarSportOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { IoIosPerson } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi"

export function Headservice(){
    return <>
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
                        <Link to={'/login'}><button type="button" className='py-3 px-5 rounded-2xl bg-gray-500 text-sm text-white hover: cursor-pointer hover: hover:bg-red-400 hover:transition duration-1000'>Connexion/Inscription</button></Link><span className="flex justify-center items-center mx-2 ">
                            <span className="mx-2 hover:cursor-pointer"><IoIosPerson size="20px" /></span>
                            <span className="hover:cursor-pointer"><GiShoppingCart size="20px"/></span></span>
                    </div>
            </div>
    </>
}