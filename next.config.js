/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.graphicsprings.com",
      "links.papareact.com",
      "media.giphy.com",
      "upload.wikimedia.org",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZG92eXBldHIiLCJhIjoiY2wxbTlxa3k4MDBoZzNjcGc3d2Z4cTVpMSJ9.01FnGEa__3jEib1-aqI42g",
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
