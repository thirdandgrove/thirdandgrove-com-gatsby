module.exports = `
query {
  allResumatorJob {
    nodes {
      title
      description
      board_code
      status
    }
  }
}
`;
