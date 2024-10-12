import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // เพิ่มฟังก์ชันสมัครสมาชิกที่นี่ (เช่น ส่งข้อมูลไปยัง API)

        // นำผู้ใช้ไปยังหน้า dashboard หลังการสมัครสำเร็จ
        navigate('/dashboard');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center' }}>Register</h2>
                
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Username:</label>
                        <input type="text" placeholder="Enter your username" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
                    </div>
                    
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                        Register
                    </button>
                </form>
                
                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <span>Already have an account? </span>
                    <Link to="/login" style={{ color: '#4CAF50', textDecoration: 'none' }}>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
