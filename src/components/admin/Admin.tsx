import React, { useState, useEffect } from 'react'
import './admin.css'
import { CustomAgGrid } from '../../Shared/AgGridReact';
import BtnCellRenderer from './BtnCellRenderer';
import { RowNode } from 'ag-grid-community';

export interface AProps {
    clicked: Function;
    value: number;
}

export default function Admin(props: AProps) {
    const [data, setData] = useState([]);
    const [approvedItems, setApprovedItems] = useState([] as any);
    let gridApi: any = null;

    useEffect(() => {
        const newItems = JSON.parse(localStorage.getItem("newItems") || '{}');
        if (newItems) {
            return setData(newItems)
        }
        return alert("New products are not added yet!!");
    }, []);

    const gridOptions = {
        onGridReady: (params: any) => {
            gridApi = params.api
            console.log(gridApi, "&&&&&&&&&&&&&")
        },

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
                headerName: "Actions",
                field: "id",
                cellRenderer: 'btnCellRenderer',
                cellRendererParams: {
                    clicked: function (field: RowNode) {
                        const value = field;
                        alert("Do you really want to approve item number: " + value);
                    }
                }
            },
        ],

        frameworkComponents: {
            btnCellRenderer: BtnCellRenderer
        },

        defaultColDef: {
            sortable: true,
            editable: true,
            filter: true,
            flex: 1
        },

        onCellClicked: (event: any) => console.log("current Rowindex is...", event.rowIndex),
        rowSelection: 'single',
        onSelectionChanged: approved,
    };

    function approved() {
        const selRows = gridApi.getSelectedRows();
        console.log(selRows[0], "selected row data...");
        approvedItems.push(selRows[0]);
        setApprovedItems(approvedItems)
        localStorage.setItem("approvedItems", JSON.stringify(approvedItems))
        gridApi.applyTransaction({ remove: selRows });
    }

    return (
        <div id="admin">
            <h1>Admin Dashboard</h1>
            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
                <CustomAgGrid
                    rowData={data}
                    gridOptions={gridOptions} />
            </div>
        </div>
    );
};

