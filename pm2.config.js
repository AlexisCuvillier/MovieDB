module.exports = {
    apps : [
      {
        name      : "test",
        script    : "npx",
        interpreter: "none",
        args: "serve -s build -p 3010"
      }
    ]
  }