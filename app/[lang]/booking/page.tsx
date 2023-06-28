'use client'
import React from 'react';
import {Helmet} from 'react-helmet'
import Script from 'next/script';

const BookingPage = () => {
    return (
        <div>
        <Helmet>
            <Script id="book-widget-script" src="https://pms.frontdesk24.ru/onlineWidget/bookWidget.js" />
            </Helmet>
            <Script
                id="book-widget-2"
                dangerouslySetInnerHTML={{
                    __html: 'FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);',
                }}
                />
            <div id="book-widget" />
            <div>BOOKING PAGE</div>
        </div>
    );
};

export default BookingPage;