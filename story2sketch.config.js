module.exports = {
  url: "http://localhost:6006/iframe.html",
  // input: "storybook-static/iframe.html",
  output: "story2sketch/stories.asketch.json",
  stories: "all",
  verbose: false,
  concurrency: 1,
  puppeteerOptions: {headless: false},
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
