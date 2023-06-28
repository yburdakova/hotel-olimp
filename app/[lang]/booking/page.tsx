'use client'
import React, { useEffect } from 'react';
import Script from 'next/script';

const BookingPage = ({ Component, pageProps }:any) => {
    return (
        <>
          <Component {...pageProps} />
          <Script src="https://pms.frontdesk24.ru/onlineWidget/bookWidget.js" id="booking"></Script>
                <div id="book-widget"></div>
                <Script id="shelter">
                    {`FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);`}
                </Script>
        </>
      )

};

export default BookingPage;