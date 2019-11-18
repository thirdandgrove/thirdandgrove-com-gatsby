module.exports = {
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
  encode: data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  },
};
