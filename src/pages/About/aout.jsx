import { Headservice } from "../Service/headservice"
import { Footer } from "../Acceuil/footer"
import { CgProfile } from "react-icons/cg";
export function About (){
    return <>
    <Headservice/>
    <div className="text-4xl my-3 font-bold" align="center">A Propos de nous </div>
    <div className="mx-30 h-130 my-8 flex gap-10">
        <div className="  shadow-2xl  w-1/2 mt-10  items-center">
             <h2 className="text-4xl mx-auto font-bold" align="center">Description</h2>
             <div className="text-2xl font-normal font-serif p-4 leading-loose" style={{textIndent:"15px"}}><b>BUY CARS</b> est une plateforme
             innovante de vente de voiture en ligne , qui s'éfforce chaque jour de rendre l'achat automobile aussi simple,fiable
              et transparent  que possible , en offrant une large choix de véhicule neufs et d'occasions soigneusement 
              inspectés tout en garatissant transparence,accompagnement  et satisfaction à chaque processus. </div>
        </div>
        <div className="bg-[url('src/img/industrial-designer-working-3d-model.jpg')] bg-center bg-cover w-1/2">

        </div>
    </div>
    <div className="mx-30 h-130 my-8 flex gap-10">
        <div className="  shadow-2xl  w-1/2 mt-10  items-center">
             <h2 className="text-4xl mx-auto font-bold" align="center">Valeurs</h2>
             <div className="text-2xl font-normal font-serif p-4 leading-loose" style={{textIndent:"15px"}}>
                Notre activité repose sur des pilliers solides: la confiance , la transparence,l'accessibilité et la passion
                de l'automobile. Chaque interaction avec nos clients est guidée par le soucis de l'excellence et la volonté d'instaurer une relation durable,éthique et respectueuse.
             </div>
        </div>

        <div className="bg-[url('src/img/valeurs.jpg')] bg-center bg-cover h-full w-1/2">

        </div>
    </div>
    <div className="mx-30 h-130 my-8 flex gap-10">
        <div className="  shadow-2xl   w-1/2 mt-10  items-center">
             <h2 className="text-4xl mx-auto font-bold" align="center">Pourquoi nous choisir ?</h2>
             <div className="text-2xl font-normal font-serif p-4 leading-loose" style={{textIndent:"15px"}}>Choisir <b>BUY CAR</b>
             ,c'est faire le choix d'une plateforme qui allié simplicité,rapidité et securité,avec une large selection des véhicules soigneusementvérifiés,des filtres de recherche intelligents et un service d'assistance disponible à tout moment 
             pour vous accompagner</div>
        </div>
        <div className="bg-[url('src/img/why.jpg')] bg-center bg-cover hh-full w-1/2">

        </div>
    </div>
    <h2 className="mx-30 my-10 text-4xl font-bold" align="center"> Localisation</h2>
   <div className=" m-auto h-85 my-8 flex w-1/2 justify-center items-center bg-[url('src/img/Capture.PNG')] bg-center bg-cover shadow-2xl">
            
   </div>

        <h2 className="text-4xl mx-auto font-bold my-4 " align="center" >Témoignage</h2>
    <div className="mx-30  shadow-2xl m-auto grid grid-cols-3 h-fit gap-4 p-4 ">
       <div className="flex-1 h-full border-r-1  p-4">
        <div>
            <CgProfile  size="100px"/>

            Maxi Dollar
        </div>
        <div className="mt-2 font-medium text-xl">
           Jolie j'ai été satisfaire par l'achat de la voiture 
        </div>
       </div>
       <div className="flex-1 h-full border-r-1  p-4">
        <div>
            <CgProfile  size="100px"/>
                ATANGANA
        </div>
        <div className="mt-2 font-medium text-xl">
           Je trouve ce site attrayant et de meilleurs choix et les prix sont abordables je vous recommande vivement <b>BUY CARS</b>
        </div>
       </div>
       <div className="flex-1 h-full p-4">
        <div>
           <CgProfile  size="100px"/>
            FOKOU Christelle
        </div>
        <div className="mt-2 font-medium text-xl">
           Grâce à vous je suis déjà vehiculé, Fini la marche à pieds
        </div>
       </div>
       <div className="flex-1 h-full p-4 border-r-1">
        <div>
            <CgProfile  size="100px"/>
            BATAMA
        </div>
        <div className="mt-2 font-medium text-xl mx-auto">
          COOOOOLLLLLLLLLLLLLLL!!!!!!!!!!!!!!!!!
        </div>
       </div>
    </div>
      <div className="flex justify-evenly p-5  text-black font-bold mt-15  sha">
                <h4>Copyright<sup>©</sup>2025</h4>
                <ul className="flex items-center w-fit flex-nowrap">
                    <li className="px-5 py-1 hover:underline hover:cursor-pointer">Information de contact</li>
                    <li className="px-5 py-1 hover:underline hover:cursor-pointer">Mentions legales</li>
                    <li className="px-5 py-1 hover:underline hover:cursor-pointer">Aide</li>
                    <li className="px-5 py-1 hover:underline hover:cursor-pointer">Envoyez des commentaires</li>
                </ul>
        </div>
    </>
}