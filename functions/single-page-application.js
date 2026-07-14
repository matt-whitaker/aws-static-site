function handler(event) {
  var req = event.request;
  var uri = req.uri;

  // pass through files with extensions and real asset paths
  if (uri.includes('.')) return req;

  req.uri = '/index.html';
  return req;
}
