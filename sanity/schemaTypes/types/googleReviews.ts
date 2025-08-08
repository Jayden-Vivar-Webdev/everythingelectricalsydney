import { defineField } from 'sanity';

export const googleReviews = {
  name: 'googleReviewsBlockSection',
  title: 'Google Reviews',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Google Reviews',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'See what our customers are saying about their experience with us',
    }),
    defineField({
      name: 'overallRating',
      title: 'Overall Rating',
      type: 'number',
      initialValue: 4.9,
      validation: Rule => Rule.min(0).max(5),
    }),
    defineField({
      name: 'totalReviews',
      title: 'Total Reviews',
      type: 'number',
      initialValue: 247,
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: ['light', 'dark'],
        layout: 'radio'
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'showViewAllButton',
      title: 'Show "View All" Button',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'review',
          fields: [
            {
                name: 'id',
                title: 'Review ID',
                type: 'number',
                description: 'A unique ID for this review',
                validation: Rule => Rule.required(),
              },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'avatar', title: 'Avatar URL', type: 'url' },
            { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(0).max(5) },
            { name: 'timeAgo', title: 'Time Ago', type: 'string' },
            { name: 'text', title: 'Review Text', type: 'text' },
            { name: 'helpful', title: 'Helpful Count', type: 'number' }
          ]
        }
      ]
    }),
  ],
};
