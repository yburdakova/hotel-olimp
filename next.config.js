/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        INSTAGRAM_TOKEN: process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
        DB_KEY: process.env.MONGODB_URI,
    },
    images: {
        domains: ['scontent-atl3-1.cdninstagram.com', 'scontent-atl3-2.cdninstagram.com', 'drive.google.com', 'olimp.burdakova.com'],
    }
}

module.exports = nextConfig;