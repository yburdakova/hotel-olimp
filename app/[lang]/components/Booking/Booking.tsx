import React from 'react';
import Head from 'next/head';
import styles from './booking.module.css'

function Booking() {
    return (
        <div className='component z-10 '>
            <div className='items-center shadow-lg border-2 h-[100px] bg-white w-[1300px] rounded-3xl justify-center flex align-middle mt-[-50px]'>
            BOOKING MODULE
            <Head>
                <script
                src="https://pms.frontdesk24.ru/onlineWidget/startWidget.js"
                async
                />
            </Head>
            <div id="start-widget" />
            <script
                dangerouslySetInnerHTML={{
                __html: 'FD24StartWidget.createWidget("start-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined, "");',
                }}
            />
        </div>
        </div>
    );
}

export default Booking