---
to: "resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/${Name}Layout.test.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/${Name}Container.test.tsx` : `${chooseOutPutDir}/${Name}/${Name}.test.tsx` %>"
sh: "prettier --write 'resource/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/${Name}Layout.test.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/${Name}Container.test.tsx` : `${chooseOutPutDir}/${Name}/${Name}.test.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<%
  componentName = chooseOutPutDir === 'Layouts' ? `${Name}Layout` : chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Layouts' ? ' Layout ' : chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component Unit Test.
*/

import { <%= componentName %> } from './<%= chooseOutPutDir === 'Layouts' ? '' : 'Component' %>'
<% if (useBrowserRouter) { -%>
import { BrowserRouter } from 'react-router-dom'
<% } -%>
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

<% if (chooseOutPutDir === 'Layouts') { %>
describe('<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <<%= componentName %> pages="ui-test" />
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
<% } else { %>
describe('<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    <% if (useBrowserRouter) { -%>
      const { asFragment } = render(
        <BrowserRouter>
          <<%= componentName %> 
            <% if (addPropsNumber > 0) { -%>
              <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
                <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>=<%- addPropsDetails[index][`addPropsType${index + 1}`] === 'boolean' ? '{false} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'number' ? '{0} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'string' ? '"" ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'undefined' ? '{undefined} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'null' ? '{null} ' : '{} ' %>
              <% }) -%>
            <% } -%>/>
        </BrowserRouter>
      )
    <% } else { -%>
      const { asFragment } = render(<<%= componentName %> 
      <% if (addPropsNumber > 0) { -%>
        <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
          <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>=<%- addPropsDetails[index][`addPropsType${index + 1}`] === 'boolean' ? '{false} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'number' ? '{0} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'string' ? '"" ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'undefined' ? '{undefined} ' : addPropsDetails[index][`addPropsType${index + 1}`] === 'null' ? '{null} ' : '{} ' %>
        <% }) -%>
      <% } -%>/>)
    <% } -%>
    expect(asFragment()).toMatchSnapshot()
  })
})
<% } %>