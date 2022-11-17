// Example conditional types
type GoodPoint<N> = N extends 10 ? true : false;

type ok = GoodPoint<10>; // => true
type ko = GoodPoint<1>; // => false

// Type constraints
type If<A extends boolean, B, C> = A extends true ? B : C;

type a = If<true, number, string>; // number
type b = If<false, {}, []>; // []
type C = If<"Not boolean", {}, []>; // []

// Nested conditions
type GetColor<I> = I extends 0
    ? "red"
    : I extends 1
    ? "blue"
    : I extends 2
    ? "green"
    : "white";

type red = GetColor<0>;

type GetColor2<I extends 0 | 1 | 2 | 3> = {
    0: "red";
    1: "blue";
    2: "green";
    3: "white";
}[I];

type red2 = GetColor2<0>;

// Pattern Matching
type IsUser<T> = T extends { name: string; age: number } ? true : false;

type t1 = IsUser<{ name: "Gabriel" }>; // => false
type t2 = IsUser<{ name: "Alice"; age: 32 }>; // => true

type Plan = "basic" | "pro" | "premium";
type Role = "viewer" | "editor" | "admin";

// branching on several types by wrapping
// them in a tuple:
type CanEdit<P extends Plan, R extends Role> = [P, R] extends [
    "pro" | "premium",
    "editor" | "admin"
]
    ? true
    : false;

type t3 = CanEdit<"pro", "editor">; // => true
type t4 = CanEdit<"premium", "admin">; // => true

// The infer keyword
type GetRole<User> = User extends { name: string; role: infer Role }
    ? Role
    : never;

type admin = GetRole<{ name: "Gabriel"; role: "admin" }>;
// => 'admin'

type user = GetRole<{ role: "user" }>;
// Destructuring
type Fn<A> = A extends { a: { deeply: { nested: { prop: infer P } } } }
    ? P
    : never;

// infer with Tuples

type Head<tuple> = tuple extends [infer first, ...any] ? first : never;

type head1 = Head<["alpha", "beta", "gamma"]>; // => "alpha"
type head2 = Head<[]>; // => never

type Tail<tuple> = tuple extends [any, ...infer rest] ? rest : [];

type tail1 = Tail<["alpha", "beta", "gamma"]>; // => ["beta", "gamma"];
type tail2 = Tail<["alpha"]>; // => []

type FirstAndLast<tuple> = tuple extends [infer first, ...any[], infer last]
    ? [first, last]
    : [];

type FirstAndLast1 = FirstAndLast<[1]>; // => []
type FirstAndLas2 = FirstAndLast<[1, 2]>; // => [1, 2]

// infer with function types
type Parameters1<F> = F extends (...params: infer P) => any ? P : never;

type Func1 = (name: string, id: number) => string;

type params = Parameters1<Func1>; // => [name: string, id: number]

type ReturnType1<F> = F extends (...params: any[]) => infer R ? R : never;

type Func2 = (name: string, id: number) => string;

type returnType = ReturnType1<Func2>; // => string

// infer with custom generics
type SetValue<S> = S extends Set<infer V> ? V : never;

type numberValue = SetValue<Set<number>>; // => number

type MyGeneric<A, B> = { name: A; age: B };

type ExtractParams<S> = S extends MyGeneric<infer A, infer B> ? [A, B] : never;

type myParams = ExtractParams<MyGeneric<number, boolean>>;

type Test<T> = Set<T> extends infer Result ? Result : never;
