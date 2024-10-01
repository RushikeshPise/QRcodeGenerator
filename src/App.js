import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const App = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const handleGenerate = () => {
    if (url.trim()) {
      setQrCode(url);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
  };

  const handleClear = () => {
    setUrl('');
    setQrCode(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">QR Code Generator</h1>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
      />

      <div className="space-x-4">
        <button
          onClick={handleGenerate}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Generate QR Code
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
          Clear
        </button>
      </div>

      {qrCode && (
        <div className="mt-8 flex flex-col items-center">
          <QRCodeCanvas value={qrCode} className="shadow-lg" />
          <button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};
export default App;

