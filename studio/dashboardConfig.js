export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d6e6d9dd36a64977c15effb',
                  title: 'Sanity Studio',
                  name: 'simpleness-sanity-studio',
                  apiId: 'd12cbdd6-708b-42e5-9083-31aa4f21274f'
                },
                {
                  buildHookId: '5d6e6d9d077dadb961e4f796',
                  title: 'Portfolio Website',
                  name: 'simpleness-sanity',
                  apiId: '4936b253-8d44-4298-9d89-8635e7692677'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stianmartinsen/simpleness-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://simpleness-sanity.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
