
import { Code, FileText, GitFork, GitForkIcon, ScrollText } from "lucide-react";



export const sidebarConfig = {
  versions: ["1.0.1"],
  guide: [
    {
      title: "Introduction",
      url: "/guide",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "What is Plura?",
          url: "/guide/introduction/what-is-plura",
        },
        {
          title: "Why Plura?",
          url: "/guide/introduction/why-plura",
        },
        {
          title: "Features",
          url: "/guide/introduction/features",
        },
        {
          title: "Who can use Plura?",
          url: "/guide/introduction/who-can-use-plura",
        },
      ],
    },
    {
      title: "Getting Started",
      url: "/guide/getting-started",
      icon: FileText,
      items: [
        {
          title: "Installation",
          url: "/guide/getting-started/installation",

        },{
            title:"Add to existing repository",
            url:"/guide/getting-started/add-to-existing-repository"
        },{
            title:"Add to new repository",
            url:"/guide/getting-started/add-to-new-repository"
        }
      ],
    },
    // {
    //   title: "Installation",
    //   url: "/guide/installation",
    //   icon: Code,
    // },
    {
      title: "License",
      url: "/guide/license",
      icon: ScrollText,
    },
    {
      title: "Contribute",
      url: "/guide/contribute",
      icon: GitFork,
      items:[
        {
            title:"GitHub",
            url:"https://github.com/Plura-App/Plura",
        }
      ]
    },
  ],
};
