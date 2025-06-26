export function Maxi(){

    


    return <>

    <div className="mx-30 my-4  mt-5 h-120 bg-red-800">
            <div className=" w-full h-full overflow-scroll flex p-2" style={{scrollbarWidth:"none"}}>

                {Prod.map(c=>(<div className="min-h-fit bg-amber-50 w-[30%] mx-5 shrink-0 rounded-tl-lg rounded-tr-lg shadow-gray-950 shadow-xl cursor-pointer transition: duration-1000 transform hover:scale-105 ">
                            <div className= "bg-red-700 h-1/2">
                                
                        </div>
                <div className='bg-red'>
                           <div className="text-2xl font-bold my-2 mx-2 text-gray-950">
                                {c.Marque}
                            </div> 
                            <div className="text-2xl font-bold my-2 flex justify-end mx-2">
                                {c.Prix}
                            </div> 
                            <div className="mx-2 my-2 font-medium ">
                              {c.caracteristique}
                            </div> 
                            <div className="w-[70%] mx-auto my-5 bg-gray-500 rounded-xl text-white  shadow-xl flex justify-center py-2 px-10 hover:cursor-pointer hover:bg-red-400">
                                <a href="">Commander</a>
                            </div>  
                </div>
            </div>))}

            </div>
        </div>


    </>
}