
/**
 * BoxLib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/07/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UserFolderMove
 *
 * @constructor
 */
function UserFolderMove() {
    this.ownedBy = null;     
    this.id = null;     
    //Append to variable dictionary
    this._variableDict['ownedBy'] = 'owned_by';
}

UserFolderMove.prototype = new BaseModel();
UserFolderMove.prototype.constructor = BaseModel;

/**
 * The user who the folder will be transferred to.
 *
 * @return {string|null}
 */
UserFolderMove.prototype.getOwnedBy = function() {
    return this.ownedBy;
};

/**
 * Setter for OwnedBy
 * 
 * @param {string|null} value 
 */
UserFolderMove.prototype.setOwnedBy = function(value) {
    this.ownedBy = value;
};

/**
 * The ID of the user who the folder will be transferred to.
 *
 * @return {string|null}
 */
UserFolderMove.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string|null} value 
 */
UserFolderMove.prototype.setId = function(value) {
    this.id = value;
};

module.exports = UserFolderMove;