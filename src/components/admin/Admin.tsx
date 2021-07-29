import React from 'react'
import './admin.css'
import  {CustomAgGrid}  from '../../Shared/AgGridReact';

export default function Admin() {
    const newProducts=JSON.parse(localStorage.getItem("newdata")||'{}');
    console.log(newProducts);
    
    const approve=()=>{

    }

    const reject=()=>{
        
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
            cellRendererFramework:() => 
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
        sortable: true, editable: true, filter: true, flex: 1
    }
    return (
        <div id="admin">
            <h1>Admin Dashboard</h1>
            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
            <CustomAgGrid rowData={newProducts} columnDefs={columns} defaultColDef={defaultColDef}/>
            </div>
        </div>
    );
};

