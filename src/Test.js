import React, { useState } from 'react';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import TextField from '@material-ui/core/TextField';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import { green } from '@material-ui/core/colors';

import './Test.css';


const Test=()=>{


    const [getList, setList] = useState("");
    const [newGetList, newSetList] = useState([]);

    const fetchValue=(e)=>{
        setList(e.target.value);
    }

    const addList=()=>{
        if(getList!=""){
            newSetList((oldvalue)=>{
                return [...oldvalue,getList]
            })
        }else{
            return false;
        }

        setList("");
    }

    const removeList=(e)=>{
        newSetList((oldvalue)=>{
            return oldvalue.filter((value,index)=>{
                return index!==e;
            })
        })
    }

    let date = new Date().toLocaleDateString();

    return (
          <div class="ctm-container"> 
            <h1>{date}</h1>
            <div class="add-section">
                <TextField id="standard-basic" value={getList} label="Add List" name="list" onChange={fetchValue}/>
                    <AddCircleSharpIcon  color="primary" onClick={addList}/>
            </div>

            <div class="list-section">
               <ul>
                    {newGetList.map((value,index)=>{
                    return(
                           <div class="list">
                               <li>{value}</li>
                               <HighlightOffSharpIcon  color="secondary" onClick={()=>removeList(index)} />
                           </div> 
                    )
                    })}
               </ul> 
             </div>  
          </div> 
    )
}

export default Test;