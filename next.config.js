/** @type {import('next').NextConfig} */
const nextConfig = {
 env : {
  "BASE_URL" : "http://localhost:3000",
  "MONGODB_URL" : "mongodb+srv://shopping_hut_admin:jifR2KbRo5T8az1r@cluster0.hx8udxs.mongodb.net/shopping-hut",
  "ACCESS_TOKEN_SECRET": "6EfCHWQ0jT$#ke^19BQfG2s9KJMxdlPGBLlLwd3CK96OjAfw",
  "REFRESH_TOKEN_SECRET": "rUK#b32Fbe2^ZLN$!EjS0yRyNMShKkHx&m9GZ@Nk47rC%EXV"
 }
}

module.exports = nextConfig;



// we need to use database name after .net
// .net/shopping-hut

// ?retryWrites=true&w=majority
