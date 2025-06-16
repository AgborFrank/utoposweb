import localFont from 'next/font/local';

const dFont = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
        path: '../public/fonts/GeneralSans-Medium.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../public/fonts/GeneralSans-Semibold.woff2',
        weight: '700',
        style: 'normal',
      },
    {
      path: '../public/fonts/GeneralSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-drop-font', // Optional: CSS variable for use in styles
});

export default dFont;