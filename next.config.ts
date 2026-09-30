import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  agentRules: false,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/kumar-swamy-layout",
        destination: "/areas/kumaraswamy-layout",
        permanent: true,
      },
      {
        source: "/bengaluru",
        destination: "/areas",
        permanent: true,
      },
      {
        source: "/jp-nagar",
        destination: "/areas/jp-nagar",
        permanent: true,
      },
      {
        source: "/jayanagar",
        destination: "/areas/jayanagar",
        permanent: true,
      },
      {
        source: "/btm-layout",
        destination: "/areas/btm-layout",
        permanent: true,
      },
      {
        source: "/banashankari",
        destination: "/areas/banashankari",
        permanent: true,
      },
      {
        source: "/bannerghatta-road",
        destination: "/areas/bannerghatta-road",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
