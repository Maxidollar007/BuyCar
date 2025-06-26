import { Link } from "react-router-dom"
import {Money} from './money'

export function Voiture(props){
    return <>
                <div className="min-h-fit bg-amber-50 w-[30%] mx-5 shrink-0 rounded-tl-lg rounded-tr-lg shadow-gray-950 shadow-xl cursor-pointer transition: duration-1000 transform hover:scale-105 ">
                        <div className= {props.image}>
                        </div>
                        <div className="my-4">
                            <div className="text-2xl font-bold my-2 mx-2 text-gray-950">
                                {props.nom}
                            </div>
                            <div className="text-2xl font-bold my-2 flex justify-end mx-2">
                                {props.prix}
                            </div>
                            <div className="mx-2 my-2 font-normal ">
                              {props.caracteristique}
                            </div>
                            <div className="w-[70%] mx-auto my-5 bg-gray-500 rounded-xl text-white  shadow-xl flex justify-center py-2 px-10 hover:cursor-pointer hover:bg-red-400">
                                <Link to={'/Money'}>Commander</Link>
                            </div>
                        </div>
                </div>

    </>
}