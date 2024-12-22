// 1. Funksiya uchun xato tashlash

// 1-misol

// Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:


// import { faktorial } from "./function.js";

// let num = 6;

// try {
//     const number = faktorial(num); 
//     console.log(number.toString()); 
// } catch (error) {
//     console.error("Xatolik yuz berdi:", error.message); 
// }

// ============================

// 2-misol

// Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:

// 1 Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:
// Xato xabari: "Massiv uzatilmadi!".

// 2 Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:
// Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".

// 3 Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.

// import { value } from "./function.js";

// let num = [4, 130, 10, 10]

// console.log(value(num));

// ============================

// Massivlarga oid masalalar

// 1-misol

// Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.

// import { binder1 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(binder1(num));

// ============================

// 2-misol

// Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.

// import { binder2 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(binder2(num));

// ============================

// 4-misol

// Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.

// import { binder4 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(binder4(num));

// ============================

// 5-misol

// Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.

// import { binder5 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(binder5(num));

// ============================

// 6-misol

// Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.

// import { binder6 } from "./function.js";

// let num = [2, 3, 4, 3, 8, 10, 5, 6, 7, 8, 9, 10];
// let value = 10;

// let count = binder6(num, value);
// console.log(`${value} soni ${count} mata qatnashagan `);

// ============================

// 7-misol

// Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.

// import { binder7 } from "./function.js";

// let text = ["olma", "ananas", "nok"];

// console.log(binder7(text));

// ============================

// 8-misol

// Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).b

// import {binder8} from "./function.js"

// let text1 = ["non", "kon", "olma", "nok"]

// console.log(binder8(text1));

// ============================

// 9-misol

// import { binder9 } from "./function.js";

// let num = [2, 3, 4, 5, -6, 7, 8, -9, -123];

// console.log(binder9(num));

// ============================

// 10-misol

// Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.

// import { binder10 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, ];

// console.log(binder10(num));

// ============================

// 12-misol

// Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.

// import { binder12 } from "./function.js";

// let text = ["sunnatullo"]

// console.log(binder12(text));

// ============================

// 13-misol

// Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

// import {binder13} from "./function.js"

// let text1 = ["ananas", "kon", "olma", "nok"]

// console.log(binder13(text1));

// ============================

// 14-misol

// Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).

// import { binder14 } from "./function.js";

// let num = [1, 3, 5, 6, 7, 8, 9, 90]

// console.log(binder14(num));

// ============================

// 15-misol

// Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.

// import { binder15 } from "./function.js";

// let text = "salom hello";

// console.log(binder15(text));

// ============================

// 16-misol

// Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.

// import { binder16 } from "./function.js";

// let text = "sunnatullo";

// console.log(binder16(text));

// ============================

// 17-misol

// Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.

// import { binder17 } from "./function.js";

// let text = "sunnatullo";

// console.log(binder17(text));

// ============================

// 18-misol

// Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.

// import { binder18 } from "./function.js";

// let text = "SuNNatuLLo";

// console.log(binder18(text));

// ============================

// 19-misol

// Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.

// import { binder19 } from "./function.js";

// let text = "1, 2, 3, 4, 5"

// console.log(binder19(text));

// ============================

// 20-misol

// Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.

// import { binder20 } from "./function.js";

// let text = "sunnatullo";

// console.log(binder20(text));

// ============================

// 21-misol

// Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.

// import { binder21 } from "./function.js";

// let text = "sunnatullo";

// console.log(binder21(text));

// ============================

// 22-misol

// import { binder22 } from "./function.js";

// let text = "sunnatullo";

// console.log(binder22(text));

// ============================

// 23-misol

// import { binder23 } from "./function.js";

// let text = ["sunnatullo", "valiyev"];

// console.log(binder23(text));

// ============================

// 24-misol

// Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.

// import { binder24 } from "./function.js";

// let text = ["valiyev", "sunnatullo"];

// console.log(binder24(text));

// ============================

// 25-misol

// Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.

// import { binder25 } from "./function.js";

// let text = ["valiyev", "sunnatullo"];

// console.log(binder25(text));

// ============================

// 26-misol

// Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

// import { binder26 } from "./function.js";

// let text = ["banan", "olma", "nok", "nok", "kon"];

// console.log(binder26(text));