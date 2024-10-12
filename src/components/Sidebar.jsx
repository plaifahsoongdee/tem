import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaHome, FaUserFriends, FaCogs, FaSmile } from 'react-icons/fa';

function Sidebar() {
    return (
        <div style={{ backgroundColor: '#FFB6C1', height: '100vh', padding: '20px', color: 'white' }}>
            <h2 style={{ fontFamily: 'Comic Sans MS', fontSize: '24px', color: '#FF69B4' }}>DeviasKit</h2>
            <ListGroup variant="flush" style={{ fontSize: '16px' }}>
                <ListGroup.Item action href="#overview" style={{ backgroundColor: '#FFB6C1', color: '#FF69B4' }}>
                    <FaHome /> Overview
                </ListGroup.Item>
                <ListGroup.Item action href="#customers" style={{ backgroundColor: '#FFB6C1', color: '#FF69B4' }}>
                    <FaUserFriends /> Customers
                </ListGroup.Item>
                <ListGroup.Item action href="#settings" style={{ backgroundColor: '#FFB6C1', color: '#FF69B4' }}>
                    <FaCogs /> Settings
                </ListGroup.Item>
                <ListGroup.Item action href="#account" style={{ backgroundColor: '#FFB6C1', color: '#FF69B4' }}>
                    <FaSmile /> Account
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
  