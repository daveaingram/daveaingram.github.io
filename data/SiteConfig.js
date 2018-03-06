module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your authors.
  blogAuthorId: "dave", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Dave Ingram", // Site title.
  siteTitleAlt: "Personal Site of Dave Ingram", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://daveingram.us", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "On Life, Technology and Whatever", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Dave Ingram", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-114992803-1", // GA tracking ID.
  disqusShortname: "daveingramus",
  siteSocialUrls: [
    "https://twitter.com/daveaingram",
    "https://facebook.com/daveaingram",
    "https://www.linkedin.com/in/daveaingram",
    "https://github.com/daveaingram",
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/daveaingram",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Facebook",
      url: "https://facebook.com/daveaingram",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/daveaingram",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "GitHub",
      url: "https://github.com/daveaingram",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Dave Ingram" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
