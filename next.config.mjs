/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',

    // Performance optimizations
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
        turbo: {
            // Turbopack configuration for development
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/vi/**',
            },
        ],
    },

    // Webpack optimizations (production only)
    webpack: (config, { dev }) => {
        // Only apply webpack optimizations in production
        if (!dev) {
            // Better chunk naming for debugging
            config.output.chunkFilename = 'static/chunks/[name].[contenthash].js';

            // Optimize bundle splitting
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    common: {
                        name: 'common',
                        minChunks: 2,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            };
        }

        return config;
    },

    // Compiler optimizations (production only)
    ...(process.env.NODE_ENV === 'production' && {
        compiler: {
            removeConsole: true,
        },
    }),

    // Enable static optimization
    trailingSlash: false,
    poweredByHeader: false,
};

export default nextConfig;
