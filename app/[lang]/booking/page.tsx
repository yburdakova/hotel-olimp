'use client'
import Script from 'next/script'
import React from 'react';
import dynamic from 'next/dynamic';


function BookingPage() {

    return (
        <div>
            <div className="">BOOKING PAGE</div>
            <script src="https://pms.frontdesk24.ru/onlineWidget/bookWidget.js"></script>
                <div id="book-widget"></div>
                <script>
                    FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);
            </script>
        </div>
    )
}       

export default BookingPage
