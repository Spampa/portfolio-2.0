/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [new URL('https://mysagra.com/**')],
  },
};

export default nextConfig;
