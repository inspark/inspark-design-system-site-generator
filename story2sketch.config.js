module.exports = {
  url: "http://localhost:6006/iframe.html",
  output: "story2sketch/stories.asketch.json",
  stories: "all",
  layoutBy: "kind",
  viewports: {
    narrow: {
      width: 320,
      height: 1200,
      symbolPrefix: "Mobile/"
    },
    standard: {
      width: 1920,
      height: 1200,
      symbolPrefix: "Desktop/"
    }
  }
};
