import useGet from "./customerhooksHW"

export default function Table(){

    const array= useGet();

    return(
        <>
            {array.map(element => {
                <h1>* {element}</h1>
            })}
            {/* {useGet()} */}

        </>
    )
}