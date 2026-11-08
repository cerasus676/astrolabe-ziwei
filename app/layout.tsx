import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SITE_URL } from '@/lib/site';

const description = '在浏览器中进行紫微斗数单人排盘与双人合盘，查看十二宫、主星、四化、大限与流年，并查阅古籍及星曜百科。';

export const metadata: Metadata = {
  title: 'Astrolabe 星盘仪 · 紫微斗数排盘',
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Astrolabe 星盘仪 · 紫微斗数排盘',
    description,
    siteName: 'Astrolabe 星盘仪',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('ziwei-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();` }} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
