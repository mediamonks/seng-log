import Log from '../src/lib/Log';
import * as Cookies from 'js-cookie';
import chai = require('chai');
import sinonChai = require('sinon-chai');
import sinon = require('sinon');

const {expect} = chai;

chai.use(sinonChai);

let _cookieName = '__debug__';

describe('Log', () =>
{
	Cookies.remove(_cookieName);

	describe('#addNamespaceToCookie', () =>
	{
		describe('without __debug__ cookie name set', () =>
		{
			Cookies.remove(_cookieName);

			let namespace = 'test';

			Log.addNamespaceToCookie(namespace);

			it('should set the cookie name', () =>
			{
				expect(Cookies.get(_cookieName)).to.equal(namespace);
			});

			it('should add namespace', () =>
			{
				let newNamespace = 'test_new';

				Log.addNamespaceToCookie(newNamespace);
				expect(Cookies.get(_cookieName)).to.equal(`test|${newNamespace}`);
			});

		});

	});

	describe('#stubs', () =>
	{
		const namespace = 'test';
		const L = new Log(namespace);
		//const stub = sinon.spy(L, 'log');

		console.log('oohh yes', L.log('T'));
		it('slog method should be called', () =>
		{
			//L.log('T');

			//expect(stub).to.have.been.called;
		});
	});
});
