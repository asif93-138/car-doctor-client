import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const CheckOuts = () => {
    const { user } = useContext(AuthContext);
    const [infos, setInfos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/checkouts?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-AC')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {setInfos(data)}
                else{navigate('/')}
            })
    }, [])
    function deleting(id) {
        if (confirm('wanna delete?')) {
            console.log(id, 'deleted!');

            fetch(`http://localhost:3000/checkouts/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {alert('deleted!')}
            })
            const arr = [];
            infos.forEach(x => { if (x._id != id) {arr.push(x)}});
            setInfos(arr);
        }
    }
    function updating(id) {
        console.log(id);

        fetch(`http://localhost:3000/checkouts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                alert('updated!');
                const updatedInfo = infos.find(x => x._id == id);
                updatedInfo.status = 'confirm';
                const arr = infos.filter(x => x._id != id);
                setInfos([...arr, updatedInfo])
            }
        })
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center mb-5'><div className='img-managing rounded-4'><h1 className='text-white'><b>Manage All Orders</b></h1></div></div>
            <div>
                {infos.map(x => (
                    <div className='d-flex align-items-center justify-content-between my-4' key={x._id}>
                        <img src={x.service.img} className='img-d-user rounded-2' />
                        <p className='m-0'><b>{x.service.title}</b></p>
                        <p className='m-0'><b>{user.email}</b></p>
                        <p className='m-0'><b>$ {x.service.price}</b></p>
                        {x?.status ? <b>Updated</b> : <button onClick={() => {updating(x._id)}} type='button' className='btn btn-outline-warning'>Update</button>}
                        <button onClick={() => {deleting(x._id)}} type='button' className='btn btn-outline-danger'>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckOuts;