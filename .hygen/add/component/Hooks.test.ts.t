---
to: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `resource/components/${chooseOutPutDir}/${Name}Container/Hooks.test.ts` : `resource/components/${chooseOutPutDir}/${Name}/Hooks.test.ts` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `prettier --write resource/components/${chooseOutPutDir}/${Name}Container/Hooks.test.ts` : `prettier --write resource/components/${chooseOutPutDir}/${Name}/Hooks.test.ts` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts' && useHooks) { -%>
/*
  <%= Name %> Private Hooks Unit Test.
*/

import { renderHook /* , act*/ } from '@testing-library/react-hooks'
import { use<%= h.changeCase.pascal(addHooksFnName) %> } from './Hooks'

beforeAll(() => {})
beforeEach(() => {})

describe('use<%= h.changeCase.pascal(addHooksFnName) %> Hooks Unit Test', () => {
  test('TBD', () => {
    const { result } = renderHook(() => use<%= h.changeCase.pascal(addHooksFnName) %>())
    expect(result.current)
  })
})

afterEach(() => {})
afterAll(() => {})
<% } -%>