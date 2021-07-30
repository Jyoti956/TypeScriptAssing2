import React, { useState,useEffect } from 'react'
import products from '../../products';
import './company.css'
import  {CustomAgGrid}  from '../../Shared/AgGridReact';

export interface IProduct {
    name: string;
    price: string;
    id:number;
    approved:boolean;
    products: {}[];
    newData: {}[];
}

export default function Company(props: IProduct) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id,setId]=useState(0)
    const [newProducts, setNewProducts] = useState([] as any);
    

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('newproducts')||"{}");
        if (localData ) {
            setNewProducts(localData);
        }
    }, []);


    const addProduct = (): void => {
        newProducts.push({
            name: name,
            price: price,
            id:id,
            isapproved:false
        });
        setNewProducts([...newProducts])
        localStorage.setItem("newproducts", JSON.stringify(newProducts))
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
            headerName: "Id",
            field: "id"
        },
        {
            headerName: "Status",
            field: "status"
        },
    ];

    const defaultColDef = {
        sortable: true, 
        editable: true, 
        filter: true, 
        floatingFilter: true, 
        flex:1
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

                Product Id:
                <input type="number"
                    value={id}
                    onChange={(e) => setId(parseInt(e.target.value))}
                >
                </input>

                <button type="button" onClick={addProduct} id="addbtn">Add Product</button>
            </div>

            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
            <CustomAgGrid rowData={newProducts} columnDefs={columns} defaultColDef={defaultColDef}/>
            </div>

        </div>
    )
};
