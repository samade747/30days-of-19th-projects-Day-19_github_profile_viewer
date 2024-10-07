/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/**', // This allows all paths under the GitHub avatars domain
        },
      ],
    },
  };
  
  export default nextConfig;
  