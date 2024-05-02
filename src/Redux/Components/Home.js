import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { fetchPost } from '../Reducer/postSlice';

const Home = () => {
    useSelector((state) => {
        // console.log(state) 
    }
    )
    const { loading, postValue, error } = useSelector((state) => state.posts)
    console.log("UseSelector in post: ", loading, postValue, error);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])

    return (
        <Container>
            <h2>CRUD App With JSON Server</h2>
            {loading && <h3>...loading</h3>}
            {error && <h3>{error}</h3>}
            <Link className='btn btn-success my-3' to="/create">Create</Link>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {postValue.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.fname}</td>
                            <td>{post.lname}</td>
                            <td>{post.address}</td>
                            <td>{post.pincode}</td>
                            <td>
                                <Link className='btn btn-sm btn-primary' to="/edit">Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    )
}

export default Home