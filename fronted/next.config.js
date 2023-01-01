/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  nextConfig,
  env:{
    API_URL: 'http://localhost:3000'
  }
}
