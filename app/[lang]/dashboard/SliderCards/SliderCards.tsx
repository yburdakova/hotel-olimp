'use client'
import React, { useState, useRef, FormEvent, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderCards.module.css';
import { FaUpload } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { FileData } from '@/constants/interfaces';

function SliderCards() {
  
  const ref = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileData[]>([]);
  const [deleteCover, setDeleteCover] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
    try {
        const response = await fetch("/api/uploadMainslider");
        if (response.ok) {
            const data = await response.json();
            setFiles(data.files);
        } else {
            throw new Error("Request failed with status: " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = ref.current!;
    const formData = new FormData();
    const files = Array.from(input.files ?? []);
    for (const file of files) {
        formData.append(file.name, file);
    }
    setIsLoading(true);

    try {
        await fetch("/api/uploadMainslider", {
            method: "POST",
            body: formData
        });

        setIsLoading(false);
        setPreviewUrl(null);

        const response = await fetch("/api/uploadMainslider");
        if (response.ok) {
            const data = await response.json();
            setFiles(data.files);
        } else {
            throw new Error("Request failed with status: " + response.status);
        }
        input.value = "";

    } catch (error) {
        console.error(error);
    }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
};

const handleMouseEnter = (index: number) => {
  setHoveredIndex(index);
  console.log(index)
};
const handleMouseLeave = () => {
  setHoveredIndex(null);
};

const handleDelete = async (filename: string) => {
  try {
      await fetch(`/api/uploadsMainslider/${filename}`, {
          method: 'DELETE'
      });

      const response = await fetch('/api/uploadMainslider');
      if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
      } else {
          throw new Error("Request failed with status: " + response.status);
      }
  } catch (error) {
      console.error(error);
  }
};


useEffect(() => {
  fetchData();
}, [fetchData]);

useEffect(() => {
  fetchData();
}, [files]);
    
  return (
    <div className="component" id="mainslider">
    <div className="component_container">
        <div className="mt-2 md:mt-10 title_container">
            <div className="flex items-center justify-center component_title">
                <div className="mr-4 text-center">Main slider</div>
                <div className='dot'></div>
                <div className='line'></div>
            </div>
        </div>
        <div className={styles.sliderlist}>
          {files.map((img, index) => (
            <div
              key={img.filename}
              className={styles.img_container}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={`/api/uploadsMainslider/${img.filename}`}
                alt={img.filename}
                width={200}
                height={180}
                className={styles.img}
              />
              {hoveredIndex === index && (
                <div className={styles.overlay}>
                  <AiFillDelete className={styles.delicon} onClick={() => handleDelete(img.filename)}/>
                </div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.new_img}>
            <input type="file" name="files" ref={ref} multiple className={styles.input} onChange={handleChange} />
            <div className={styles.preview}>
              {previewUrl && <Image src={previewUrl} alt="Preview"  width={200} height={180} className='my-3'/>}
            </div>
            {isLoading ? "Uploading..." : ""}
          </div>
            <button
                type="submit"
                className="px-2 py-1 rounded-md bg-[#D5EDFF] text-[#2D70B2] my-3 w-[200px] justify-center flex"
                disabled={isLoading}
            >
                <FaUpload className={styles.icon}/>
            </button>
      </form>
      </div>
    </div>
  )
}

export default SliderCards