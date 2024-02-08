export default {
  name: 'pictures',
  type: 'document',
  title: 'Pictures',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Preview Image (this is the image that is first displayed to the user)',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description (short description about the image)',
    },
  ],
}
