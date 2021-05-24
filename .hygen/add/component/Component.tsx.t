---
to: "resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>"
sh: "prettier --write 'resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir === 'Layouts') { %>
/*
  <%= Name %> Layout.
*/

import styled from 'styled-components'
<% if (useBreakPoints) { -%>
import { BreakPoint } from '@/styles/StyleMixins'
<% } -%>
import Logo from '@/materials/images/logo.webp'

type Props = {
  className?: string
  pages: string
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
    ${BreakPoint.largeMobile``}
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
  <%= Name %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component.
*/

<%- useHooks ? `import { use${h.changeCase.pascal(addHooksFnName)} } from './Hooks'` : '' %>
import styled from 'styled-components'
<% if (useBreakPoints) { -%>
import { BreakPoint } from '@/styles/StyleMixins'
<% } %>

type Props = {
  className?: string
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>: <%= h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) %>
    <% }) %>
  <% } %>
}

const <%= componentName %>Component: React.<%= chooseComponentTypes === 'Function Component' ? 'FC' : 'VFC' %><Props> = ({
  className
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= `,${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}` %>
    <% }) -%>
  <% } -%>
  <%= chooseComponentTypes === 'Function Component' ? ',children' : '' -%>
  }): JSX.Element => {
  <% if (useHooks) { %>
  const {
    <% if (addHooksTypeAlias) { -%>
      <% Array.from({ length: addHooksTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksTypeDetails[index][`addHooksTypeKey${index + 1}`])},` -%>
      <% }) -%>
  <% } else { -%>
  undefined
  <% } -%>
  } = use<%= h.changeCase.pascal(addHooksFnName) %>()
  <% } %>
  return (
    <<%= wrapperTags %> className={className}>
    <% if (addPropsNumber > 0) { -%>
      <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
        <%= `{${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}}` %>
      <% }) -%>
    <% } -%>
    <% if (chooseComponentTypes === 'Function Component') { -%>
      { children }
    <% } %>
    </<%= wrapperTags %>>
  )
}

const StyledComponent = styled(<%= componentName %>Component)`
<% if (useBreakPoints) {%>
  ${BreakPoint.largeMobile``}
<% } %>
`

export const <%= componentName %> = StyledComponent
<% } %>