import React, { useState,useEffect } from 'react'
import './admin.css'
import { CustomAgGrid } from '../../Shared/AgGridReact';


export default function Admin() {
    const[data,setData]=useState([]);


    useEffect(() => {
        const newProducts = JSON.parse(localStorage.getItem("newproducts") || '{}');
        if (newProducts) {
            return setData(newProducts)
        }
        return alert("New products are not added yet!!");
    }, []);


    const approve = (product:any) => {
        const approvedItem = data.find((item: any) => item.id === product.id);
        console.log(approvedItem);
        //approvedItem.approved = true;
    }

    const reject = (product: any) => {
        const approvedItem = data.find((item: any) => item.index === product.index);
        console.log(approvedItem);
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
            headerName: "Actions",
            field: "id",
            cellRendererFramework: () =>
                <div>
                    <button className="button btn-primary" onClick={approve}>
                        Approve
                                </button>
                    <button className="button btn-primary" onClick={reject}>
                        Reject
                                </button>
                </div>
        }
    ];
    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
        flex: 1
    }
    return (
        <div id="admin">
            <h1>Admin Dashboard</h1>
            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
                <CustomAgGrid rowData={data} columnDefs={columns} defaultColDef={defaultColDef} />
            </div>
        </div>
    );
};

