import Header from "../src/components/Header";
import  Link  from "next/link";


function Estadios() { 

    return (
        <div>      
            <Header />

            <h1>Estadios</h1>
 
            <Link href="/">
                <a>Home</a>
            </Link>
 
        </div>)
 }
 
 
 export default Estadios 