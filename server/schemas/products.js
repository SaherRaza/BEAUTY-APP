import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'bgImage',
    //   title: 'BG image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options:{
        list:[
          {title: 'Body Lotion', value: 'bodyLotion'},
          {title: 'Facial Care', value: 'facialCare'},
          {title: 'Mouth Cleanser', value:'MouthCleanser'},
          {title: 'Hair Care', value: 'HairCare'},
        ],
        layout:'radio'
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description:'The price of the product in USD',
      validation:(Rule) => Rule.required().positive(),
      options:{
        format: 'currency',
      }

    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
  ],

})
