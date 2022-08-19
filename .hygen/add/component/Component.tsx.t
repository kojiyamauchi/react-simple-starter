---
to: "<%= chooseOutPutDir === 'Layouts' ? null  : chooseOutPutDir === 'Managements' ? `resource/components/${chooseOutPutDir}/${Name}Container/Component.tsx` : `resource/components/${chooseOutPutDir}/${Name}/Component.tsx` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null  : chooseOutPutDir === 'Managements' ? `prettier --write resource/components/${chooseOutPutDir}/${Name}Container/Component.tsx` : `prettier --write resource/components/${chooseOutPutDir}/${Name}/Component.tsx` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts') { %>
<%
  componentName = chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component.
*/

<%- useHooks ? `import { use${h.changeCase.pascal(addHooksFnName)} } from './Hooks'` : '' %>
import styled from 'styled-components'
<% if (useBreakPoints) { -%>
import { breakPoint } from '@/styles/StyleMixins'
<% } %>

type Props = {
  className?: string
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>: <%- addPropsDetails[index][`addPropsType${index + 1}`] %>
    <% }) %>
  <% } -%>
  <%= addChildren ? 'children?: React.ReactNode' : '' -%>
}

const <%= componentName %>Component: React.FC<Props> = ({
  className
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= `,${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}` %>
    <% }) -%>
  <% } -%>
  <%= addChildren ? ',children' : '' -%>
  }): JSX.Element => {
  <% if (useHooks) { %>
  const {
    <% if (addHooksReturnTypeAlias) { -%>
      <% Array.from({ length: addHooksReturnTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksReturnTypeDetails[index][`addHooksReturnTypeKey${index + 1}`])},` -%>
      <% }) -%>
  <% } else { -%>
  undefined
  <% } -%>
  } = use<%= h.changeCase.pascal(addHooksFnName) %>(
    <% if (addHooksFnArgNumber > 0) { -%>
      <% Array.from({ length: addHooksFnArgNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksFnArgDetails[index][`addHooksFnArgName${index + 1}`])},` %>
      <% }) -%>
    <% } %>
  )
  <% } %>
  return (
    <<%= wrapperTags %> className={className}>
    <% if (addPropsNumber > 0) { -%>
      <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
        <%= `{${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}}` %>
      <% }) -%>
    <% } -%>
    <% if (addChildren) { -%>
      { children }
    <% } %>
    </<%= wrapperTags %>>
  )
}

const StyledComponent = styled(<%= componentName %>Component)`
<% if (useBreakPoints) {%>
  ${breakPoint.aboveLargeMobile``}
<% } %>
`

export const <%= componentName %> = StyledComponent
<% } %>