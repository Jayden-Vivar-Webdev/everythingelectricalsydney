/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    domains: [
      'upload.wikimedia.org',
      'www.gstatic.com',
      'lh3.googleusercontent.com',
      'ssl.gstatic.com'
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/review',
        destination: 'https://www.google.com/search?client=safari&sca_esv=d06f5a1c24924b00&rls=en&channel=30&biw=2010&bih=1115&sxsrf=AE3TifMbmstVgX2nBxyeJwta9WLvUS3eoA:1753418214653&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_BrlSgmRx-EOxuNNUDKdhET4PZUGcqygSqS6sTRD_9MT86C9S3RqYZirX2hmj7h7LsK4g6onPmnybh8WryNLoJMidzoeH2T1qsHJ26iIXePQyaPpw%3D%3D&q=Everything+Electrical+Sydney+Reviews&sa=X&ved=2ahUKEwic3M7ul9eOAxV1rlYBHdsdFEkQ0bkNegQIHRAD',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
