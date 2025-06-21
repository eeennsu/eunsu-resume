import type { NextConfig } from 'next';

const repository = 'eunsu-resume';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repository}`,
  assetPrefix: `/${repository}`,
};

export default nextConfig;
