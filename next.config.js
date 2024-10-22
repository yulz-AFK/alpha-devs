/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//   }
  
//   module.exports = nextConfig
  
module.exports = {
    env: {
      // declare here all your variables
      BASE_URL: process.env.BASE_URL,
    },
    images: {
      domains: ['https://www.goabroad.com/articles/volunteer-abroad/top-9-things-to-bring-when-volunteering-in-a-disaster-zone'], 
    },
  }
  