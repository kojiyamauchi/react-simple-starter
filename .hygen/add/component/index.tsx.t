---
to: "resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>"
sh: "prettier --write 'resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir === 'Layouts') { %>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Layout.
*/

import styled from 'styled-components'
<% if (useBreakPoints) { -%>
import { breakPoint } from '@/styles/StyleMixins'
<% } -%>
import Logo from '@/materials/images/logo.webp'

type Props = {
  className?: string
  pages: string
  children?: React.ReactNode
}

const <%= Name %>LayoutComponent: React.FC<Props> = ({ className, pages, children }): JSX.Element => {
  return (
    <div className={`${className} ${pages} layout <%= camelName %>-layout`}>
      <main className="main-content">{children}</main>
    </div>
  )
}

const StyledComponent = styled(<%= Name %>LayoutComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  <% if (useBreakPoints) { -%>
    ${breakPoint.aboveLargeMobile``}
  <% } %>
  .main-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: 80% center;
    background-size: 25% auto;
  }

`

export const <%= Name %>Layout = StyledComponent
<% } else { %>
<%
  componentName = chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container' : '' %>.
*/

export { <%= componentName %> } from './Component'
<% } %>