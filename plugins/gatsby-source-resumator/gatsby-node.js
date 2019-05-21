/* eslint-disable no-console */
const fetch = require('node-fetch');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  if (!configOptions.apiKey) {
    console.log(`API Key is required for Resumator Source`);
    return;
  }
  const processDatum = node => {
    return {
      ...node,
      id: createNodeId(node.id),
      parent: null,
      children: [],
      internal: {
        type: `resumatorJob`,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    };
  };

  console.log('Fetching data from Resumator/JazzHR API');

  const data = await fetch(
    `https://api.resumatorapi.com/v1/jobs?apikey=${configOptions.apiKey}`,
    {
      type: 'get',
      headers: null,
      dataType: 'json',
    }
  ).then(res => res.json());

  if (!data.error) {
    data.map(datum => createNode(processDatum(datum)));
  } else {
    console.log(data.error);
  }
};
