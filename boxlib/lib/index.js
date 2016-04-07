/**
  * @module BoxLib
  *  
  * The Box Content API gives you access to the content management features you see in our web app and lets you extend them for use in your own app. It strives to be RESTful and is organized around the main resources you're familiar with from the Box web interface.
  */

var configuration = require('./configuration'),
    FoldersController = require('./Controllers/FoldersController'),
    FilesController = require('./Controllers/FilesController'),
    SharedController = require('./Controllers/SharedController'),
    CommentsController = require('./Controllers/CommentsController'),
    CollaborationsController = require('./Controllers/CollaborationsController'),
    SearchController = require('./Controllers/SearchController'),
    EventsController = require('./Controllers/EventsController'),
    UsersController = require('./Controllers/UsersController'),
    TasksController = require('./Controllers/TasksController'),
    TaskController = require('./Controllers/TaskController'),
    GroupsController = require('./Controllers/GroupsController'),
    GroupController = require('./Controllers/GroupController'),
    NewItem = require('./Models/NewItem'),
    FolderUpdate = require('./Models/FolderUpdate'),
    NewFolder = require('./Models/NewFolder'),
    FoldersRequest = require('./Models/FoldersRequest'),
    FileVersionPromote = require('./Models/FileVersionPromote'),
    FileInformationUpdate = require('./Models/FileInformationUpdate'),
    Parent95 = require('./Models/Parent95'),
    SharedLink96 = require('./Models/SharedLink96'),
    CommentUpdate = require('./Models/CommentUpdate'),
    CommentsRequest = require('./Models/CommentsRequest'),
    CollaborationsRequest = require('./Models/CollaborationsRequest'),
    StatusEnum = require('./Models/StatusEnum'),
    CollaborationsRequest133 = require('./Models/CollaborationsRequest133'),
    StreamTypeEnum = require('./Models/StreamTypeEnum'),
    NewEmailAlias = require('./Models/NewEmailAlias'),
    UserFolderMove = require('./Models/UserFolderMove'),
    UserUpdate = require('./Models/UserUpdate'),
    UsersRequest = require('./Models/UsersRequest'),
    TaskUpdate = require('./Models/TaskUpdate'),
    TasksRequest = require('./Models/TasksRequest'),
    TaskAssignmentUpdate = require('./Models/TaskAssignmentUpdate'),
    TaskAssignmentsRequest = require('./Models/TaskAssignmentsRequest'),
    Group211 = require('./Models/Group211'),
    GroupsRequest = require('./Models/GroupsRequest'),
    UpdateMembership = require('./Models/UpdateMembership'),
    NewGroupMembership = require('./Models/NewGroupMembership'),
    User225 = require('./Models/User225'),
    Group226 = require('./Models/Group226');


function initializer(){}

//Main functional components of BoxLib
initializer.configuration = configuration;
initializer.FoldersController = FoldersController;
initializer.FilesController = FilesController;
initializer.SharedController = SharedController;
initializer.CommentsController = CommentsController;
initializer.CollaborationsController = CollaborationsController;
initializer.SearchController = SearchController;
initializer.EventsController = EventsController;
initializer.UsersController = UsersController;
initializer.TasksController = TasksController;
initializer.TaskController = TaskController;
initializer.GroupsController = GroupsController;
initializer.GroupController = GroupController;

//Main Models of BoxLib
initializer.NewItem = NewItem;
initializer.FolderUpdate = FolderUpdate;
initializer.NewFolder = NewFolder;
initializer.FoldersRequest = FoldersRequest;
initializer.FileVersionPromote = FileVersionPromote;
initializer.FileInformationUpdate = FileInformationUpdate;
initializer.Parent95 = Parent95;
initializer.SharedLink96 = SharedLink96;
initializer.CommentUpdate = CommentUpdate;
initializer.CommentsRequest = CommentsRequest;
initializer.CollaborationsRequest = CollaborationsRequest;
initializer.StatusEnum = StatusEnum;
initializer.CollaborationsRequest133 = CollaborationsRequest133;
initializer.StreamTypeEnum = StreamTypeEnum;
initializer.NewEmailAlias = NewEmailAlias;
initializer.UserFolderMove = UserFolderMove;
initializer.UserUpdate = UserUpdate;
initializer.UsersRequest = UsersRequest;
initializer.TaskUpdate = TaskUpdate;
initializer.TasksRequest = TasksRequest;
initializer.TaskAssignmentUpdate = TaskAssignmentUpdate;
initializer.TaskAssignmentsRequest = TaskAssignmentsRequest;
initializer.Group211 = Group211;
initializer.GroupsRequest = GroupsRequest;
initializer.UpdateMembership = UpdateMembership;
initializer.NewGroupMembership = NewGroupMembership;
initializer.User225 = User225;
initializer.Group226 = Group226;

module.exports = initializer;