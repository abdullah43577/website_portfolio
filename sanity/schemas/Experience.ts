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
      description:
        "Display text shown on the site, e.g. '2021 - 2023' or 'Jan 2022 - Present'.",
      type: "string",
    },

    {
      name: "startDate",
      title: "Start Date",
      description:
        "Used only for sorting entries chronologically. This does not appear on the site — the 'Year' field above is what's displayed.",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },

    {
      name: "isCurrent",
      title: "Currently active",
      description:
        "Check this if you're still working or studying here. Used to sort this entry to the top of its list.",
      type: "boolean",
      initialValue: false,
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
