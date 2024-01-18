import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner, Table, Pagination } from 'react-bootstrap';
import Layout from '../component/Layout';
import Navbar from '../component/Navbar';
import '../static/page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const HarvesterList = () => {
    const [show, setShow] = useState(false);
    const [record, setRecord] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [value, setValue] = useState('');
    const [tablefilter, setTableFilter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Set the number of items per page

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue)) {
            setRecord(inputValue);
            setErr('');
        } else {
            setRecord('');
            setErr('Please enter only numeric values for Farmer ID.');
        }
    };


    const filterData = (e) => {
        if (e.target != "") {
            setValue(e.target.value);
            const filterTable = data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setData([...data])
        }

    }

    useEffect(() => {
        // Open the modal when the component mounts
        setShow(true);
    }, []);

    const handleClose = () => setShow(false);

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/holist?P_login_Cd=${record}`, {
                method: 'POST',
                body: JSON.stringify({ P_login_Cd: record, }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setData(responseData.HoList);// Update state with the FList data
            handleClose();
        } catch (error) {
            setErr(error.message || 'Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate the total number of pages
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = value.length > 0 ? tablefilter.slice(indexOfFirstItem, indexOfLastItem) : data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Farmer Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="searchForm">
                            <Form.Label>Search:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Farmer ID"
                                // onChange={(e) => setRecord(e.target.value)}
                                value={record}
                                onChange={handleChange}
                            />
                            {err && <p className="error-message" style={{color:'red'}}>{err}</p>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ color: 'black' }} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ color: 'black' }} variant="primary" onClick={handleClick}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Display the fetched data in a data grid */}
            <Layout>
                <div className="row">
                    <div className="col-md-6">
                        <div className='list'>
                            <h1>Harvesting Order List</h1>
                        </div>
                    </div>
                    <div className="col-md-2  ml-auto">
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Farmer.."
                                value={value} onChange={filterData}
                            />
                        </div>
                    </div>
                </div>
                {isLoading && <Spinner animation="border" role="status" />}
                {err && <p className="error-message">{err}</p>}
                {!isLoading && !err && (
                    <Table striped hover className='text-center-justify'>
                        <thead >
                            <tr>
                                <th scope="col">T CODE</th>
                                <th scope="col">ORDER NO</th>
                                <th scope="col">LOCK_FLAG</th>
                                <th scope="col">VEHICAL NO</th>
                                <th scope="col">H CODE</th>
                                <th scope="col">FARMER ID</th>
                                <th scope="col">FARMER NAME</th>
                                <th scope="col">PLOT NO</th>
                                <th scope="col">TONS RECIEVED</th>
                                <th scope="col">EXP TONS</th>
                                <th scope="col">EXT TONS</th>
                                <th scope="col">VILLAGE NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.length > 0 ? currentItems.map((user) => {   //For Table Search data with filter
                                return (
                                    <tr >
                                        <td id="td">{user.T_CODE}</td>
                                        <td>{user.ORDER_NO}</td>
                                        <td>{user.LOCK_FLAG}</td>
                                        <td>{user.VEHICLE_NO}</td>
                                        <td>{user.H_CODE}</td>
                                        <td>{user.FARMER_ID}</td>
                                        <td>{user.FARMER_NAME}</td>
                                        <td>{user.PLOT_NO}</td>
                                        <td>{user.TONS_RECEIVED}</td>
                                        <td>{user.EXP_TONS}</td>
                                        <td>{user.EXT_TONS}</td>
                                        <td>{user.VILLAGE_NAME}</td>
                                    </tr>
                                )
                            })
                                :
                                currentItems.map((user) => {
                                    return (
                                        <tr >
                                            <td id="td">{user.T_CODE}</td>
                                            <td>{user.ORDER_NO}</td>
                                            <td>{user.LOCK_FLAG}</td>
                                            <td>{user.VEHICLE_NO}</td>
                                            <td>{user.H_CODE}</td>
                                            <td>{user.FARMER_ID}</td>
                                            <td>{user.FARMER_NAME}</td>
                                            <td>{user.PLOT_NO}</td>
                                            <td>{user.TONS_RECEIVED}</td>
                                            <td>{user.EXP_TONS}</td>
                                            <td>{user.EXT_TONS}</td>
                                            <td>{user.VILLAGE_NAME}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                )}
                {/* Pagination styles */}
                <Pagination>
                    <Pagination.First onClick={() => paginate(1)} />
                    {currentPage > 2 && <Pagination.Ellipsis />}
                    {[...Array(Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage)).keys()].map((number) => {
                        const pageNumber = number + 1;
                        if (
                            (currentPage <= 3 && pageNumber <= 5) ||
                            (currentPage > 3 && currentPage < Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage) - 2 && Math.abs(currentPage - pageNumber) <= 2) ||
                            (currentPage >= Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage) - 2 && pageNumber > Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage) - 5)
                        ) {
                            return (
                                <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => paginate(pageNumber)}>
                                    {pageNumber}
                                </Pagination.Item>
                            );
                        }
                        return null;
                    })}
                    {currentPage < Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage) - 2 && <Pagination.Ellipsis />}
                    <Pagination.Last onClick={() => paginate(Math.ceil((value.length > 0 ? tablefilter.length : data.length) / itemsPerPage))} />
                </Pagination>

            </Layout>
        </>
    );
};

export default HarvesterList;
