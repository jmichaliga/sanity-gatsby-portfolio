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
                  buildHookId: '5df55220738bc739c62ac117',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m5z8kupb',
                  apiId: '65439e43-2650-424f-8f9f-b0ea5c7150d0'
                },
                {
                  buildHookId: '5df552205a0a69aa39a792e2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gexfajiy',
                  apiId: '93d97f75-c83e-4f40-a150-66f362b9542e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmichaliga/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gexfajiy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
