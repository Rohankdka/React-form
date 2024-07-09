import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(0);
    const [editFormVisibility, setEditFormVisibility] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/read').then((res) => {
            setData(res.data.result);
            console.log(res.data.result);
        }).catch((err) => {
            console.log(err);
        });
    }, [flag]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            axios.delete(`http://localhost:5500/delete/${id}`).then((res) => {
                setFlag(flag + 1);
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    const handleEditClick = (id) => {
        setEditId(id);
        setEditFormVisibility(true);
    };

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Username</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Password</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value) => (
                            <tr key={value.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {value.id}
                                </th>
                                <td className="px-6 py-4">{value.username}</td>
                                <td className="px-6 py-4">{value.email}</td>
                                <td className="px-6 py-4">{value.password}</td>
                                <td className="px-6 py-4">
                                    <button
                                        className="rounded-md p-2 px-4 bg-red-500 hover:bg-red-700"
                                        onClick={() => handleDelete(value.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="rounded-md p-2 px-4 bg-blue-500 hover:bg-blue-700"
                                        onClick={() => handleEditClick(value.id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editFormVisibility && (
                <div className="layout">
                    <form action={`http://localhost:5500/update/${editId}`} encType="application/x-www-form-urlencoded" method="POST">
                        <button type="button" className="close-popup-btn" onClick={() => setEditFormVisibility(false)}>
                            &times;
                        </button>
                        <input type="text" placeholder="Username" name="username" />
                        <input type="email" placeholder="Email" name="email" />
                        <input type="password" placeholder="Password" name="password" />
                        <input type="password" placeholder="Confirm Password" name="confirmpassword" />
                        <button type="submit">Edit</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Table;
