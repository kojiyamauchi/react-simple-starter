/*
  PageHeading Component Storybook.
*/

import { PageHeading } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'PageHeading Component',
  component: PageHeading
}

export const Default = (): JSX.Element => <PageHeading letter="Storybook" />
