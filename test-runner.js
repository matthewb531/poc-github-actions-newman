const newman = require('newman');

console.log("Running newman tests...");
const filePath = ('./tests/reqres-API.postman_collection.json');

newman.run({
  collection: require(filePath),
  reporters: ["htmlextra"],
  reporter: {
    htmlextra: {
    export: './tests/report/report.html'
    }
  },
  timeoutSript: 10000,
  timeoutRequest: 10000,
  insecure: true,
}, function (err) {
  if (err) {
    console.log('test fails ...', filePath);
    throw err;
  };
  console.log('tests complete.');
});
