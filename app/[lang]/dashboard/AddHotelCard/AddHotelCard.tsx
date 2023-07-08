'use client'
import axios from "axios";
import React, { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import styles from './AddHotelCard.module.css';

const AddHotelCard = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [urls, setUrls] = useState<string[]>([]);
    const [descriptions, setDescriptions] = useState<{ [key: string]: string }>({
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = ref.current!;
        const formData = new FormData();
        const files = Array.from(input.files ?? []);
        for (const file of files) {
            formData.append(file.name, file);
        }
        // Добавляем описания фотографий в formData
        Object.entries(descriptions).forEach(([lang, description]) => {
            formData.append(lang, description);
        });
        await axios.post("/api/upload", formData);
        setUrls(files.map((file) => `/api/uploads/${file.name}`));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="files" ref={ref} multiple />
                {/* Добавляем textarea для описания фотографий */}
                <textarea
                    name="ru"
                    value={descriptions.ru}
                    onChange={handleChangeDescription}
                    placeholder="Описание (русский)"
                    rows={4}
                />
                <textarea
                    name="en"
                    value={descriptions.en}
                    onChange={handleChangeDescription}
                    placeholder="Description (English)"
                    rows={4}
                />
                <textarea
                    name="ge"
                    value={descriptions.ge}
                    onChange={handleChangeDescription}
                    placeholder="აღწერა (ქართული)"
                    rows={4}
                />
                <button
                    type="submit"
                    className="px-2 py-1 rounded-md bg-violet-50 text-violet-500"
                >
                    Upload
                </button>
            </form>
            {/* display uploaded images */}
            <div className="relative aspect-video max-h-[400px]">
                {urls.map((url) => {
                    return (
                        <Image
                            key={url}
                            src={url}
                            alt={url}
                            className="object-cover"
                            fill
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AddHotelCard;
