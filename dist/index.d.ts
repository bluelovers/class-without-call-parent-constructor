export declare type IConstructor = (new (...argv: any) => any) | (new () => any);
export declare function createNewTargetObject<T extends IConstructor>(createNew: T): InstanceType<T>;
export declare function classWithoutCallParentConstructor<T extends IConstructor>(parentClass: T): new () => InstanceType<T>;
export default classWithoutCallParentConstructor;
