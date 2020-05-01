const PROXY_CONFIG = [
  {
      context: [
          "/bc-tob",
          "/bcsc",
          "/finance"
      ],
      target: "http://proxy-dev:8080",
      secure: false,
          logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;
