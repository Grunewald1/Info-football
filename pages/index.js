import  Link  from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";

function Home() { 
   return (
   <div>            
            <Header />

            <Head>
               <title>Infootball</title>
               <link rel="shortcut icon" href="/ball.png" />
            </Head>

            <div className="container">

                  <h1>Infootball</h1>


                  <p>
                        Todas as informações sobre o futebol, e mais um pouco venha conhecer e aprender conosco.   
                  </p>

                  <div>
                     <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                     </ul>
                  </div>
               
            </div>
    
  
   </div>)
           
}


export default Home
