'use client'
import React, { useEffect } from 'react';
import Script from 'next/script';

const BookingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pms.frontdesk24.ru/onlineWidget/bookWidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.FD24BookWidget) {
      window.FD24BookWidget.createWidget("book-widget", "44B8E6C8-3825-46E8-B693-8C551F0780E9", undefined);
    }
  }, []);

  return (
    <div>
      <div>BOOKING PAGE</div>
      <div id="book-widget" />
      <Script id="book-widget-script">{`FD24BookWidget.createWidget(&quot;book-widget&quot;, &quot;44B8E6C8-3825-46E8-B693-8C551F0780E9&quot;, undefined);`}</Script>
    </div>
  );
};

export default BookingPage;