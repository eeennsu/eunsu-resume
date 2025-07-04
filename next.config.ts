import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repository = 'eunsu-resume';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repository}` : '',
  assetPrefix: isProd ? `/${repository}` : '',
};

export default nextConfig;
