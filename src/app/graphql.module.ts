import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink } from '@apollo/client/core';
import { environment } from './environment/environment.prod';

const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink) {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    return forward(operation);
  });

  const link = ApolloLink.from([authLink, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
