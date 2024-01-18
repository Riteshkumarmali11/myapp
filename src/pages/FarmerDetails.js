import React, { useState, useEffect } from "react";
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader,CAccordionCollapse } from '@coreui/react';
import '../static/page.css';
import Navbar from "../component/Navbar";
import Layout from "../component/Layout";

const FarmerDetails = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [accordionActiveKey, setAccordionActiveKey] = useState(1);


    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/farmerListData", {
                method: 'POST',
                body: JSON.stringify({ "p_farmer_id": "348370" }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', // Specify the content type
                },
            });

            const fetchdata = await response.json();
            setData(fetchdata.FList);
            // if(fetchdata.FList){
            //     this.farmerid = FList[0].FARMER_ID;
            //     this.farmerName = FList[0].FARMER_NAME;
            //     this.mobileNO = FList[0].MOBILE_NO;
            //     this.place = FList[0].PLACE;
            //     this.aadhar = FList[0].AADHAAR_CARD_NO;
            // }
            console.log(fetchdata);
            console.log(response);
        } catch (err) {
            setErr(err.message);
        }
    };

    useEffect(() => {
        fetchUsers("http://localhost:5000/farmerListData");
    }, [])


    return (
        <>
            <Navbar />
            <Layout>
                <CAccordion className="mt-3" flush activeKey={accordionActiveKey}>
                    <CAccordionItem itemKey={1}>
                        <CAccordionHeader onClick={() => setAccordionActiveKey(1)}><strong>Farmer</strong></CAccordionHeader>
                        <CAccordionBody>
                            <div className="row">
                                <div className="column">
                                    <img src="farmerlogo.png" style={{ height: '8rem', width: '8rem', top: '1rem' }}></img>
                                </div>
                                <div className="column">
                                    {data.map((user) => {
                                        return (
                                            <div><strong>Farmer ID:</strong>{user.FARMER_ID} <br></br>
                                                <strong>Farmer Name:</strong>{user.FARMER_NAME} <br></br>
                                                <strong>Mobile No.:</strong> {user.MOBILE_NO}<br></br>
                                                <strong>Place:</strong> {user.PLACE}
                                                <p><strong>Aadhar Card No:</strong>{user.AADHAR_CARD_NO} </p></div>
                                        )
                                    })}


                                </div>
                            </div>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={2}>
                        <CAccordionHeader><strong>Khate</strong> <a href="/AddKhate" style={{ position: 'absolute', right: '4rem' }}>Add Khate</a></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Khate Details</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={3}>
                        <CAccordionHeader><strong>Plot</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={4}>
                        <CAccordionHeader><strong>Plantation</strong><a href="/AddKhate" style={{ position: 'absolute', right: '4rem' }}>Add Plantation</a></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Add Plantation</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={5}>
                        <CAccordionHeader><strong>Activity</strong> </CAccordionHeader>
                        <CAccordionBody>
                            <strong>Khate Details</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={6}>
                        <CAccordionHeader><strong>Indent Data</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={7}>
                        <CAccordionHeader><strong>Disposal</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Disposal</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={8}>
                        <CAccordionHeader><strong>Farmer Payment Position </strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Khate Details</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={9}>
                        <CAccordionHeader><strong>Farmer Account Position</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={10}>
                        <CAccordionHeader><strong>Farmer Credit Limit</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={11}>
                        <CAccordionHeader><strong>Sales Order</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={12}>
                        <CAccordionHeader><strong>Soil Test Order</strong></CAccordionHeader>
                        <CAccordionBody>
                            <strong>Plot Data</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </Layout>
        </>
    );
};

export default FarmerDetails;