module.exports = {
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
};
