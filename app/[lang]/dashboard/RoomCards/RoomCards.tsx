'use client'
import axios from "axios";
import React, { FormEvent, useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from './RoomsCards.module.css';
import { FaUpload } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { FileMetadata, FileData } from "@/constants/interfaces";
import { bedx2, bedx1, sofa } from "@/public";

const RoomsCards = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<FileData[]>([]);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [descriptions, setDescriptions] = useState<FileMetadata>({
        runame:"",
        ru: "",
        enname:"",
        en: "",
        gename:"",
        ge: "",
        bedx2: 0,
        bedx1: 0, 
        sofa: 0
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDescriptions((prevDescriptions) => ({
            ...prevDescriptions,
            [name]: value,
        }));
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        await axios.post("/api/uploadRoomcards", formData);
        setIsLoading(false); 
        setDescriptions({ 
            runame:"",
            ru: "",
            enname:"",
            en: "",
            gename:"",
            ge: "",
            bedx2: 0,
            bedx1: 0, 
            sofa: 0
        }); 
        setPreviewUrl(null); 
        const response = await axios.get("/api/uploadRoomcards");
        setFiles(response.data.files); 
    };

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("/api/uploadRoomcards");
            setFiles(response.data.files);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleDelete = async (filename: string) => {
        try {
            await axios.delete(`/api/uploadsRoomcards/${filename}`);
            const response = await axios.get('/api/uploadRoomcards');
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
                        <div className="mr-4 text-center">Room Cards</div>
                        <div className='dot'></div>
                        <div className='line'></div>
                    </div>
                </div>
            <div className={styles.addform}>
            <div className={styles.subtitle}>Add new room card</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.new_img}>
                <input type="file" name="files" ref={ref} multiple className={styles.input} onChange={handleChange} />
                <div className={styles.preview}>
                    {previewUrl && <Image src={previewUrl} alt="Preview"  width={200} height={180} className={styles.preview_img}/>}
                </div>
                {isLoading ? "Uploading..." : ""}
                </div>
                <div className={styles.description}>
                <div className="ml-3 text-xs">Название номера</div>
                <input 
                    name="runame" 
                    type="text" 
                    className={styles.input} 
                    placeholder="на русском языке ..." 
                    value={descriptions.runame}
                    onChange={handleInputChange}/>
                <div className="ml-3 text-xs">Описание</div>
                <textarea
                    name="ru"
                    value={descriptions.ru}
                    onChange={handleTextareaChange}
                    placeholder="на русском языке ..."
                    rows={4}
                    className={styles.input}
                />
                <div className="ml-3 text-xs">Room name</div>
                <input 
                    type="text" 
                    name="enname"
                    className={styles.input} 
                    placeholder="in english ..." 
                    value={descriptions.enname}
                    onChange={handleInputChange}/>
                <div className="ml-3 text-xs">Description</div>
                <textarea
                    name="en"
                    value={descriptions.en}
                    onChange={handleTextareaChange}
                    placeholder="in english ..."
                    rows={4}
                    className={styles.input}
                />
                <div className="ml-3 text-xs">ოთახის სახელი</div>
                <input 
                    type="text" 
                    name="gename" 
                    className={styles.input} 
                    placeholder="ქართულად..." 
                    value={descriptions.gename}
                    onChange={handleInputChange}/>
                <div className="ml-3 text-xs">აღწერა</div>
                <textarea
                    name="ge"
                    value={descriptions.ge}
                    onChange={handleTextareaChange}
                    placeholder="ქართულად..."
                    rows={4}
                    className={styles.input}
                />
                <div className="">Add number of bed types</div>
                <div className="flex bedstype">
                    <div className="flex bedstype_item">
                        <Image src={bedx2} alt='bedx2' width={40} height={40}/>
                        <input className={styles.input} name="bedx2" value={descriptions.bedx2} onChange={handleInputChange}/>
                    </div>
                    <div className="flex">
                        <Image src={bedx1} alt='bedx2' width={20} height={40}/>
                        <input className={styles.input} name="bedx1" value={descriptions.bedx1} onChange={handleInputChange}/>
                    </div>
                    <div className="flex">
                        <Image src={sofa} alt='bedx2' width={60} height={20}/>
                        <input className={styles.input} name="sofa" value={descriptions.sofa} onChange={handleInputChange}/>
                    </div>
                </div>
                
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
            <h1 className={styles.subtitle}>Room Cards</h1>
            <div className={styles.list}>
                {files.map((file, index) => (
                <div key={file._id} className={styles.item_container}>
                    <div className={styles.wrapper}>
                        <div className={styles.item_number}>{index+1}.</div>
                        <div className={styles.item_image}>
                            <Image 
                                src={`/api/uploadsRoomcards/${file.filename}`} 
                                alt={file.filename} 
                                width={200} 
                                height={180}
                                className={styles.item_image_img}
                                />
                        </div>
                        
                        <div className={styles.description_container}>
                            <p className={styles.paragraph}>{file.metadata.runame}</p>
                            <hr />
                            <p className={styles.paragraph}>{file.metadata.enname}</p>
                            <hr />
                            <p className={styles.paragraph}>{file.metadata.gename}</p>
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

export default RoomsCards;
