import React, { useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import products from '../../products';
import './company.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface IProduct {
    name: string;
    price: string;
    products: {}[];
    newData: {}[];
}

export default function Company(props: IProduct) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [newData, setNewData] = useState([] as any)
    const [rowData, setRowData] = useState([...products])


    const addProduct = (): void => {
        newData.push({
            name: name,
            price: price
        })

        setNewData([...newData])
        localStorage.setItem("newdata",JSON.stringify(newData))
        setRowData([...products, ...newData]);
        
        console.log(rowData, "rowwdataaaaaaaa");

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
                    onChange={(e) => setName(e.target.value)}
                >
                </input>

                Product Price:
            <input type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
