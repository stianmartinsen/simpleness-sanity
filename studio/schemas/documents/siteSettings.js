export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social media links',
      description: 'Shown in the footer',
      of: [
        {
          type: 'link'
        }
      ]
    },
    {
      name: 'contactEmail',
      type: 'email',
      title: 'Email address',
    },
  ]
}
