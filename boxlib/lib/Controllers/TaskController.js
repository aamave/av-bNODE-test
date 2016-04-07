/**
 * BoxLib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/07/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var TaskController = {

    /**
     * Fetches a specific task assignment.
     * The specified task assignment object will be returned upon success.
     * @param {string} taskAssignmentsId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {TaskAssignmentsResponse}
     */
    getTaskAssignmentsByTaskAssignmentsId : function(taskAssignmentsId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.version);
        
        var queryBuilder = baseUri + "/task_assignments/{task_assignments_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "task_assignments_id" : taskAssignmentsId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Used to update a task assignment.
     * A new task assignment object will be returned upon success.
     * @param {TaskAssignmentUpdate} body    Required parameter: TODO: type description here
     * @param {string} taskAssignmentsId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {TaskAssignmentsResponse}
     */
    updateTaskAssignmentsByTaskAssignmentsId : function(body, taskAssignmentsId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.version);
        
        var queryBuilder = baseUri + "/task_assignments/{task_assignments_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "task_assignments_id" : taskAssignmentsId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //encapsulate params in to a single body object
        var bodyParams = {
            "body" : body
        };

        //Remove null values
        APIHelper.cleanObject(bodyParams);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PUT",
            headers: headers,
            body : APIHelper.jsonSerialize(bodyParams),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Deletes a specific task assignment.
     * An empty `204 No Content` response will be returned upon success.
     * @param {string} taskAssignmentsId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    deleteTaskAssignmentsByTaskAssignmentsId : function(taskAssignmentsId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.version);
        
        var queryBuilder = baseUri + "/task_assignments/{task_assignments_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "task_assignments_id" : taskAssignmentsId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Used to assign a task to a single user. There can be multiple assignments
     * on a given task.
     * A new task assignment object will be returned upon success.
     * @param {TaskAssignmentsRequest} body    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {TaskAssignment}
     */
    createTaskAssignments : function(body, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.version);
        
        var queryBuilder = baseUri + "/task_assignments";
        
        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //encapsulate params in to a single body object
        var bodyParams = {
            "body" : body
        };

        //Remove null values
        APIHelper.cleanObject(bodyParams);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(bodyParams),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    }

};

module.exports = TaskController;