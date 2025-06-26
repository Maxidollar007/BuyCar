import { useState } from "react"
import { Voiture } from "./voiture"
import { Headservice } from "./headservice"
import { TbBackground } from "react-icons/tb"
export function Prod(){
    const select =" bg-white py-1 px-8 rounded-xs shadow-xs shadow-white shadow-white shadow-2xs"
    const button =" bg-gray-500 rounded-xl text-white  shadow-xl flex justify-center py-2 px-10 hover:cursor-pointer hover:bg-red-400 "
    
const Audi=[
        {   id:1, Marque :"AUDI A3",Prix :31000, caracteristique:"Qualité,élégante,connectée,compacté",image:"h-1/2 bg-[url('src/img/Audi/AudiA3.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:2,Marque :"Audi Q5",Prix :55000, caracteristique:"SUV raffiné,technologie quattro",image:"h-1/2 bg-[url('src/img/Audi/AudiQ5.avif')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:3,Marque :"Audi A6",Prix :60000, caracteristique:"Haut de gamme,moteur perfomant,interieur rafinné",image:"h-1/2 bg-[url('src/img/Audi/Audi6.avif')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:4,Marque :"Audi S4",Prix :3500, caracteristique:"Elegante",image:"h-1/2 bg-[url('src/img/Audi/AudiS4.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"}
    ]

const Bmw=[
        {   id:5, Marque :"BMW Serie 1",Prix :33000, caracteristique:"Compacte Premium,sportive.",image:"h-1/2 bg-[url('src/img/BMW/BS1.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:6,Marque :"BMW X3",Prix :50000, caracteristique:"SUV perfomant,transmission integrale",image:"h-1/2 bg-[url('src/img/BMW/BX3.avif')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:7,Marque :"BMW Serie 5",Prix :60000, caracteristique:"Berline luxueuse,très bonne tenue de route",image:"h-1/2 bg-[url('src/img/BMW/BS5.webp')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:8,Marque :"BMW Serie 1",Prix :3500, caracteristique:"Elegante",image:"h-1/2 bg-[url('src/img/BMW/BX1.avif')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"}
    ]

const Lam=[
        {   id:9, Marque :"Lamborghini huracan",Prix :230000, caracteristique:"Supercar,moteur V10 , design agressif",image:"h-1/2 bg-[url('src/img/Lam/fast.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:10,Marque :"Lamborghini Aventador",Prix :400000, caracteristique:"V12 , très haute perfomances,look extrême",image:"h-1/2 bg-[url('src/img/Lam/yellow.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:11,Marque :"Lamborghini Urus",Prix :1500, caracteristique:"Confortable..",image:"h-1/2 bg-[url('src/img/Lam/welcome.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:12,Marque :"Lamborghini Urus ",Prix :220000, caracteristique:"SUV de luxe,puissant et rapide",image:"h-1/2 bg-[url('src/img/Lam/sese.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
         {  id:13,Marque :"Lamborghini  Sian ",Prix :3000000, caracteristique:"Serie limitée ,V12 hybride,design futurise,exclusivité",image:"h-1/2 bg-[url('src/img/Lam/cars2.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
          {  id:14,Marque :"Lamborghini Centario",Prix :2000000 , caracteristique:"Supercar en edition très limitée , perfomances extrême,célebration des 100 de Ferruccio Lamborghini",image:"h-1/2 bg-[url('src/img/Lam/cars.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"}
    ]

const Peugeot=[
        {   id:15, Marque :"PEUGEOT 208",Prix :17000, caracteristique:"Compacte,économque,idéale en ville",image:"h-1/2 bg-[url('src/img/Peugot/P208.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:16,Marque :"PEUGEOT 3008",Prix :35000, caracteristique:"SUV spacieux ,design moderne,technologie embarquée",image:"h-1/2 bg-[url('src/img/Peugot/P3008.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:17,Marque :"PEUGEOT 231",Prix :40000, caracteristique:"Berline élégante,confort premium",image:"h-1/2 bg-[url('src/img/Peugot/P231.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"},
        {  id:18,Marque :"PEUGEOT 5008",Prix :3500, caracteristique:"Spacieux , polyvent et confort Premieum",image:"h-1/2 bg-[url('src/img/Peugot/P5008.jpg')] bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg"}
    ]

        const [price,setPrice]=useState(0)
    const handleChange=(e)=>{
        setPrice(e.target.value)
    }
    const [value,setValue]=useState('')
    const handleChangeSelect=(e)=>{
        setValue(e.target.value)
    }

    const [bool,setBool]=useState(false)
     const handleClick=()=>{
        setBool(!bool)
    }

    const userInput=value

    function choosecar(val){
            if(val=="Bmw"){
                return Bmw
            }else if(val=="Peugeot"){
                return Peugeot
            }else if(val=="Audi") {
                return Audi
            }else if(val=="Lam"){
                return Lam
            }else{
                    return []
            }
        }
    const found= choosecar(userInput)

//Filtre 


        const Tabfilter=found.filter(F=>{
            if(F.Marque.toLowerCase().includes(value.toLowerCase())){
                return F
            }
        })
    
    Tabfilter.map(T=>{
            console.log(T.Marque)
        })



    return <>
    <Headservice/>
        <div className="mt-4 mx-30 bg-gray-900  py-2 flex items-center justify-around">
            <select name="" id="" value={value} onChange={handleChangeSelect} className={select}>
                <option value="">Marque</option>
                <option value="Bmw">BMW</option>
                <option value="Lam">Lamborghini</option>
                <option value="Audi">Audi</option>
                <option value="Peugeot">Peugeot</option>

            </select>
            <input type="search" value={price} onChange={handleChange}  placeholder="Entre ton prix " className="bg-white py-1 px-8 mx-4 rounded-xs shadow-xl"/>
            <button type="submit" onClick={handleClick} className={button}>{bool ? (<span>Annuler</span>):(<span>Rechercher</span>)} </button>
        </div>

        {bool? (<div className="mx-30 my-4  mt-5 h-120" >
            <div className=" w-full h-full overflow-scroll flex p-4" style={{scrollbarWidth:"none"}}>
                  {Tabfilter.map(T=>(<Voiture nom={T.Marque} key={T.id} image={T.image} caracteristique={T.caracteristique}  prix={T.Prix}/>))}
            </div>
        </div>

            ) : (<div className="mx-30 mt-4 bg-blue-200 h-140 rounded-lg" >
            <div className="bg-red-100 w-full h-full overflow-hidden flex rounded-lg">
                <div className="bg-[url('src/img/GN1.webp')]  bg-cover bg-center shrink-0  w-full h-full mation1" ></div>
                <div className="bg-[url('src/img/GN2.jpg')] bg-cover bg-center shrink-0 w-full h-full mation2" ></div>
                <div className="bg-[url('src/img/GN3.jpg')] bg-cover bg-center shrink-0 w-full h-full mation3" ></div>
            </div>
        </div>)}


       {/*  <div className="mx-30 mt-4 bg-blue-200 h-140 rounded-lg" >
            <div className="bg-red-100 w-full h-full overflow-scroll flex rounded-lg" style={{scrollbarWidth:"none"}}>
                <div className="bg-[url('src/img/GN1.webp')]  bg-cover bg-center shrink-0  w-full h-full mation1" ></div>
                <div className="bg-[url('src/img/GN2.jpg')] bg-cover bg-center shrink-0 w-full h-full mation2" ></div>
                <div className="bg-[url('src/img/GN3.jpg')] bg-cover bg-center shrink-0 w-full h-full mation3" ></div>
            </div>
        </div> */}
        <div className="mx-30 mt-10 text-2xl text-gray-900 font-bold">
            <h1>Decouvrez notre large selection de voitures </h1>
            <h2 align="center" className="my-6 bg-gray-900 police py-2  tracking-widest">PEUGEOT</h2>
        </div>
        <div className="mx-30 my-4  mt-5 h-120">
            <div className=" w-full h-full overflow-scroll flex p-4" style={{scrollbarWidth:"none"}}>
                  {Peugeot.map(P=>(<Voiture nom={P.Marque} prix={P.Prix} caracteristique={P.caracteristique} image={P.image} key={P.id} />))}
            </div>
        </div>
         <div className="mx-30 mt-10 text-3xl">
            <h2 align="center" className="my-6 bg-gray-900 police py-2  tracking-widest">Audi</h2>
        </div>
        <div className="mx-35 my-4 mt-5 h-120">
            <div className="w-full h-full overflow-scroll  flex p-4" style={{scrollbarWidth:"none"}}>
                    {Audi.map(a=>(<Voiture nom={a.Marque} prix={a.Prix} caracteristique={a.caracteristique} image={a.image} key={a.id} />))}
            </div>
        </div>
         <div className="mx-30 mt-10 text-3xl">
            <h2 align="center" className="my-6 bg-gray-900 police py-2  tracking-widest">BMW</h2>
        </div>
        <div className="mx-35 my-4 mt-5 h-120">
            <div className="w-full h-full overflow-scroll flex p-4" style={{scrollbarWidth:"none"}}>
                   {Bmw.map(B=>(<Voiture nom={B.Marque} prix={B.Prix} caracteristique={B.caracteristique} image={B.image} key={B.id}/>))}
            </div>
        </div>
         <div className="mx-30 mt-10 text-3xl">
            <h2 align="center" className="my-6 bg-gray-900 police py-2 tracking-widest">Lamborghini</h2>
        </div>
        <div className="mx-35 my-4  mt-5 h-120">
            <div className="w-full h-full overflow-scroll flex p-4" style={{scrollbarWidth:"none"}}>
                   {Lam.map(L=>(<Voiture nom={L.Marque} prix={L.Prix} caracteristique={L.caracteristique} image={L.image} key={L.id} />))}
            </div>
        </div>
        
    </>
} 