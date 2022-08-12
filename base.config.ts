/*
   Application Base Config for Client.
*/

export const baseSeo = {
  title: 'React Simple Starter',
  description: 'This is React Simple Starter',
  location: 'https://kojiyamauchi.github.io/react-simple-starter',
  ogpSiteName: 'React Simple Starter',
  ogpTitle: 'React Simple Starter',
  ogpDescription: 'This is React Simple Starter.',
  ogpImage: 'ogp_image.jpg'
} as const

export const pathPrefix = webpackPathPrefix ? `/${webpackPathPrefix}` : ''
export const branchesMode = webpackEnvMode === 'production' ? '🛹' : webpackEnvMode === 'development' ? '🏄‍♂️' : '🏂'
