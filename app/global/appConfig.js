module.exports = {
	"port":process.env.OPENSHIFT_NODEJS_PORT || 3000,
	"ip":process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
	"mongooseUrl":process.env.OPENSHIFT_MONGODB_DB_URL||'mongodb://silveruser:silveruser@ds151117.mlab.com:51117/newzy',
	"apiKey":"c99330ce651f46a0b79f9943bffd9744",
	"mainUrl":"https://newsapi.org/v1/articles?"
}
