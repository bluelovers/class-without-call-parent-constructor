
export type IConstructor = (new (...argv: any) => any) | (new () => any)

export function createNewTargetObject<T extends IConstructor>(createNew: T): InstanceType<T>
{
  return Object.create(createNew.prototype)
}

export function classWithoutCallParentConstructor<T extends IConstructor>(parentClass: T): new () => InstanceType<T>
{
  return class extends parentClass
  {
    // @ts-ignore
    constructor()
    {
      return createNewTargetObject(new.target as T)
    }
  }
}

export default classWithoutCallParentConstructor
