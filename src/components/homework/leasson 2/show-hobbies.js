

export default function ShowHbbies(props) {

    const {myHobbies}= props;

    return(
        <>
        <h1>My Hobbies:</h1>
            {myHobbies.map(hobby => {
                return(
                    <div>{hobby}</div>
                )
                
            })}
        </>
    )
}