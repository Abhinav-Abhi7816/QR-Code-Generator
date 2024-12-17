import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QRGenerator() {
    const [input, setInput] = useState('');
    const [qrValue, setQrvalue] = useState('');

    function buttonClick() {
        if (input.trim() === '') {
            alert("Text cannot be empty!");
            return;
        }

        setQrvalue(input);
    }
    return (
        <div>
            <nav className='fixed text-5xl font-semibold w-[100%] bg-slate-700 text-white py-5 shadow-xl' style={{ boxShadow: "2px 4px 20px grey" }}>
                <h1 className='text-center'>QR Code Generator</h1>
            </nav>
            <div className='flex h-lvh justify-center place-items-center'>
                <div className='h-fit w-fit p-12 bg-slate-300 rounded-2xl'>
                <div className='flex flex-col gap-10 justify-center place-items-center p-10 rounded-2xl shadow-xl bg-white' style={{ boxShadow: "2px 4px 20px grey" }}>
                    <div className='h-fit rounded-lg overflow-hidden shadow-xl' style={{ border: "1px solid dodgerblue" }} >
                        <input type="text" name='input' onChange={(e) => setInput(e.target.value)} className='px-3 text-xl h-[100%] bg-white focus:outline-none' placeholder='Enter Some Text' />
                        <button onClick={buttonClick} className='bg-[dodgerblue] text-white font-semibold text-xl px-4 py-2 hover:bg-[#55a5f4] active:bg-[dodgerblue]'>Generate</button>
                    </div>
                    <QRCode value={qrValue} size={300}></QRCode>
                </div>
                </div>
            </div>

        </div>
    )
}

export default QRGenerator
