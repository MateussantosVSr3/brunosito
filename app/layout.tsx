import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/lib/site-config';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Andriatto & Co. | Processos, projetos e execução',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: { title: 'Andriatto & Co. | Estratégia que se transforma em execução', description: siteConfig.description, locale: 'pt_BR', type: 'website', url: '/', siteName: siteConfig.name, images: [{ url: '/social-card.png', width: 1200, height: 630, alt: 'Andriatto & Co. — Processos e projetos' }] },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/social-card.png'] },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
};
export const viewport: Viewport = { themeColor: '#111827', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
