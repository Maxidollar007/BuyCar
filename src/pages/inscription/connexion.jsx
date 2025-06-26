import { useMemo, useState } from "react";
import { FaCar } from "react-icons/fa6"
import { Link } from "react-router-dom";

export function Connexion() {
    const [mdp,setMdp]=useState("****")
        const handleChange=(e)=>{
            setMdp(e.target.value)
        }

        const input =" border-2 border-blue-900 border-gray-300 w-full p-2 rounded-lg mb-4 hover:border-blue-500 focus:border-blue-500";
        const button ="w-[90%] bg-blue-600 rounded-2xl text-white flex justify-center py-2 m-auto  hover:cursor-pointer hover:bg-blue-900 "
        const bled=" w-[90%] bg-gray-400 text-white py-2 rounded-2xl flex justify-center py-2 m-auto text-white opacity-50 cursor-not-allowed"

        const [checked,setChecked]=useState(false)

        const handleClick=()=>{
            setChecked(!checked)
        }
        const Change=(e)=>{
            setMdp(e.target.checked)
        }

    return <>

            <div className="flex items-center justify-center min-h-screen  bg-[url('src/img/BMW/silver-sedan-with-red-lights-parked-port.jpg')] bg-no-repeat bg-center bg-cover ">
                <form action="" className=" backdrop-blur-xl bg-white/90 p-10 rounded-lg shadow-2xl w-140 flex items-center justify-center flex-col ">
                    <h2 className="mb-10 flex flex-col items-center text-2xl font-bold">Create your Account<FaCar className="text-red-700 text-3xl mt-4"/></h2>
                    <div className="flex flex-col w-full">
                        <input type="email" placeholder="Adresse email..." required className={input}/>
                        <input type="password" placeholder="Entrer votre mot de passe"  className={input} onChange={handleChange} value={mdp} />
                        <button type="submit" className={button}>Connexion</button>
                        <hr className="my-4 border-1 border-gray-50" />
                    <div className="text-center">Vous n'avez pas de compte <Link to={'/login'} className="underline text-blue-600 font-semibold">Inscris-toi</Link> </div>
                    </div>
                </form>
            </div>
    </>
}