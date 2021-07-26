import React,{useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import './admin.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import products from '../../products';



export default function Admin() {
    
    
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
        <div id="admin">
            <h1>Admin Dashboard</h1>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={products}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}>
                </AgGridReact>
            </div>
        </div>
    )
}

function Mybutton() {

    const onApprove=()=>{

    }

    const onReject=()=>{
        
    }

    return (
        <div>
            <button className="button btn-primary" onClick={onApprove}>
                Approve
            </button>
            <button className="button btn-primary" onClick={onReject}>
                Reject
            </button>
        </div>
    );
}