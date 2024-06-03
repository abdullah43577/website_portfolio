export const Services = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "icon",
      title: "Icon",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "lists",
      title: "Lists",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
