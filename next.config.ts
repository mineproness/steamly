import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  
  experimental:{
    serverActions:{
      bodySizeLimit: 10000000000000000000000000000000000000000000000000000000000,
      
    }
  },
  crossOrigin: "anonymous",

  images:{
    remotePatterns: [new URL("https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg"),new URL("https://yt3.ggpht.com/b6kYN_Jsp1cqQXgTVwbdW_37BzyO00diarq737l6o_22hPdcSN37xTx_OVaN7nEEvSbhC8Ae=s108-c-k-c0x00ffffff-no-rj")]
  },
  reactStrictMode: false,
};

export default nextConfig;
