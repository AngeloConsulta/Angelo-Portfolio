import PageClient from './PageClient';

export const metadata = {
  metadataBase: new URL('https://angeloconsulta-portfolio.vercel.app/'),
  title: "Angelo Consulta | Full-Stack Developer Portfolio",
  description: "Portfolio of Angelo Consulta, a full-stack developer specializing in modern web and cloud technologies. View projects, skills, testimonials, and contact information.",
  openGraph: {
    title: "Angelo Consulta | Full-Stack Developer Portfolio",
    description: "Portfolio of Angelo Consulta, a full-stack developer specializing in modern web and cloud technologies. View projects, skills, testimonials, and contact information.",
    url: "https://angeloconsulta-portfolio.vercel.app/",
    siteName: "Angelo Consulta Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 520,
        alt: "Angelo Consulta Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo Consulta | Full-Stack Developer Portfolio",
    description: "Portfolio of Angelo Consulta, a full-stack developer specializing in modern web and cloud technologies.",
    images: ["/profile.png"],
    creator: "@yourtwitterhandle"
  },
  alternates: {
    canonical: "https://angeloconsulta-portfolio.vercel.app/",
  },
};

export default function HomePage() {
  return <PageClient />;
}

