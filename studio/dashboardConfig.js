export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '601cbfb049428c45d1600951',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2wo99f47',
                  apiId: '1fbff5dc-13ed-4923-94f7-9212179d71a9'
                },
                {
                  buildHookId: '601cbfb15f91d4461a7bcf54',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-azz6yd3o',
                  apiId: 'df25285a-6a46-4c67-a6f4-bbbb13d754d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kesslerio/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-azz6yd3o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
