import type {prodacts} from "../teyps/app.ts";

type ProdactProps= {
    prodactData:prodacts[]
}
function Prodect(props:ProdactProps) {
    return (
        <div>
            <h1>Product List</h1>
           <ul>
               {props.prodactData.map((product) => (
                   <li key={product.id}>
                       <h2>{product.name}</h2>
                       <p>{product.price}</p>
                       <p>{product.description}</p>
                   </li>
                ))}
           </ul>
        </div>
    );
}

export default Prodect;