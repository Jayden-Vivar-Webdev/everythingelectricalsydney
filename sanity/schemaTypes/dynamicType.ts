import {defineType, defineField} from 'sanity'
import {googleReviews} from './types/googleReviews'
import {contentImage} from './types/content-image'
import {serviceHeroSection} from './types/service-hero'
import {dynamicServiceHero} from './types/service-dynamic-hero'
import {gallerySection} from './types/gallery'

//All Schemes for project
export const customSections = defineType({
  name: 'customSections',
  title: 'Custom Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {type: 'block'}, // Portable Text blocks for paragraphs, headings, etc.
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('You must provide alt text for accessibility'),
            }),
          ],
        },

        {
          name: 'imageGrid',
          title: 'Image Grid',
          type: 'object',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{type: 'image'}],
              validation: (Rule) => Rule.min(2).max(2),
            }),
          ],
        },
        googleReviews,
        gallerySection,
        contentImage,
        serviceHeroSection,
        dynamicServiceHero,
        {
          name: 'contentSection',
          title: 'Content Section',
          type: 'object',
          fields: [
            defineField({
              name: 'tag',
              title: 'Tag',
              type: 'string',
            }),
            defineField({
              name: 'header',
              title: 'header',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'subHeader',
              title: 'Sub Header',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'imageWithAlt',
                  title: 'Image',
                  fields: [
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {hotspot: true},
                    },
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Alt Text is Required'),
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'statsHeader',
              title: 'statsHeader',
              type: 'string',
            }),
            defineField({
              name: 'stats',
              title: 'Stats',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'statItem',
                  title: 'Stat Item',
                  fields: [
                    {
                      name: 'stat',
                      title: 'Stat Label',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Stat is required'),
                    },
                    {
                      name: 'value',
                      title: 'Stat Value',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Value is required'),
                    },
                  ],
                },
              ],
            }),
          ],
        },
        {
          name: 'featureSection',
          title: 'Feature Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'description',
              type: 'text',
            }),
            defineField({
              name: 'featureItems',
              title: 'Feature Item',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'stat',
                  title: 'Stat Item',
                  fields: [
                    defineField({name: 'name', title: 'Feature Title', type: 'string'}),
                    defineField({name: 'value', title: 'Feature Paragraph', type: 'text'}),
                  ],
                },
              ],
            }),
          ],
        },
        {
          name: 'ctaSection',
          title: 'Call To Action',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'buttons',
              title: 'Buttons',
              type: 'array',
              of: [
                {
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({name: 'label', title: 'Button Text', type: 'string'}),
                    defineField({name: 'url', title: 'URL', type: 'string'}),
                    defineField({
                      name: 'style',
                      title: 'Style',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Primary', value: 'primary'},
                          {title: 'Secondary', value: 'secondary'},
                        ],
                        layout: 'radio',
                      },
                    }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          name: 'separator',
          title: 'Separator',
          type: 'object',
          fields: [
            defineField({
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Line', value: 'line'},
                  {title: 'Dashed', value: 'dashed'},
                  {title: 'Stars', value: 'stars'},
                  {title: 'Blank Space', value: 'blank'},
                ],
                layout: 'radio',
              },
              initialValue: 'line',
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Separator',
                subtitle: 'Visual content break',
              }
            },
          },
        },

        {
          name: 'heroSection',
          title: 'Hero Section',
          type: 'object',
          fields: [
            defineField({
              name: 'announcementText',
              title: 'Announcement Text',
              type: 'string',
            }),
            defineField({
              name: 'announcementLink',
              title: 'Announcement Link',
              type: 'string',
            }),
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subheadline',
              title: 'Subheadline',
              type: 'string',
            }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'primaryCtaText',
              title: 'Primary CTA Text',
              type: 'string',
            }),
            defineField({
              name: 'primaryCtaUrl',
              title: 'Primary CTA URL',
              type: 'string',
            }),
            defineField({
              name: 'secondaryCtaText',
              title: 'Secondary CTA Text',
              type: 'string',
            }),
            defineField({
              name: 'secondaryCtaUrl',
              title: 'Secondary CTA URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'headline',
              subtitle: 'announcementText',
              media: 'backgroundImage',
            },
          },
        },
        {
          name: 'heroContact',
          title: 'Hero Contact Form',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Heading of the contact section',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Description or intro text below the title',
            }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Important for accessibility and SEO',
                  validation: (Rule) => Rule.required().error('Alt text is required'),
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'object',
              fields: [
                defineField({
                  name: 'line1',
                  title: 'Address Line 1',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'line2',
                  title: 'Address Line 2',
                  type: 'string',
                }),
                defineField({
                  name: 'cityStateZip',
                  title: 'City, State, ZIP',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string',
              validation: (Rule) => Rule.email().required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
        {
          name: 'servicesSection',
          title: 'Services Section',
          type: 'object',
          fields: [
            defineField({
              name: 'services',
              title: 'Services',
              type: 'array',
              of: [
                defineField({
                  name: 'serviceItem',
                  title: 'Service Item',
                  type: 'object',
                  fields: [
                    defineField({name: 'title', title: 'Title', type: 'string'}),
                    defineField({name: 'href', title: 'Link', type: 'string'}),
                    defineField({name: 'description', title: 'Description', type: 'text'}),
                    defineField({
                      name: 'image',
                      title: 'Main Image',
                      type: 'image',
                      options: {hotspot: true},
                      fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
                    }),
                    defineField({name: 'subtitle', title: 'Key Words', type: 'string'}),
                    defineField({
                      name: 'icon',
                      title: 'Icon',
                      type: 'object',
                      fields: [defineField({name: 'name', title: 'Name', type: 'string'})],
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Services Section',
                subtitle: 'Displays a grid of services or posts',
              }
            },
          },
        },

        {
          name: 'gridInfo',
          title: 'Grid Information',
          type: 'object',
          fields: [
            defineField({
              name: 'features',
              title: 'Feature Cards',
              type: 'array',
              of: [{type: 'featureCard'}],
            }),
          ],
        },
      ],
    }),
  ],
})
