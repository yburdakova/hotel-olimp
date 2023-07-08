'use client'

import axios from "axios";
import React, { FormEvent, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './AddHotelCard.module.css'

const AddHotelCard = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
      img: '',
      rus_description: '',
      eng_description: '',
      geo_description: ''
    });
  
    const router = useRouter();
  
    const handleChange = (e:any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
  
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const { img, rus_description, eng_description, geo_description } = formData;
    
        const response = await fetch('/api/hotelcards/addHotelCard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ img, rus_description, eng_description, geo_description })
        });
        if (response.ok) {
          setIsSuccess(true); 
          setFormData({
            img: '',
            rus_description: '',
            eng_description: '',
            geo_description: ''
          })
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className={styles.component_container}>
        
        <form onSubmit={handleSubmit}>
          <label>
            Image:
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label>
            Russian Description:
            <textarea
              name="rus_description"
              value={formData.rus_description}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label>
            English Description:
            <textarea
              name="eng_description"
              value={formData.eng_description}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label>
            Georgian Description:
            <textarea
              name="geo_description"
              value={formData.geo_description}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
  
          
          <button type="submit">Add</button>
        </form>
        {isSuccess && <p>Hotel card added successfully!</p>}
      </div>
    );
  };
  
  export default AddHotelCard;