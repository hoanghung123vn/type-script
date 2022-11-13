// Hoàn thành các đoạn code dưới đây


// Bài tập 01: Hàm safeHead trả ra vị trí đầu tiên của mảng, làm cho nó trở nên tổng quát.
namespace safeHead {

    function safeHead(array: TODO[], defaultValue: TODO): TODO {
        return array[0] ?? defaultValue;
    }

    let input1 = [1, 2, 3];
    let res1 = safeHead(input1, 0); // 1

    let input2 = ["Hello", "world"];
    let res2 = safeHead(input2, "default");
}

//Bài tập 02: Hàm pide nhận vào 1 giá trị và 2 function, giá trị đầu tiên là đầu vào của hàm đầu tiên,
//đầu ra của funtion trước là đầu vào của function tiếp theo, hãy làm cho nó trở nên tổng quát.
namespace pipe {

    function pipe(
        x: TODO,
        f1: (value: TODO) => TODO,
        f2: (value: TODO) => TODO
    ): TODO {
        return f2(f1(x));
    }

    let res1 = pipe(
        [1, 2, 3],
        arr => arr.length,
        length => `length: ${length}`
    );

    let res2 = pipe(
        { name: 'Alice' },
        user => user.name,
        name => name.length > 5
    );

}

// Bài tập 03: Hàm pickOne lựa chọn ngẫu nhiên a hoặc b để trả về, tìm kiểu của các tham số và giá trị trả về?
namespace pickOne {

    function pickOne(a: TODO, b: TODO): TODO {
        return Math.random() > 0.5 ? a : b;
    }

    const res1 = pickOne(true, false);

    const res3 = pickOne(2, "some string");

    const res4 = pickOne(true, 7);
}

// Bài tập 04: Hàm merge nhận vào 2 đối tượng, trả về đối tượng với tất cả các thuộc tính của các tham số
namespace merge {
    function merge(a: TODO, b: TODO): TODO {
        return { ...a, ...b };
    }

    const res1 = merge({ name: "Bob" }, { age: 42 });

    const res2 = merge({ greeting: "Hello" }, {});

    const res3 = merge({}, { greeting: "Hello" });

    const res4 = merge({ a: 1, b: 2 }, { c: 3, d: 4 });

}

// Bài tập 05: Kiểu tổng quát Keys lấy ra tất cả các key của tham số đầu vào
namespace keys {
    type Keys<Obj> = TODO;

    type res1 = Keys<{ a: number; b: string }>; // "a" | "b"

    type res2 = Keys<{ a: number; b: string; c: unknown }>;

    type res3 = Keys<{}>;

    type res4 = Keys<{ [k in string]: boolean }>;
}

// Bài tập 06: Kiểu tổng quát ValueOf lấy ra union các kiểu của tất cả các key
namespace valueof {
    type ValueOf<Obj> = TODO;

    type res1 = ValueOf<{ a: number; b: string }>; // number | string

    type res2 = ValueOf<{ a: number; b: string; c: boolean }>;

    type res3 = ValueOf<{}>;

    type res4 = ValueOf<{ [k in string]: boolean }>;
}


// Bài tập 07: Kiểu Assign nhận vào 2 tham số kiểu, trả ra 1 kiểu sẽ ghi đè tất cả các thuộc tính bị trùng của A bằng B
namespace assign {
    type Assign<A, B> = TODO;

    const assign = <A, B>(obj1: A, obj2: B): Assign<A, B> => ({
        ...obj1,
        ...obj2,
    });

    // Override `id`
    type res1 = Assign<{ name: string; id: number }, { id: string }>; // { name: string; id: string }
}
