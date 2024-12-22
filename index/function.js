export function faktorial(num) {
    if (num <= 0 || typeof num !== "number") {
        throw new Error("Son musbat va raqam turi bo'lishi kerak");
    }
    let res = BigInt(1);
    for (let i = 1; i <= num; i++) {
        res *= BigInt(i);
    }
    return res;
}


export function value(arr) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error("Massiv uzatilmadi!");
        }

        if (!arr.every(item => typeof item === 'number')) {
            throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
        }

        const sum = arr.reduce((num1, num) => num1 + num, 0);
        const res = sum / arr.length;
        return res;

    } catch (error) {
        console.error(`Xato yuz berdi: ${error.message}`);
    }
}


export function binder1(arr) {
    return arr.filter(num => num % 2 === 0).reduce((res, num) => res + num, 0);
}

export function binder2(arr) {
    return arr.filter(num => num % 2 === 0);
}

export function binder4(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

export function binder5(arr) {
    return [...arr].reverse();
}

export function binder6(arr, value) {
    return arr.filter(num => num === value).length;
}

export function binder7(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}

export function binder8(arr) {
    const num = Math.ceil(arr.length / 2);
    return [arr.slice(0, num), arr.slice(num)];
}


export function binder9(arr) {
    return arr.filter(num => num > 0);
}

export function binder10(arr) {
    const sum = arr.reduce((res, num) => res + num, 0);
    return sum / arr.length;
}

export function binder12(arr) {
    return arr.map(text => text.toUpperCase());
}

export function binder13(arr) {
    const min = arr.reduce((res, text) => (text.length < res.length ? text : res));
    const max = arr.reduce((res, text) => (text.length > res.length ? text : res));
    return [min, max];
}

export function binder14(arr) {
    return arr.map(num => String(num));
}

export function binder15(str) {
    return str.split(" ").reverse().join(" ");
}

export function binder16(str) {
    return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}

export function binder17(str, word) {
    return str.split(" ").filter(num => num === word).length;
}

export function binder18(str) {
    return str.split("").map(text => text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase()).join("");
}

export function binder19(str) {
    return (str.match(/\d/g) || []).reduce((res, num) => res + Number(num), 0);
}

export function binder20(str) {
    return str.split("").reverse().join("");
}

export function binder21(str) {
    return str.split(" ").map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(" ");
}

export function binder22(str) {
    return str.split(" ").sort();
}

export function binder23(arr) {
    return arr.join(" "); 
}

export function binder24(arr) {
    return arr.reduce((res, text) => (text.length > res.length ? text : res));
}

export function binder25(arr) {
    return arr.map(text => text.split("").reverse().join(""));
}

export function binder26(str) {
    const words = str.split(" ");
    return words.filter((text, index, self) => self.indexOf(text) === index);
}
