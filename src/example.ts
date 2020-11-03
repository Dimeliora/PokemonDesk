// ======================= Задание №1 =======================
type funcType = (a: string, b: string) => string;
const concat: funcType = (str1, str2) => {
    return str1 + str2;
};

// ======================= Задание №2 =======================
interface simeArrayInterface {
    [i: number]: string | number;
}

interface withDataInterface {
    [i: number]: { howIDoIt: string; simeArray: simeArrayInterface };
}

interface MyHometaskInterface {
    howIDoIt: string;
    simeArray: simeArrayInterface;
    withData: withDataInterface;
}

const MyHometask: MyHometaskInterface = {
    howIDoIt: 'I Do It Wel',
    simeArray: ['string one', 'string two', 42],
    withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// ======================= Задание №3 =======================
interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (prev: U, el: T, idx: number, arr: T[]) => U, init: U): U;
}

const arr: MyArray<string> = ['a', 'b', 'c'];
const str = arr.reduce((acc, el) => acc + el.toUpperCase(), '');
