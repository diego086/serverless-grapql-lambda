# Introduction
This is a sample graphql api base on https://github.com/serverless/serverless-graphql to create the back end of the twitter api using:

- Graphql
-- [Apollo-server](https://github.com/apollographql/apollo-server). Specifically the package [apollo-server-lambda](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda)
- Aws Lambda & AWS API Gateway
- AWS RDS (MYSQL)

Not using AWS AppSync in order to have the posibility to have a local instance of all.


#Improvments
I would like to integrate graphql-yoga instead of apollo-serve





# Serverless GraphQL

This starter kit is an opinionated set of tools combined to help you get started building a Serverless application with an GraphQL endpoint and deploy them to production in minutes.

This example uses the following technologies:

- Frontend
  - [AWSAppSyncClient](http://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-react.html)
  - [Apollo Client 2.0](https://github.com/apollographql/apollo-client)
  - [React App](https://github.com/facebookincubator/create-react-app)
  - [GraphiQL](https://github.com/graphql/graphiql)
  - [GraphQL Playground (GraphiQL replacement)](https://github.com/graphcool/graphql-playground)
  - [Netlify Integration](https://www.netlify.com/)

- Backend
  - [Serverless](https://serverless.com/framework/docs/)
  - [AWS Lambda](https://aws.amazon.com/lambda/) & [AWS API Gateway](https://aws.amazon.com/documentation/apigateway/)
  - [Apollo Lambda GraphQL Server](https://www.npmjs.com/package/apollo-server-lambda)

  - [RDS (MySQL, PostGres and Aurora)](https://aws.amazon.com/rds/)
  - [REST API](https://developer.twitter.com/en/docs)
  - Plugins
      - [Serverless Appsync Plugin](https://github.com/sid88in/serverless-appsync-plugin)
      - [Serverless Webpack](https://github.com/serverless-heaven/serverless-webpack)
      - [Serverless Offline](https://github.com/dherault/serverless-offline)


## Quick Setup

You need to have Node 6 or higher installed.

```
npm install -g serverless
npm install -g yarn
npm install -g netlify-cli
```

Install Dependencies.
```
yarn install
```

