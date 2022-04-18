/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // >:( That darn gapless plugin
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve?.extensions, ".ts", ".tsx", ".js", ".css"],
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        net: false,
        tls: false,
        bufferutil: false,
        'utf-8-validate': false,
      },
    };

    return config;
  },
}

module.exports = nextConfig
