type Props= {
    name:string;
    login:boolean;
    ScN:string;
    OpjDate?:{
        firstN:string;
        LastN:string;
    }
    arrDate?:{
        id:number;
        FN:string;
        LN:string;
    }[];
}
function HelloShaker({name,login,OpjDate,ScN,arrDate}:Props) {
    return (
        <div>
            <h1>Hello Shaker {login?name:"Guest" }</h1>
            <h2>{OpjDate?.firstN}</h2>
            <h2>{OpjDate?.LastN}</h2>
            <h2>{ScN}</h2>
            <ul>
                {arrDate?.map((item) => (
                    <li key={item.id}>
                        {item.FN} {item.LN}
                    </li>

            ))}
            </ul>
        </div>
    );
}

export default HelloShaker;