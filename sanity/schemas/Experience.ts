export const Experiences = {
  name: "experience",
  title: "Experiences",
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
      name: "year",
      title: "Year",
      type: "string",
    },

    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Education", value: "edu" },
        ],
      },
    },
  ],
};
