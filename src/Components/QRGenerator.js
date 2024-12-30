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
            <nav className='fixed md:text-5xl text-xl font-semibold w-[100%] bg-slate-700 text-white py-5 shadow-xl' style={{ boxShadow: "2px 4px 20px grey" }}>
                <h1 className='text-center'>QR Code Generator</h1>
            </nav>
            <div className='flex h-lvh justify-center place-items-center px-2'>
                <div className='h-fit w-fit md:px-12 md:py-12 px-4 py-6 bg-slate-300 rounded-2xl'>
                <div className='flex flex-col md:gap-10 gap-5 justify-center place-items-center md:px-10 md:py-10 px-4 py-6 rounded-2xl shadow-xl bg-white' style={{ boxShadow: "2px 4px 20px grey" }}>
                    <div className='h-fit rounded-lg overflow-hidden shadow-xl flex flex-row place-items-center' style={{ border: "1px solid dodgerblue" }} >
                        <input type="text" name='input' onChange={(e) => setInput(e.target.value)} className='px-3 max-w-[200px] md:max-w-fit text-lg md:text-xl h-[100%] bg-white focus:outline-none' placeholder='Enter Some Text' />
                        <button onClick={buttonClick} className='bg-[dodgerblue] text-white font-semibold md:text-xl md:px-4 md:py-2 px-2 py-1 hover:bg-[#55a5f4] active:bg-[dodgerblue]'>Generate</button>
                    </div>
                    <QRCode value={qrValue} className='md:size-[300px] size-[230px]' ></QRCode>
                </div>
                </div>
            </div>

        </div>
    )
}

export default QRGenerator
