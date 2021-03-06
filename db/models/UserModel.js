var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username : {
		type : String,
		required : [true,'user name needed'],
	},
	usercode : {
		type : String,
		required : [true,'usercode is your login id']
	},
	password : {
		type : String,
		required : [true,'why no password?'],
	},
	email : {
		type : String,
		required : [true,'why no email?'],
	},
	gender : {
		type : String,
		enum : ['male','female'],
		default : 'male'
	},
	birthday : {
		type : Date,
		default : Date.now
	},
	idtype : {
		type : String
	},
	idno : {
		type : String
	},
	createdtime : {
		type : Date,
		required : true,
		default : Date.now
	},
	createdby : {
		type : String,
		required : true,
		default : 'admin'
	},
	role_id : {
		type : Schema.Types.ObjectId,
		ref: 'role',
		required : true
	}

},{collection:'user'});


User.statics = {
	findUserWithRole : function(paraJson,callback){
		return this.find(paraJson).populate('role_id').exec(callback);
	}
};


var UserModel = mongoose.model('user',User);

exports.UserSchema = User;
exports.UserModel = UserModel;