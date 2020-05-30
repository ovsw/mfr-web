// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = function (event, context, callback) {
  // your server-side functionality
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: 'Hello, World! ' + Math.round(Math.random() * 10)
    })
  })
}
