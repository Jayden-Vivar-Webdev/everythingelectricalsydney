import { defineField } from 'sanity';

export const dynamicServiceHero = {
  name: 'serviceHeroDynamic',
  title: 'Dynamic Service Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'titleSpan',
      type: 'string',
      title: 'Title Highlight',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Main Description',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true, // optional, for cropping
      },
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      validation: Rule => Rule.min(3),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
      title: 'CTA Text',
    }),
  ],
};
