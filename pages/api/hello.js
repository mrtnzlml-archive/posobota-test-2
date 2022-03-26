import { graphql, buildSchema } from "graphql";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Construct a schema, using GraphQL schema language
  const schema = buildSchema(`
  type Talk {id:ID,title:String}
  type Query {
    hello: [Talk]
  }
`);

  // The rootValue provides a resolver function for each API endpoint
  const rootValue = {
    hello: () => {
      return [
        { id: 1, title: "Aaa" },
        { id: 2, title: "Bbb" },
        { id: 3, title: "Ccc" }
      ];
    }
  };

  // Run the GraphQL query '{ hello }' and print out the response
  graphql({
    schema,
    source: req.body,
    rootValue
  }).then(response => {
    // console.log(response);
    res.status(200).json(response);
  });
}
