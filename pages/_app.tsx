import Head from 'next/head'
import { about, skills } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import 'animate.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ga_measurement_id, pageview } from '../lib/google-analytics'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  useEffect(() => {
    if (!ga_measurement_id) return
    const handleRouteChange = (url: string) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{`${about.fullName} - ${about.role}` || 'Portfolio'}</title>
        <meta name='description' content='Brandon Josue Rodriguez Ventura, Joven Desarrollador de Software. Una persona seria y amable.' />
        <meta name='keywords' content={`Software Developer, Software Development, Portfolio, ${skills.join(', ')}, ${about.fullName}, ${about.role}`} />
        <meta name='author' content='Brandon Josue Rodriguez Ventura' />
        <meta name='robots' content='index, follow' />
        <meta property="og:title" content={`${about.fullName} - ${about.role}` || 'Portfolio'} />
        <meta property="og:description" content="Brandon Josue Rodriguez Ventura, Joven Desarrollador de Software. Una persona seria y amable." />
        <meta property="og:image" content="https://yaasiin-dev.vercel.app/favicon.ico" />
        <meta property="og:url" content="https://yaasiin-dev.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${about.fullName} - ${about.role}` || 'Portfolio'} />
        <meta name="twitter:description" content="Brandon Josue Rodriguez Ventura, Joven Desarrollador de Software." />
        <meta name="twitter:image" content="https://yaasiin-dev.vercel.app/favicon.ico" />
        <link rel="canonical" href="https://yaasiin-dev.vercel.app" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Brandon Josue Rodriguez Ventura",
              "jobTitle": "Software Developer and DevOps Engineer",
              "url": "https://yaasiin-dev.vercel.app",
              "image": "https://yaasiin-dev.vercel.app/favicon.ico",
              "description": "Brandon Josue Rodriguez Ventura, Joven Desarrollador de Software. Una persona seria y amable.",
              "sameAs": [
                ${about.social.github ? `"${about.social.github}"` : ''}
              ]
            }
          `}
        </script>

        {/* <link rel="alternate" href="https://yaasiin-dev.vercel.app/fr" hrefLang="fr" />
        <link rel="alternate" href="https://yaasiin-dev.vercel.app/en" hrefLang="en" /> */}

      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
