/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        INSTAGRAM_TOKEN: process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
        DB_KEY: process.env.NEXT_PUBLIC_MONGODB_URI,
    },
    images: {
        domains: ['olimp.burdakova.com', 'cdninstagram.com'],
    }
}

module.exports = nextConfig;