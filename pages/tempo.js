function Tempo (props) {
    console.log('>Passando pelo Frontend;')
    const dinamicDate = new Date ();
    const dinamicDateString = dinamicDate.toGMTString();

    return (
            <div>
                   <div>{dinamicDateString} (dinamico)</div> 
                   <div>{props.staticDateString} (estático)</div> 
            </div>
                    

    )

}

export function getStaticProps()    {
        console.log('>Passando pelo getStaticProps();');
        const staticDate = new Date ();
        const staticDateString = staticDate.toGMTString();

        return {
            props: {
                staticDateString
            } 


        }
}

export default Tempo



        