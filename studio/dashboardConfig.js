export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2b3453a1af5601aa2c649f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog5-studio-wmdd22fo',
                  apiId: '14ab55b8-33eb-442f-aa47-be78e0ed207f'
                },
                {
                  buildHookId: '5e2b3453ce1c216c17dbaebe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog5-web',
                  apiId: 'b4542241-f547-4da4-a810-0b7fc68c6dc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blog5',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog5-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
