import {defineField } from 'sanity'

export const contentImage = {
  name: 'contentSectionImage',
  title: 'Content With Single Image',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' }
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        }
      ]
    }),
    
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to action',
      type: 'string'
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      media: 'backgroundImage',
      title: 'title',
      subtitle: 'description',
    }
  }
};
