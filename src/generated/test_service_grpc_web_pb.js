/**
 * @fileoverview gRPC-Web generated client stub for endpoints.testservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.endpoints = {};
proto.endpoints.testservice = require('./test_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.endpoints.testservice.PositionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.endpoints.testservice.PositionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.endpoints.testservice.PositionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.endpoints.testservice.PositionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.endpoints.testservice.GetPositionRequest,
 *   !proto.endpoints.testservice.Point>}
 */
const methodInfo_PositionService_GetPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.endpoints.testservice.Point,
  /** @param {!proto.endpoints.testservice.GetPositionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.endpoints.testservice.Point.deserializeBinary
);


/**
 * @param {!proto.endpoints.testservice.GetPositionRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.testservice.Point>}
 *     The XHR Node Readable Stream
 */
proto.endpoints.testservice.PositionServiceClient.prototype.getPosition =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/endpoints.testservice.PositionService/GetPosition',
      request,
      metadata,
      methodInfo_PositionService_GetPosition);
};


/**
 * @param {!proto.endpoints.testservice.GetPositionRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.endpoints.testservice.Point>}
 *     The XHR Node Readable Stream
 */
proto.endpoints.testservice.PositionServicePromiseClient.prototype.getPosition =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/endpoints.testservice.PositionService/GetPosition',
      request,
      metadata,
      methodInfo_PositionService_GetPosition);
};


module.exports = proto.endpoints.testservice;

