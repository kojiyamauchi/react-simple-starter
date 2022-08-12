/*
  Layout
*/

import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { FluidLayout } from '@/components/Layouts/FluidLayout'

type Props = {
  pages: string
  chooseLayout: 'fixedLayout' | 'fluidLayout'
  children?: React.ReactNode
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
