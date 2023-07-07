'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.css'

const Dashboard = () => {
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
          />
        </label>
        <label>
          Russian Description:
          <textarea
            name="rus_description"
            value={formData.rus_description}
            onChange={handleChange}
          />
        </label>
        <label>
          English Description:
          <textarea
            name="eng_description"
            value={formData.eng_description}
            onChange={handleChange}
          />
        </label>
        <label>
          Georgian Description:
          <textarea
            name="geo_description"
            value={formData.geo_description}
            onChange={handleChange}
          />
        </label>

        
        <button type="submit">Add</button>
      </form>
      {isSuccess && <p>Hotel card added successfully!</p>}
    </div>
  );
};

export default Dashboard;
