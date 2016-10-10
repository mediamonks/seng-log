declare namespace globToRegExp
{
	interface globToRegExpStatic
	{
		(expression:string, options:any):RegExp
	}
}

declare var globToRegExp: globToRegExp.globToRegExpStatic;

declare module 'glob-to-regexp' {
	export = globToRegExp;
}
