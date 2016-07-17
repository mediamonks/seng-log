import Log from '../src/lib/Log';
import Cookies = require('js-cookie');
import {expect} from 'chai';

describe('Log', () =>
{
	describe('#addNamespaceToCookie', () =>
	{
		let namespace = 'test';

		Log.addNamespaceToCookie(namespace);

		describe('without __debug__ cookie name set', () =>
		{
			it('should set the cookie name and add namespace', () =>
			{
				expect(Cookies.get('__debug__')).to.equal(`__debug__|${namespace}`);
			});
		});

	});

});
