/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // The project used to live at its street address. That is the owners'
        // home, so the address was removed from the site entirely. This keeps
        // every existing link and the page's search ranking intact.
        source: "/projects/917-burnet",
        destination: "/projects/dignowity-hill-historic-renovation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
