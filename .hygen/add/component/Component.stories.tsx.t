---
to: "<%= !useStorybook ? null : chooseOutPutDir === 'Layouts' ? `resource/components/${chooseOutPutDir}/${Name}Layout/${Name}Layout.stories.tsx` : chooseOutPutDir === 'Managements' ? `resource/components/${chooseOutPutDir}/${Name}Container/${Name}Container.stories.tsx` : `resource/components/${chooseOutPutDir}/${Name}/${Name}.stories.tsx` %>"
sh: "<%= !useStorybook ? null : chooseOutPutDir === 'Layouts' ? `prettier --write resource/components/${chooseOutPutDir}/${Name}Layout/${Name}Layout.stories.tsx` : chooseOutPutDir === 'Managements' ? `prettier --write resource/components/${chooseOutPutDir}/${Name}Container/${Name}Container.stories.tsx` : `prettier --write resource/components/${chooseOutPutDir}/${Name}/${Name}.stories.tsx` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<%
  componentName = chooseOutPutDir === 'Layouts' ? `${Name}Layout` : chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Layouts' ? ' Layout ' : chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component Storybook.
*/

import { <%= componentName %> } from './'
<% if (useBrowserRouter) { -%>
import { BrowserRouter } from 'react-router-dom'
<% } -%>
// import { action } from '@storybook/addon-actions'

export default {
  title: '<%= Name %><%= chooseOutPutDir === 'Layouts' ? ' Layout ' : chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component',
  component: <%= componentName %>
}

<% if (chooseOutPutDir === 'Layouts') { %>
  export const Default = (): JSX.Element => (
    <BrowserRouter>
      <<%= componentName %> pages="storybook" />
    </BrowserRouter>
  )
<% } else { %>
  <% if (useBrowserRouter) { -%>
    export const Default = (): JSX.Element => (
      <BrowserRouter>
        <<%= componentName %> 
          <% if (addPropsNumber > 0) { -%>
            <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
              <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>=<%- addPropsDetails[index][`addPropsType${index + 1}`] === 'boolean' ? '{false} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'number' ? '{0} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'string' ? '"" ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'undefined' ? '{undefined} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'null' ? '{null} ' : '{} ' %>
            <% }) -%>
          <% } -%>
        />
      </BrowserRouter>
    )
  <% } else { %>
    export const Default = (): JSX.Element => (
      <<%= componentName %> 
        <% if (addPropsNumber > 0) { -%>
          <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
            <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>=<%- addPropsDetails[index][`addPropsType${index + 1}`] === 'boolean' ? '{false} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'number' ? '{0} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'string' ? '"" ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'undefined' ? '{undefined} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'null' ? '{null} ' : '{} ' %>
          <% }) -%>
        <% } -%>
      />
    )
  <% } %>
<% } %>

