import  Link  from "next/link";
         
function Home() { 

   return (
   <div>      
            <h1>Infootball</h1>
            <h2>Home</h2>
            <p>

                  Todas as informações sobre o futebol, e mais um pouco venha conhecer e aprender conosco.   
                  
            </p>
            <h3>
                  Acessar:
            </h3>
            
            <ol>
               <li>
                     <Link href="/sobre">
                        <a >Sobre</a>   
                     </Link>
               </li>
               <li>
                     <Link href="/times">
                        <a >Times</a>   
                     </Link>         
               </li>
               <li>
                    <Link href="/jogadores">
                        <a >Jogadores</a>   
                     </Link>         
               </li>
               <li>
                     <Link href="/estadios">
                        <a >Estadios</a>   
                     </Link>  
               </li>
            </ol>
  


   </div>)

            
}


export default Home
