import React from 'react';
import Head from 'next/head';

function Booking() {
    return (
        <div className='border-2 h-[100px]'>
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
    );
}

export default Booking