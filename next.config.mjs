/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    },
    // Remove the headers configuration
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'public, max-age=31536000, immutable',
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

export default nextConfig;