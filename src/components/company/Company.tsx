import React, { useState, useEffect } from 'react'
import './company.css'
import { CustomAgGrid } from '../../Shared/AgGridReact';

export interface IProduct {
    name: string;
    price: string;
    id: string;
    approved: boolean;
    status: "approved" | "pending" | "rejected";
}

export default function Company() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('newItems') ||
            '{}') || [] as IProduct[]);
    const [itemStatus, setItemStatus] = useState(null)

    // useEffect(() => {
    //     const localData = JSON.parse(localStorage.getItem('newItems') || "{}");
    //     if (localData) {
    //        setItems(localData)
    //     }
    // }, []);

    const addItems = () => {
        items.push({ name, price, id, approved: false, status: 'pending' });
        setItems([...items]);
        console.log(items, "items are");
        localStorage.setItem("newItems", JSON.stringify(items));
        setName("");
        setPrice("");
        setId("");
    };

    const gridOptions = {
        columnDefs: [
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
        ],
        defaultColDef: {
            sortable: true,
            editable: true,
            filter: true,
            floatingFilter: true,
            flex: 1
        }
    };


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
                    onChange={(e) => setId(e.target.value)}
                >
                </input>

                <button type="button" onClick={addItems} id="addbtn">Add Product</button>
            </div>

            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
                <CustomAgGrid
                    rowData={items}
                    gridOptions={gridOptions} />
            </div>

        </div>
    )
};
