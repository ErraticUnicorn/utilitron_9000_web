const { GetPositionRequest, Point } = require('./generated/test_service_pb.js');
const { PositionServiceClient } = require('./generated/test_service_grpc_web_pb.js');

var positionService = new PositionServiceClient('https://35.194.63.178');

var request = new GetPositionRequest();
console.log(positionService);
var response = positionService.getPosition(request, {})

response.on('data', (data) => {
  console.log('Received data');
  console.log(data);
})

response.on('error', (err) => {
  console.log('Something went wrong');
  console.log(err);
});

response.on('end', () => {
  console.log('Finished reading points');
})

console.log(response);
