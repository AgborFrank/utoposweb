import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    domains: ['dtuksyubelvksxrloluq.supabase.co', 'placehold.co', 'i01.appmifile.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
});

export default nextConfig;
