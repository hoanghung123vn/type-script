// Hoàn thành các đoạn code dưới đây

/**
 * 1. Implement a generic that checks if
 *    a type is an set.
 */
 namespace isSet {
  type IsSet<T> = TODO;

  type res1 = IsSet<Set<number>>; // true
  type res2 = IsSet<["a", "b", "c"]>;// false
}

/**
 * 2.The `getProp` function takes a key and an object.
 *  - If the key exists on the object, the return type
 *    of `getProp` should be the type of the corresponding
 *    value.
 *  - Otherwise the return type should be `undefined`.
 */
 namespace getProp {
  type GetProp<Key, Obj> = TODO

  function getProp<K extends string, O extends {}>(
    key: K,
    obj: O
  ): GetProp<K, O> {
    return (obj as any)[key];
  }

  const res1 = getProp("title", { title: "Conditional Types" }); //typeof res1 string

  const res2 = getProp("oops", { title: "Conditional Types" }); //typeof res2 undefined

}

/**
 * 3. implement a generic to extract the
 *    type parameter of a Promise.
 */
 namespace unwrapPromise {
  type UnwrapPromise<Input> = TODO;

  type res1 = UnwrapPromise<Promise<"Hello">>; // "Hello"

  type res3 = UnwrapPromise<"NOT A PROMISE">; // "NOT A PROMISE"
}

/**
 * 4. Implement the AND logical door:
 *    AND<true, true> => true
 *    AND<false, false> => false
 *    AND<true, false> => false
 *    AND<false, true> => false
 *
 * Hint: you can check several values at once by wrapping 
 *       them in a tuple type (pattern matching).
 */
 namespace and {
  type AND<A, B> = TODO;

  type res1 = AND<true, true>; // true

  type res2 = AND<false, false>; // false
}

/**
 * 5. implement a generic to extract the type of the
 *    `name` property from an object type.
 *
 * Note: This generic must also accept objects that
 *       Don't have a name property, and return 
 *       `undefined` in this case.
 */
 namespace getName {
  type GetName<Input> = TODO;

  type res1 = GetName<{ name: "Gabriel" }>; // "Gabriel"

  type res2 = GetName<{ name: string; age: number }>; // string

  type res3 = GetName<{ age: number }>; // undefined
}

/**
 *  5. Implement a generic that drops the first
 *     element of a tuple and returns all other
 *     elements.
 */
 namespace dropFirst {
  type DropFirst<Tuple extends any[]> = TODO;

  type res1 = DropFirst<[1, 2, 3]>; // [2, 3]

  type res2 = DropFirst<[1]>; // []

  type res3 = DropFirst<[]>; // []
}
