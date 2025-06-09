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
  // experimental:{
  //   reactCompiler: true
 
  images:{
    remotePatterns: [new URL("https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg")]
  }
};

export default nextConfig;
