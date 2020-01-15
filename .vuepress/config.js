const { fs, path } = require('@vuepress/shared-utils')


// 读取blog 文件目录下的内容
let listBlogFiles = fs
.readdirSync(path.resolve(__dirname, '../blog/'))
.filter(f => f !== "README.md")
.map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
.sort();

listBlogFiles = [['', '深度好文'], ...listBlogFiles];

function getBlogSidebarList() {
  return [
    {
      title: "博客",
      collapsable: false,
      sidebarDepth: 3,
      children: listBlogFiles
    }
  ];
}

// 读取idea 文件下的内容
let listIdeaFiles = fs
.readdirSync(path.resolve(__dirname, '../idea/'))
.filter(f => f !== "README.md")
.map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
.sort();

listIdeaFiles = [['', '开源项目'], ...listIdeaFiles];

function getIdeaSidebar() {
  return [
    {
      title: "IDEA 从入门到精通",
      collapsable: false,
      sidebarDepth: 3,
      children: listIdeaFiles
    }
  ];
}

module.exports = {
  title: "tool-tips",
  description: "小西博客",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "IDEA", link: "/idea/" },
      { text: "博客", link: "/blog/" }
    ],
    sidebar: {
      "/idea/": getIdeaSidebar(),
      "/blog/": getBlogSidebarList()
    },
  }
};
