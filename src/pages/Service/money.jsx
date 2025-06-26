import { useState } from "react"
import { Link } from "react-router-dom"

export function Money(){
     const button =" bg-gray-500 rounded-xl text-white  shadow-xl  justify-evenly py-2 px-10 my-4 hover:cursor-pointer hover:bg-red-400 "
     let message=""
     let value=document.getElementById("value")
     const submit=(e)=>{
        e.preventDefault()
     }

     const [verification,setVerification]=useState(false)
     
     const Verifia =()=>{
        setVerification(!verification)
     }
     if(verification){
         message="Nous rencontrons des soucis techniques \n Veuillez réessayer ulterieurement"
     }else{
        message=""
     }
     

    return <>
        <div className="flex justify-center items-center min-h-screen" onSubmit={submit}>
            <form action="" className="border-1 w-140 flex flex-col rounded-lg px-8">
                        <h2 className="bg-red-500 w-full my-3 px-2 "> {message} </h2>
                <h2 align="center" className="my-2 font-bold text-2xl mb-4">Choissisez Votre moyen de paiement </h2>
                <div className="grid grid-cols-2 gap-2 h-40">
                    <div className="bg-[url('src/img/orange.png')] bg-center bg-cover hover:cursor-pointer" >
                            <input type="radio" name="blue" id="maxi" />
                        
                    </div>
                    <div className="bg-[url('src/img/Mtn-logo-svg.svg.png')] bg-center bg-cover hover:cursor-pointer">
                            <input type="radio" name="blue"  />
                    </div>
                </div>
                <input type="number" placeholder="1 000 000"  className="border-1 my-6 py-2 " style={{textIndent:"14px"}} required />
                <div className= "flex justify-evenly">
                    <Link to={"/Service"}><button type="button" className="bg-red-500 rounded-xl text-white  shadow-xl  justify-evenly py-2 px-10 my-4 hover:cursor-pointer hover:bg-red-600 ">Annuler</button> </Link> <button type="submit" onClick={Verifia} className="bg-blue-600 rounded-xl text-white  shadow-xl  justify-evenly py-2 px-10 my-4 hover:cursor-pointer hover:bg-blue-700 " >Envoyer</button>
                </div>
            </form>

        </div>
    </>
}