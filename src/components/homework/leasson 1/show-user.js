
export default function ShowUser(props) {

    const {name, lastName ,address, age, bornDate}= props;

    return(
        <>
        <h1>
            name: {name}
            <br></br>
            last name: {lastName}
            <br></br>
            address: {address}
            <br></br>
            age: {age}
            <br></br>
            born date: {bornDate}
        </h1>
        </>
    )
}