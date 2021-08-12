import React from 'react'
import { AgGridReact,AgGridReactProps} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default function CustomAgGrid(props:AgGridReactProps) {

return (
        <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
            <AgGridReact
                rowData={props.rowData}
                gridOptions={props.gridOptions}>
            </AgGridReact>
        </div>
    );
};


