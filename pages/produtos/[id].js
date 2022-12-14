import { resolve } from "styled-jsx/css";

export async function getStaticPaths(){
    return{
        paths: [{
            params: {
                id: "1"
            }            
        },{
            params: {
                id: "2"
            }
        }],
        fallback: 'blocking' 
    }
}

export async function getStaticProps(context) {
    await  delay(1000);
    const id = context.params.id;

    return {
        props:{
            id: id 
        }
    }
}

function Produtos(props) {
    return <div className="container">Id do produto: {props.id}</div>
}

export default Produtos;

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve,ms));
}