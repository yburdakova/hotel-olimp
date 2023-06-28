import React from 'react';
import Script from 'next/script';


function BookingPage() {
    return (
        <div>
        <div>Страница бронирования</div>
        <Script id="shelter-script" src="https://pms.frontdesk24.ru/onlineWidget/bookWidget.js"></Script>
        <div id="book-widget"></div>
        <Script 
            id="shelter-widget" 
            src={`FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);`}>
        </Script>
        </div>
    );
}

export default BookingPage;