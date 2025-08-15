import React, { useEffect, useState } from "react";
import axios from 'axios';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/alluser")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
   // const handleMakeAdmin = id => {
  //   fetch(`http://localhost:5000/users2/admin/${id}`,{
  //     method:'PUT'
  //   })
  //   .then(res => res.json())
  //   .then( data => {
  //     console.log(data);
  //     if( data.modifiedCount > 0) {
  //       toast.success('make admin successful');
  //       refetch();
  //     }
  //   })

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/deleteuser/${id}`)
      .then(() => {
        setAllUsers(allUsers.filter(user => user.UserId !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="p-6 bg-white w-full">
      <h3 className="text-3xl font-bold text-black mb-8">All Users</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-black">
          <thead className="text-black">
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, i) => (
              <tr key={user.UserId} className={(i % 2 === 0) ? 'bg-gray-100' : 'bg-gray-200'}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{user.FirstName}</td>
                <td className="border px-4 py-2">{user.Email}</td>
                 {/* <td> { user?.role !=='admin' && <button onClick={() => "handleMakeAdmin"(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td> */}
                <td className="border px-4 py-2">
                  <button onClick={() => handleDelete(user.UserId)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
