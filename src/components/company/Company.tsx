import React, { useState } from 'react'
import products from '../../products';
import './company.css'
import  {CustomAgGrid}  from '../../Shared/AgGridReact';

export interface IProduct {
    name: string;
    price: string;
    products: {}[];
    newData: {}[];
}

export default function Company(props: IProduct) {

    localStorage.setItem("oldData", JSON.stringify(products));
    const oldProducts=JSON.parse(localStorage.getItem("oldData") || '{}');
    
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [newProducts, setNewProducts] = useState([] as any);
    const [rowData, setRowData] = useState([...oldProducts]);

    

    const addProduct = (): void => {
        newProducts.push({
            name: name,
            price: price
        });
        setNewProducts([...newProducts])
        localStorage.setItem("newproducts", JSON.stringify(newProducts))
        setRowData([...oldProducts,...newProducts]);
        console.log(rowData,"UPDATED OLDPRODS");
        localStorage.setItem("rowdata", JSON.stringify(rowData));
        setName("");
        setPrice("");
    }

const columns = [
        {
            headerName: "Name",
            field: "name"
        },
        {
            headerName: "Price",
            field: "price"
        },
        {
            headerName: "Status",
            field: "status"
        },
    ];

    const defaultColDef = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex:1
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

                <button type="button" onClick={addProduct} id="addbtn">Add Product</button>
            </div>

            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
            <CustomAgGrid rowData={rowData} columnDefs={columns} defaultColDef={defaultColDef}/>
            </div>

        </div>
    )
};
