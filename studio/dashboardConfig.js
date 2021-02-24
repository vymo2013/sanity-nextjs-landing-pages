export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6035f3ef2a60c894379aa51b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r8jyrhhz',
                  apiId: 'ea0a45d6-0d21-41cf-b97d-7431232bfd81'
                },
                {
                  buildHookId: '6035f3efc5489191aa4a0675',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z9dm74q1',
                  apiId: '71c31a37-5c45-4da4-917b-e1c379088e98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vymo2013/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z9dm74q1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
