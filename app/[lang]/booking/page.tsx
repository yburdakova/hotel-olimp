import Script from 'next/script'
import React from 'react'


function BookingPage() {
    return (
        <div>
            <div className="">BOOKING PAGE</div>

        <Script id="booking-widget-code" src="https://pms.frontdesk24.ru/onlineWidget/bookWidget.js"></Script>
            <div id="book-widget"></div>
        <Script id="booking-widget">
            FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);
        </Script>
        </div>  
    )
}

export default BookingPage