import React, { useState, useEffect} from 'react'
import products from '../../products';
import { AgGridReact } from 'ag-grid-react';
import './company.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface IProduct {
    name?: string;
    price?: string;
    newData?:{}[];
}

export default function Company(prop:IProduct) {
    
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [newData,setNewData]=useState([] as any)
    const [rowData,setRowData]=useState([] as any)

    
    const addProduct=():void=>{
    newData.push({
                    name:name,
                    price:price
                })
    setNewData([...newData])
    console.log("newwwwwwdatttttttttt",newData);
    const merged = products.concat(newData);
    console.log(merged);
    setRowData([...merged]);
        
    }
    const columns = [
        {
            headerName: "Name", field: "name"
        },

        {
            headerName: "Price", field: "price"
        },
        {
            headerName: "Status", field: "status"
        }
    ];
    const defaultColDef = {
        sortable: true, editable: true, filter: true, flex: 1
    }

    return (
        <div id="company">
        <h1>Company Dashboard</h1>

        <h3>Add Products:</h3>

        <div id="company_inputs">
            Product Name:
            <input type="text" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
            >
            </input>

            Product Price:
            <input type="text" 
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)}
            >
            </input>
            <button type="button" onClick={addProduct}>Add Product</button>
        </div>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}>
                </AgGridReact>
            </div>
        </div>
    );
};
