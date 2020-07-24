import React, { useEffect, useState } from "react";
import data from './fiscalmeasures.json'
import DatatablePage from "./components/Table";
export default function Fiscal(){

var[columns,setcolumns]=useState([])
var[rows,setrows]=useState([])
var[loading,setloading]=useState(false)

console.log(data)

useEffect(()=>{
columns=[]
for(let i in data[1]){    
      columns.push({
        label: i,
        field: i,
        width :i.length*10
        // sort: 'asc',
        // width: i.length*10
      })

}

setcolumns(columns)
rows=[]
for(let i in data)
{
    var x={}
    for(let j in data[i])
    {
        x[j]=data[i][j]
    }
    rows.push(x)
}
setrows(rows)
setloading(true)
},[])
if(loading===true)
    {
        var tabledata={columns,rows}
        return(
        <div style={{padding:'5%',display:'flex',flexDirection:'column',width:'100%'}}>
            <h2 style={{textAlign:'left',fontWeight:'500' , fontSize :"2.2vw"}}>Fiscal Policy Measures undertaken by the government</h2>
            <div className = "dataTable"><DatatablePage  data= {tabledata}/></div>
        </div>
        )
    }
else
return(<h1>loading</h1>)

}