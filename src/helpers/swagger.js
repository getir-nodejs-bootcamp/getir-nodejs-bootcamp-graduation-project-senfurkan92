// swagger options
module.exports = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "1.0.0",
        description: "A simple Express Library API",
      },
      servers: [
        {
          url: "https://node-getir-final.herokuapp.com/",
        },
      ],
    },
    apis: ["./src/routers/*.js"],
}; 