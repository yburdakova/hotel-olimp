'use client'
import axios from "axios";
import React, { FormEvent, useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from './HotelCards.module.css';
import { FaUpload } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { FileMetadata, FileData } from "@/constants/interfaces";

const HotelCards = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<FileData[]>([]);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [descriptions, setDescriptions] = useState<FileMetadata>({
        ru: "",
        en: "",
        ge: "",
    });

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDescriptions((prevDescriptions) => ({
            ...prevDescriptions,
            [name]: value,
        }));
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = ref.current!;
        const formData = new FormData();
        const files = Array.from(input.files ?? []);
        for (const file of files) {
            formData.append(file.name, file);
        }
        Object.entries(descriptions).forEach(([lang, description]) => {
            formData.append(lang, description);
        });
        setIsLoading(true); 
        await axios.post("/api/upload", formData);
        setIsLoading(false); 
        setDescriptions({ ru: "", en: "", ge: "" }); 
        setPreviewUrl(null); 
        const response = await axios.get('/api/upload');
        setFiles(response.data.files); 
    };

    
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("/api/upload");
            setFiles(response.data.files);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleDelete = async (filename: string) => {
        try {
            await axios.delete(`/api/uploads/${filename}`);
            const response = await axios.get('/api/upload');
            setFiles(response.data.files);
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
        <div className="component">
            <div className="component_container">
            <div className="mt-2 md:mt-10 title_container">
                    <div className="flex items-center justify-center component_title">
                        <div className="mr-4 text-center">Hotel cards</div>
                        <div className='dot'></div>
                        <div className='line'></div>
                    </div>
                </div>
            <div className={styles.addform}>
            <div className={styles.subtitle}>Add new hotel card</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.new_img}>
                <input type="file" name="files" ref={ref} multiple className={styles.input} onChange={handleChange} />
                <div className={styles.preview}>
                    {previewUrl && <Image src={previewUrl} alt="Preview"  width={200} height={180} className={styles.preview_img}/>}
                </div>
                {isLoading ? "Uploading..." : ""}
                </div>
                <div className={styles.description}>
                <div className="ml-3 text-xs">Описание</div>
                <textarea
                    name="ru"
                    value={descriptions.ru}
                    onChange={handleChangeDescription}
                    placeholder="на русском языке ..."
                    rows={4}
                    className={styles.input}
                />
                <div className="ml-3 text-xs">Description</div>
                <textarea
                    name="en"
                    value={descriptions.en}
                    onChange={handleChangeDescription}
                    placeholder="in english ..."
                    rows={4}
                    className={styles.input}
                />
                <div className="ml-3 text-xs">აღწერა</div>
                <textarea
                    name="ge"
                    value={descriptions.ge}
                    onChange={handleChangeDescription}
                    placeholder="ქართულად..."
                    rows={4}
                    className={styles.input}
                />
                </div>
                <button
                    type="submit"
                    className="px-2 py-1 rounded-md bg-[#D5EDFF] text-[#2D70B2]"
                    disabled={isLoading}
                >
                    <FaUpload className={styles.icon}/>
                </button>
            </form>
            <div className=""></div>
        </div>
            
            <div>
            <h1 className={styles.subtitle}>Hotel Cards</h1>
            <div className={styles.list}>
                {files.map((file, index) => (
                <div key={file._id} className={styles.item_container}>
                    <div className={styles.wrapper}>
                        <div className={styles.item_number}>{index+1}.</div>
                        <div className={styles.item_image}>
                            <Image 
                                src={`/api/uploads/${file.filename}`} 
                                alt={file.filename} 
                                width={200} 
                                height={180}
                                className={styles.item_image_img}
                                />
                        </div>
                        
                        <div className={styles.description_container}>
                            <p className={styles.paragraph}>{file.metadata.ru}</p>
                            <hr />
                            <p className={styles.paragraph}>{file.metadata.en}</p>
                            <hr />
                            <p className={styles.paragraph}>{file.metadata.ge}</p>
                        </div>
                        <button
                            id="del_button"
                            type="button"
                            className="px-2 py-1 rounded-md bg-[#D5EDFF] text-[#2D70B2]"
                            disabled={isLoading}
                            onClick={() => handleDelete(file.filename)}
                        >
                            <AiFillDelete className={styles.icon} />
                        </button>
                    </div>
                </div>
                ))}
            </div> 
            </div>
            </div>
        </div>
    );
};

export default HotelCards;
