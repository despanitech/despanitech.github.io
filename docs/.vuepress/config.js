module.exports = {
    base: "/",
    temp: "docs/.vuepress/temp",
    title: 'Mobile Hub',
    description: 'DespaniTech Mobile team documentation',
    theme: "default-prefers-color-scheme",
    themeConfig: {
        overrideTheme: "dark",
        // nav: [
        //   { text: 'Home', link: '/' },
        //   { text: 'Guide', link: '/guide/' },
        //   { text: 'External', link: 'https://google.com' }
        // ],
        sidebar: [{
            sidebarDepth: 0,
            title: "XCode standards",
            collapsable: false,
            children: [
                "pages/code-standard/getting-started.md",
                "pages/code-standard/file-structure.md",
                "pages/code-standard/import-and-export.md",
                "pages/code-standard/components.md",
                "pages/code-standard/dumb-components.md",
                "pages/code-standard/smart-components.md",
                "pages/code-standard/styles.md",
                // "pages/code-standard/apollo-client.md",
            ]}
        ]
    }
  }