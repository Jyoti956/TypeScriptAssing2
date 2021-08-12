import React, { useState, useEffect } from 'react'
import './admin.css'
import { Product_Status } from '../../Enums/AllEnums.enum'

export default function Admin() {
    const [newProducts, setNewProducts] = useState(JSON.parse(localStorage.getItem("newItems") || '{}') || []);
    const [data, setData] = useState([] as any);


    useEffect(() => {
        const pendingProducts = newProducts.filter((items: any) => items.status === "PENDING");
        if (pendingProducts) {
            setData(pendingProducts);
        }
    }, [])

    const approvel = (item: HTMLButtonElement): void => {
        const approved = data.find((product: any) => product.id === item.id);
        approved.status = Product_Status.APPROVED;
        console.log(newProducts, "approvel button");
        localStorage.setItem("newItems", JSON.stringify(newProducts));
        setData(data.filter((rows: any) => rows !== approved));
    }

    const rejection = (item: HTMLButtonElement): void => {
        const rejected = data.find((product: any) => product.id === item.id);
        rejected.status = Product_Status.REJECTED;
        console.log(newProducts, "rejection button");
        localStorage.setItem("newItems", JSON.stringify(newProducts));
        setData(data.filter((rows: any) => rows !== rejected));
    }

    const renderRow = (rowItem: any, index: number) => {
        return (
            <tr key={index}>
                <td>{rowItem.name}</td>
                <td>{rowItem.price}</td>
                <td>
                    <button
                        onClick={() => approvel(rowItem)}
                        className="btn btn-primary">
                        Approve
                    </button>
                    <button
                        onClick={() => rejection(rowItem)}
                        className="btn btn-primary">
                        Reject
                </button>
                </td>
            </tr>
        )
    }

    return (
        <div id="admin">
            <h1>Admin Dashboard</h1>
            <div>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: number) => renderRow(item, index))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

