## Pick

- Pick allow you to create a new type by selecting a set of properties (Keys) from a existing type (Type).
- Pick<Type, Key | key ..>
- Type: jisme se properties uthani hain.
- Keys: ek union of property names jo aapko select karni hain.

## Partial

- Partial makes all properties of a type optional, creating a type with the same  properties, but each marked as optional.
- just use "?" to make what ever u wana make optional!
- Select partially

## Readonly

- When u ever have a configuration object that should not be altered after initilization , makeing it Readonly ensures its porperties cannot be changed.
- constants on internal values.

## Record

- Records lets u give a cleanner type to opbject
- Record<Keys, Type>
- whenever we have objects we will se Record
- We can de structure the Type for more complex storage!
- Record is only in TS, not in JS

## Map
- const users = new Map<string, number>();
- similar as js get set delete iterate over data

## Event

- Exclude<T, U>
- Used when we want to exclude some value or something from the input or give data.

## Zod Inferecne

- used for the infereing the zod type, gettig the exact type out of the zod schema
- z.infer<typeof SCHEMA_NAME>