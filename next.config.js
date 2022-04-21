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
    stripe_public_key: 'pk_test_51Kqf1rGYGMOM8vlYBWF1iGJpNW8m2OkncWZlCwkB7fhba6rXdlV2u3qaENuN33E3KCUMyVNIMlgPZufTwRtapot000JWsynGBe',
  },
};

module.exports = nextConfig;
