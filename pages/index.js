import  Link  from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";



function Home() { 
   return (
   <div>            

            <Head>
               <title>Infootball</title>
               <link rel="shortcut icon" href="/logosite.png" />
            </Head>

            <Header/>
            <div className="container">


            <img src="/logo_name.png" width="500" height="333"/>
                     <p>
                          Todas as informações sobre o futebol, e mais um pouco venha conhecer e aprender conosco.   
                     </p>
                     <div className="galeria">
                     
                           <img src="/ball.png" width="500" height="333"/>
                           <img src="/time.jpg" width="500" height="333"/>
                           <img src="/estadio.jpeg" width="500" height="333"/>
                     </div>

                  <div className="">
                     
                        <button class="button-19" role="button">Vamos lá!</button>

                  </div>

            </div>



    
  
   </div>)
 
}


export default Home
