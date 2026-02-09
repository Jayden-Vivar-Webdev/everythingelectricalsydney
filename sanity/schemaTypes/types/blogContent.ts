import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meta',
      type: 'object',
      title: 'SEO Meta Data',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Meta Title',
          description: 'Optional. If empty, the post title will be used.',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          description: 'Optional. Summarizes the post for search engines.',
          validation: (Rule) =>
            Rule.max(160).warning('Try to keep meta description under 160 characters'),
        },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'imageAlt',
      type: 'string',
    }),
    defineField({
      name: 'imageSource',
      type: 'object',
      title: 'Image Source / Credit',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Source Name',
          description: 'For example: Freepik',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          title: 'Source URL',
          description: 'Link to the original source',
          validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['http', 'https']}),
        },
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
