export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6298ec9d0c8c1403be2a905d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-388ehwtf",
                  apiId: "79af289c-a964-4f5c-ad33-af8efb86706f",
                },
                {
                  buildHookId: "6298ec9dfe89800446accf10",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oyz8b2jo",
                  apiId: "4298c081-60fd-455e-823a-43b09f4e190c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/robert-ds/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oyz8b2jo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
