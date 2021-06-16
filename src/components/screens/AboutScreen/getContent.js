import { gql } from 'graphql-request';
import { CMSGraphQLClient } from '../../../infra/cms/CMSGraphQLClient';

export default async function getContent() {
  const query = gql`
      query {
        pageSobre {
          pageTitle
          pageDescription
        }
      }
  `;
  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.messages;
}
