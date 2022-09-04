/** @type {import('next').NextConfig} */
const nextConfig = {
 env : {
  "BASE_URL" : "http://localhost:3000",
  "MONGODB_URL" : "mongodb+srv://shopping_hut_admin:jifR2KbRo5T8az1r@cluster0.hx8udxs.mongodb.net/?retryWrites=true&w=majority"
 }
}

module.exports = nextConfig
