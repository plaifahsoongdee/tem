import React from 'react';
import { Card } from 'react-bootstrap';
import { FaSmile } from 'react-icons/fa'; // ไอคอนน่ารักจาก react-icons

function OverviewCard({ title, value, percentage }) {
    return (
        <Card className="shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#FFF0F5' }}>
            <Card.Body className="text-center">
                <FaSmile style={{ color: '#FF69B4', fontSize: '24px' }} /> {/* ไอคอนน่ารัก */}
                <Card.Title style={{ color: '#FF69B4', fontSize: '18px', fontWeight: 'bold' }}>{title}</Card.Title>
                <Card.Text className="display-4" style={{ color: '#FF1493' }}>{value}</Card.Text>
                {percentage && (
                    <Card.Text className={percentage > 0 ? 'text-success' : 'text-danger'}>
                        {percentage > 0 ? '↑' : '↓'} {Math.abs(percentage)}%
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default OverviewCard;
