import type { NextConfig } from 'next';

// const debug = process.env.NODE_ENV !== 'production';
// const repository = 'eunsu-resume';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: debug ? '' : `/${repository}`,
  // assetPrefix: debug ? '' : `/${repository}`,
};

export default nextConfig;
