const PROXY_CONFIG = [
  {
    context: [
      "/bc-tob",
      "/bcsc",
      "/finance",
      "/fraser-valley",
      "/liquor",
      "/surrey",
      "/worksafe",
      "/cpbc",
      "/gpid",
      "/topic"
    ],
    target: "http://proxy-dev:8080",
    secure: false,
    logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;
