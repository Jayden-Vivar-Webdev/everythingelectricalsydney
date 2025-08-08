import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featureCard',
  title: 'Feature Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon (Emoji or Icon Code)',
      type: 'string',
      description: 'Example: 📞 or use a code from your icon system',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      media: 'icon',
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: subtitle,
        media: media ? () => media : undefined,
      }
    },
  },
});
