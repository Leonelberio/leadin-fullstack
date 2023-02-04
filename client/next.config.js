/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseUrl : "https://leadinbackend.onrender.com" 
    // baseUrl : "http://localhost:8080" 

  },
  // experimental:{appDir: true}
  // experimental: {
  //   fontLoaders: [
  //     { loader: '@next/font/google', options: { subsets: ['latin'] } },
  //   ],
  //   allowMiddlewareResponseBody: true,
  // },
  
};


module.exports = nextConfig;
