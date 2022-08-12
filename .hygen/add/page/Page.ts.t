---
to: resource/Pages/<%= Name %>Page.tsx
sh: prettier --write 'resource/Pages/<%= Name %>Page.tsx'
---
<%
  camelName = h.changeCase.camel(name)
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Page.
*/
import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layouts/'
import { SEO } from '@/components/Seo/'

export const <%= Name %>Page: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="<%= camelName %>-page" chooseLayout="<%= h.changeCase.camel(chooseLayout) %>">
      <SEO title="<%= pageTitle %>" description="<%= pageDescription %>" locationPath={location.pathname} />
      <main></main>
    </Layout>
  )
}
