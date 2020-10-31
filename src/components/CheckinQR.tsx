import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function CheckinQR() {
  const [qrResult, setQrResult] = useState("");
  
  const handleScan = (data: string | null) => {
    if (data) {
      setQrResult(data);
    }
  }
  
  const handleScanError = (err: any) => {
    console.error(err);
  }

  return (
    <div>
      <h1>Scan QR for check-in</h1>
      <QrReader 
        delay={300}
        onError={handleScanError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{qrResult}</p>
    </div>
  );
}

export default CheckinQR;