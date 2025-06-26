import { Headerpage } from "./header"
import { Footer } from "./footer"
import { createBrowserRouter,Link } from "react-router-dom"

export function Home(){
    return <>
        <Headerpage/>
             <div className="contenu">
            <div className="answer">
                <section>
                    <header><h1 align="center">BUY CARS</h1></header>
                    <main>
    Bienvenu sur notre plateforme, trouver dès aujourd'hui la voiture de vos reves, au meilleur prix et en toute confiance !!!
    <Link to={'/Service'} className="flex justify-center"><br /><button className=" py-2 px-7 rounded-2xl bg-gray-500 text-sm text-white hover: cursor-pointer hover:bg-red-400 hover:transition duration-1000">Get Started</button></Link>

                    </main>
                </section>
                <div className="image">
                    <img src="src/img/15  lamborghini-reventon-roadster 03 [vikitech] .jpg" alt="" height="70%" width="70%"/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}