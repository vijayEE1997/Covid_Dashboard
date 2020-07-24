import React, { useEffect, useState } from "react";
import data from './monetarymeasures.json'
import DatatablePage from "./components/Table";
export default function MonetaryPolicy(){

var[columns,setcolumns]=useState([])
var[rows,setrows]=useState([])
var[loading,setloading]=useState(false)

console.log(data)

useEffect(()=>{
columns=[]
for(let i in data[0]){
    if(i!="Description")
    columns.push({
        label: i,
        field: i,
        sort: 'asc',
        width:400
      })
      else
      columns.push({
        label: i,
        field: i,
        sort: 'asc',
        width:'800'
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
            <h2 className= "monetaryH2">Monetary Policy Measures undertaken by RBI</h2>
            <div className = "dataTable"><DatatablePage data= {tabledata} /></div>
        </div>
        )

    }
else
return(<h1>loading</h1>)

}