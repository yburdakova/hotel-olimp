'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import {CurrencyInfoProps, CurrencyDataItemProps } from '@/constants/interfaces';
import styles from './Currency.module.css'
import { rusflag, usaflag, geoflag, euroflag } from '@/public'

function Currency() {
    
    const [value, setValue] = useState(1);
    const [actualData, setActualData] = useState<CurrencyInfoProps[]>([]);
    const [localData, setLocalData] = useState<CurrencyDataItemProps["currencies"] | null>(null);
    const [currencyData, setCurrencyData] = useState<CurrencyDataItemProps | null>(null);

    //getting formatted Date for json request
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;

    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const response = await fetch(`https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/?date=${formattedDate}`);
                const data = await response.json();
                setCurrencyData(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
        fetchCurrencyData();
    }, []);

    useEffect(() => {
        if (currencyData) {
            setLocalData(currencyData[0].currencies);
        }
    }, [currencyData]);
    
    useEffect(() => {
        if (localData) {
            const filteredArray = localData.filter((item) => {
                return item.code === 'USD' || item.code === 'RUB' || item.code === 'EUR';
            });
            setActualData(() => filteredArray); 
        }
    }, [localData]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
    }

    return (
        <div className={styles.container}>
            <div className={styles.item} key='GEO'>
                <div className={styles.flag}>
                    <Image src={geoflag} alt='flag' className={styles.flag_img} />
                </div>
                <div className={styles.text}>
                    <div className={styles.code}>GEL</div>
                    <div className={styles.name}>Georgian lari</div>
                </div>
                <input type="text" className={styles.input} defaultValue={value} onChange={(e)=> handleChange(e)}/>
            </div>
            {
                actualData.map(item =>
                    <div className={styles.item} key={item.code}>
                        <div className={styles.flag}>
                            <Image src={item.code =="USD" ? usaflag : item.code =="EUR"  ? euroflag: rusflag} alt="flag-geo" className={styles.flag_img} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.code}>{item.code}</div>
                            <div className={styles.name}>{item.name}</div>
                        </div>
                        <input type="text" className={styles.input} value={value ? (item.rate && item.quantity ? (value / item.rate * item.quantity).toFixed(2) : ''): ''} readOnly/>
                    </div>
                )
            }
            <div className={styles.source}>National Bank of Georgia, {formattedDate} </div>
        </div>
        
    )
}

export default Currency