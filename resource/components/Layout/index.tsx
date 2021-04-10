/*
  Layout
*/

import { FixedLayout } from '@/components/Layout/FixedLayout'
import { FluidLayout } from '@/components/Layout/FluidLayout'

type Props = {
  pages: string
  chooseLayout: 'fixedLayout' | 'fluidLayout'
}

const switchComponent = (chooseLayout: Props['chooseLayout'], pages: string, children: React.ReactNode): JSX.Element => {
  switch (chooseLayout) {
    case 'fixedLayout':
      return <FixedLayout pages={pages}>{children}</FixedLayout>
    case 'fluidLayout':
      return <FluidLayout pages={pages}>{children}</FluidLayout>
  }
}

export const Layout: React.FC<Props> = ({ chooseLayout, pages, children }): JSX.Element => {
  return switchComponent(chooseLayout, pages, children)
}
