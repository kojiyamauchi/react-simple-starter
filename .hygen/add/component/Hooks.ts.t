---
to: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `resource/components/${chooseOutPutDir}/${Name}Container/Hooks.ts` : `resource/components/${chooseOutPutDir}/${Name}/Hooks.ts` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `prettier --write resource/components/${chooseOutPutDir}/${Name}Container/Hooks.ts` : `prettier --write resource/components/${chooseOutPutDir}/${Name}/Hooks.ts` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts' && useHooks) { -%>
/*
  <%= Name %> Private Hooks.
*/

  <% if (addReactHooks.length > 0) { -%>
    import {<% addReactHooks.forEach((info, index) => { -%>
      <%= index === 0 ? info : `,${info}` -%>
    <% }) -%>} from 'react'
  <% } -%>

  <% if (addHooksReturnTypeAlias) { -%>
  export type hooksReturnType = {
    <% Array.from({ length: addHooksReturnTypeNumber }, (_info, index) => { -%>
      <%= h.changeCase.camel(addHooksReturnTypeDetails[index][`addHooksReturnTypeKey${index + 1}`]) %>: <%- addHooksReturnTypeDetails[index][`addHooksReturnTypeDetail${index + 1}`] %>
    <% }) %>
  }
  <% } -%>

  export const use<%= h.changeCase.pascal(addHooksFnName) %> = (
    <% if (addHooksFnArgNumber > 0) { -%>
      <% Array.from({ length: addHooksFnArgNumber }, (_info, index) => { -%>
        <%= h.changeCase.camel(addHooksFnArgDetails[index][`addHooksFnArgName${index + 1}`]) %>: <%- `${addHooksFnArgDetails[index][`addHooksFnArgType${index + 1}`]},` %>
      <% }) -%>
    <% } %>
  ): <%- addHooksReturnTypeAlias ? 'hooksReturnType' : addHooksReturnTypeAnnotation ? addHooksReturnTypeAnnotation : 'undefined' %> => {
    <% if (addHooksReturnTypeAlias) { -%>
      return { <% Array.from({ length: addHooksReturnTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksReturnTypeDetails[index][`addHooksReturnTypeKey${index + 1}`])},` -%>
      <% }) -%>}
    <% } else { -%>
    return undefined
  <% } %>
  }
<% } -%>