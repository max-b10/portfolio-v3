/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  // images: {
  //   domains: ["s.gravatar.com", "localhost"], // <== Domain name
  // },
  // experimental: {
  //   images: {
  //     allowFutureImage: true,
  //   },
  // },
};

// This required so we can use the FullCalendar with NextJs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTm = require("next-transpile-modules")(["@babel/preset-react"]);

module.exports = withTm(nextConfig);

// module.exports = nextConfig;
