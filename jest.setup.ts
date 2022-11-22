// Set envs here, because Jest freezes those when started (no programmatical change/addition possible afterwards)
// cf. https://github.com/facebook/jest/issues/8449#issuecomment-612788383
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports = () => undefined;
