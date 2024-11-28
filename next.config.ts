import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  }
}

export default nextConfig
