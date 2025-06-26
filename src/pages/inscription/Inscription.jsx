import { useMemo, useState } from "react";
import { FaCar } from "react-icons/fa6"
import { Link } from "react-router-dom";

export function Inscription() {
    const [mdp,setMdp]=useState("****")
        const handleChange=(e)=>{
            setMdp(e.target.value)
        }

        const input =" border-2 border-blue-900 border-gray-300 w-full p-2 rounded-lg mb-4 hover:border-blue-500 focus:border-blue-500";
        const button ="w-[90%] bg-blue-600 rounded-2xl text-white flex justify-center py-2 m-auto  hover:cursor-pointer hover:bg-blue-900 "
        const Faible ="w-[100%] bg-red-200 text-black py-2 mb-4 text-center rounded-lg transition duration-1000"
        const Moyen=" w-[100%] bg-orange-300 text-black py-2 mb-4 text-center rounded-lg transition duration-1000"
        const Fort ="w-[100%] bg-green-200 text-black py-2 mb-4 text-center rounded-lg transition duration-1000"
        const security =passwordverify(mdp)
        const bled=" w-[90%] bg-gray-400 text-white py-2 rounded-2xl flex justify-center py-2 m-auto text-white opacity-50 cursor-not-allowed"
        

        //Force du mot de passe
        function passwordverify(password){
            if(password.length<5){
                return <h3 className={Faible}>
                    Faible
                </h3>
            }else if(password.length>=5 && password.length<8){
                return <h3 className={Moyen}>
                    Moyen
                </h3>
            }else{
                return <h3 className={Fort}>
                    Fort
                </h3>
            }
        }
//        Accepter les termes du contrats 

        const [checked,setChecked]=useState(false)

        const handleClick=()=>{
            setChecked(!checked)
        }
        const Change=(e)=>{
            setMdp(e.target.checked)
        }




        
    return <>

            <div className="flex items-center justify-center min-h-screen  bg-[url('src/img/BMW/silver-sedan-with-red-lights-parked-port.jpg')] bg-no-repeat bg-center bg-cover transition: duration-1000">
                <form action="" className=" backdrop-blur-xl bg-white/90 p-10 rounded-lg shadow-2xl w-140 flex items-center justify-center flex-col ">
                    <h2 className="mb-10 flex flex-col items-center text-2xl font-bold">Create your Account<FaCar className="text-red-700 text-3xl mt-4"/></h2>
                    {/* <h3>{security}</h3> */}{security}
                    <div className="flex flex-col w-full">
                        <input type="text" placeholder="Nom..." required className={input}/>
                        <input type="email" placeholder="Adresse email..." required className={input}/>
                        <input type="password" placeholder="Entrer votre mot de passe"  className={input} onChange={handleChange} value={mdp} />
                        <input type="text" placeholder="Confirmer votre mot de passe"  className={input} onChange={handleChange} value={mdp} disabled/>
                        <div className="flex justify-center p-4"><input type="checkbox" checked={checked} onClick={handleClick} /* onChange={Change} */ /> <span className="mx-2 "> Accepter les <span className="underline text-blue-600 font-semibold"> termes de conrat</span></span></div>
                        <button type="submit" className={checked? button:bled } disabled={!checked}>Creer Votre compte </button>
                        <hr className="my-4 border-1 border-gray-50" />
                    <div className="text-center">Avez vous un compte ?? <Link to={'/Sign'} className="underline text-blue-600 font-semibold">Connexion</Link> </div>
                    </div>
                </form>
            </div>
    </>
}