import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

// eslint-disable-next-line import/prefer-default-export
export async function getContent({ preview }) {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.messages;
}
