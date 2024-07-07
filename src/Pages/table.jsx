import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
const table = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5500/read').then((res)=>{
            setData(res.data.result);
            console.log(res.data.result); 
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Password
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((value)=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {value.id}
                        </th>
                        <td className="px-6 py-4">
                            {value.name}
                        </td>
                        <td className="px-6 py-4">
                            {value.email}
                        </td>
                        <td className="px-6 py-4">
                            {value.contact}
                        </td>
                        </tr>

                    )
                })
            }


            <tr>
                <td className="px-6 py-4">
                    <button className='rounded-md p-2 px-4 bg-red-500 hover:bg-red-700'>Delete</button>
                    <button className='rounded-md p-2 px-4 bg-blue-500 hover:bg-blue-700'>Edit</button>
                </td>
          
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default table
