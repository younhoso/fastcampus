/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr 및 displayName은 기본적으로 구성됩니다.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // 이미지 도메인 추가
      },
    ],
  },
};

export default nextConfig;
