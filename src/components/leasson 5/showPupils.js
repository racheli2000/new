
import React, { useRef, useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import actions from './redux/actions';


// function mapStateToProps(state) {

//     return {
//         pupils: state.pupils.pupils
//     };

// }


// export default connect(mapStateToProps)(
    // const {pupils, dispatch} = props;


  export default  function ShowPupils() {

        const Data= useSelector(state => state.pupils)

        const dispatch= useDispatch();
        const newName= useRef('');
        const [name, setName]= useState('');


        function deleteMe(index) {
            dispatch(actions.deletePupil({id: Data.Allpupils[index].id}));
        }


        function changeName(index) {
            dispatch(actions.updatePupil({newName: name, index: index}));
        }

    return(
        <>
            {Data.Allpupils.map((p, index) =>
            <>
                <h2>{p.name}</h2> 
                <button onClick={i => deleteMe(index)}>x</button>
                {/* <input key={p.id} type="text" placeholder="change name" ref={newName} /> */}
                <input name={p.id}  type="text" placeholder="change name"  onChange={(v) => setName(v.target.value)}/>
                <br></br>
                <button onClick={() => changeName(index)}>change my name</button>
            </> )}
        </>
    )
}
// )