/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
    },
    images: {
        domains: ['scontent-atl3-1.cdninstagram.com', 'scontent-atl3-2.cdninstagram.com'],
    }
}

module.exports = nextConfig;