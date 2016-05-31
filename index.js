'use strict';
const ipRegex = require('ip-regex');

module.exports = opts => {
	opts = opts || {};

<<<<<<< HEAD
	const protocol = '(?:(?:[a-z]+:)?//)';
	const auth = '(?:\\S+(?::\\S*)?@)?';
	const ip = ipRegex.v4().source;
	const host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
	const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
	const tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?';
	const port = '(?::\\d{2,5})?';
	const path = '(?:[/?#][^\\s"]*)?';
	const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;
=======
	var tlds = opts.tlds ? opts.tlds.join('|') : 'a-z\\u00a1-\\uffff';

	var protocol = opts.protocols ? '(?:(?:' + opts.protocols.join('|') + ')://)' : '(?:(?:[a-z]+:)?//)';
	var auth = '(?:\\S+(?::\\S*)?@)?';
	var ip = ipRegex.v4().source;
	var host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
	var domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
	var tld = '(?:\\.(?:[' + tlds + ']{2,}))';
	var port = '(?::\\d{2,5})?';
	var path = '(?:[/?#][^\\s"]*)?';
	var regex = [
		protocol, auth, '(?:localhost|' + ip + '|' + host + domain + tld + ')',
		port, path
	].join('');
>>>>>>> add support for optional protocols and tlds

	return opts.exact ? new RegExp(`(?:^${regex}$)`, 'i') : new RegExp(regex, 'ig');
};
