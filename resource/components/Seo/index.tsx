/*
  SEO.
*/

import { Helmet } from 'react-helmet'
import { baseSeo, pathPrefix } from '~/base.config'

type Props = {
  title?: string
  description?: string
  locationPath?: string
  ogpSiteName?: string
  ogpTitle?: string
  ogpDescription?: string
  ogpImage?: string
}

export const SEO: React.VFC<Props> = (props): JSX.Element => {
  const setSeo = {
    title: props.title ? `${props.title} | ${baseSeo.title}` : baseSeo.title,
    description: props.description ? `${baseSeo.description} and ${props.description}` : baseSeo.description,
    location: props.locationPath ? `${baseSeo.location}${props.locationPath}` : baseSeo.location,
    ogpSiteName: props.ogpSiteName || baseSeo.ogpSiteName,
    ogpTitle: props.ogpTitle ? `${props.ogpTitle} | ${baseSeo.ogpTitle}` : baseSeo.ogpTitle,
    ogpDescription: props.ogpDescription || baseSeo.ogpDescription,
    ogpImage: props.ogpImage || baseSeo.ogpImage
  }

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="ja" />
      <title>{setSeo.title}</title>
      <meta name="title" content={setSeo.title} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={setSeo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={setSeo.location} />
      <meta property="og:site_name" content={setSeo.ogpSiteName} />
      <meta property="og:title" content={setSeo.ogpTitle} />
      <meta property="og:description" content={setSeo.ogpDescription} />
      <meta property="og:image" content={setSeo.ogpImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={setSeo.title} />
      <meta name="twitter:description" content={setSeo.description} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix()}/favicons/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix()}/favicons/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix()}/favicons/favicon-16x16.png`} />
      <link rel="manifest" href={`${pathPrefix()}/site.webmanifest`} key="manifest" />
      <link rel="mask-icon" href={`${pathPrefix()}/favicons/safari-pinned-tab.svg`} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={setSeo.location} key="canonical" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}
