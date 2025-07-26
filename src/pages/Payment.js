import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Payment.css'; // Assuming you have a CSS file for styling

function Payment() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert("Payment confirmed! You are now enrolled.");
    navigate('/home');
  };

  return (
    <div className="payment-page">
      <h2>Course Payment</h2>
      <p>Scan the QR code below to pay <strong>₹2999</strong></p>

      <div className="qr-section">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=your-upi-id@bank&pn=Krishna+EdgeTech&am=2999"
          alt="QR Code"
        />
        <p className="upi-id">UPI ID: your-upi-id@bank</p>
      </div>

      <button className="confirm-btn" onClick={handleConfirm}>Payment Done</button>
    </div>
  );
}

export default Payment;
