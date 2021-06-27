// @noUnusedParameters: false

import classWithoutCallParentConstructor, { createNewTargetObject } from './index';

describe(`describe`, () =>
{

	class A
	{
		constructor(a: any, b: any)
		{
			console.log("A.constructor");
			throw new Error('should not call A.constructor')
			a;
			b;
		}

		parentMethod()
		{
			console.log("A.parentMethod()");

			return "A.parentMethod()"
		}
	}

	test(`@ts-expect-error`, () =>
	{

		class B extends A
		{
			// @ts-expect-error
			constructor()
			{

			}
		}

		// @ts-ignore
		expect(() => new A).toThrowError();
		expect(() => new B).toThrowError();

	});

	test(`classWithoutCallParentConstructor`, () =>
	{
		class B extends classWithoutCallParentConstructor(A)
		{
			constructor()
			{
				super();
			}

			childMethod()
			{
				console.log("B.childMethod()");
				return "B.childMethod()"
			}
		}

		expect(() => new B).not.toThrowError();

		let actual = new B;

		expect(actual).toHaveProperty('parentMethod')
		expect(actual).toHaveProperty('childMethod')

		expect(actual.parentMethod()).toStrictEqual('A.parentMethod()')
		expect(actual.childMethod()).toStrictEqual('B.childMethod()')

	});

	test(`createNewTargetObject`, () =>
	{
		class B extends A
		{
			// @ts-ignore
			constructor()
			{
				return createNewTargetObject(new.target)
			}

			childMethod()
			{
				console.log("B.childMethod()");
				return "B.childMethod()"
			}
		}

		expect(() => new B).not.toThrowError();

		let actual = new B;

		expect(actual).toHaveProperty('parentMethod')
		expect(actual).toHaveProperty('childMethod')

		expect(actual.parentMethod()).toStrictEqual('A.parentMethod()')
		expect(actual.childMethod()).toStrictEqual('B.childMethod()')

	});

})
