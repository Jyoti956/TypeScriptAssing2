import React, { useState, useEffect } from 'react'
import './company.css'
import { Product_Status } from '../../Enums/AllEnums.enum'

export interface IProduct {
    name: string;
    price: string;
    id: string;
    status: string;
}

export default function Company() {

    const [product, setProduct] = useState({} as IProduct);
    const [items, setItems] = useState([] as IProduct[]);
    const [color,setColor]=useState("blue")

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('newItems') || "{}");
        if (localData) {
            setItems(localData);
        }
    }, []);


    const addItems = () => {
        items.push({ ...product, status: Product_Status.PENDING });
        setItems([...items]);
        localStorage.setItem("newItems", JSON.stringify(items));
        updateProduct({ name: '', price: '', id: '' });
    };

    const updateProduct = (_product: Partial<IProduct>): void => {
        setProduct({ ...product, ..._product });
    }

    const renderRow = (item: any, i: number) => {
        return (
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.id}</td>
                <td style={{color:color}}>{item.status}</td>
            </tr>
        )
    }

    return (
        <div id="company">
            <h1>Company Dashboard</h1>
            <h3>Add Products:</h3>
            <div id="company_inputs">
                Product Name:
                <input type="text"
                    value={product.name || ""}
                    onChange={(e) => updateProduct({ name: e.target.value || "" })}
                >
                </input>
                Product Price:
                <input type="text"
                    value={product.price || ""}
                    onChange={(e) => updateProduct({ price: e.target.value || "" })}
                >
                </input>
                Product Id:
                <input type="number"
                    value={product.id || ""}
                    onChange={(e) => updateProduct({ id: e.target.value || "" })}
                >
                </input>
                <button
                    type="button"
                    onClick={addItems}
                    id="addbtn">
                    Add Product
                </button>
            </div>
            <div>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: any, i) => renderRow(item, i))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
