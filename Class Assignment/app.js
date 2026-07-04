console.log("Js Is Running!");



// Higher Order Function kya hota hai?
// Kya map() ek higher order function hai?
// Kya forEach() value return karta hai?
// Ek example do Higher Order Function ka.
// Callback function kya hota hai?
// Ek function banao jo dusre function ko parameter me le.
// filter() ka use kis liye hota hai?
// reduce() ka basic purpose kya hai?
// find() aur filter() me kya difference hai?
// map() aur forEach() me kya difference hai?

// Array Higher Order Methods
// map()

// [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.
// Ek array of names ko uppercase me convert karo using map().
// Prices array me har price me 10 add karo using map().
// Students names ke sath "Mr." add karo using map().
// Numbers array ko square me convert karo.

// filter()

// [1,2,3,4,5,6] me se sirf even numbers filter karo.
// Names array me sirf wo names filter karo jinki length 5 se zyada ho.
// Ek prices array me sirf prices greater than 100 filter karo.
// Students me se passed students filter karo.
// Negative numbers ko filter karo.

// forEach()

// Array ke tamam elements console me print karo using forEach().
// Ek fruits array ko numbering ke sath print karo.
// Users array me har user ko welcome message do.
// Ek array ka total manually forEach() se nikalo.
// Har student ka naam uppercase me print karo.
// const students = ["hasnain" , "umair" , "lala" , "ponka" , "ko"];
// const foreachUsing = students.forEach((e) => console.log(e.toUpperCase()))  


// find()

// [10,20,30,40] me se first number greater than 25 find karo.

// Users array me "Ali" naam ka user find karo.
// Ek products array me first expensive product find karo.
// Ek array me first even number find karo.
// Students me first failed student find karo.

// reduce()

// [1,2,3,4] ka sum reduce() se nikalo.
const arr = [1,2,3,4];
const sum = arr.reduce((init,curr) => {
return init + curr
},0)

console.log(sum);

// Prices array ka total calculate karo.
// Numbers array ka maximum value find karo using reduce().
// Ek words array ko single sentence me convert karo.
// Shopping cart ka total bill calculate karo.

// findLastIndex()

// [1,2,3,2,4,2] me last 2 ka index find karo.
// Last even number ka index find karo.
// Ek names array me last "Ali" ka index find karo.
// Ek products array me last expensive product ka index nikalo.
// Array me last negative number ka index find karo.

// Objects

// Object kya hota hai JavaScript me?
// Ek student object banao jisme name aur age ho.
// Object ki property access karne ke 2 methods likho.
// Object me new property add karo.
// Object ki property delete karo.
// Ek car object banao jisme brand aur model ho.
// Object ke andar function ka example do.
// this keyword object me kya karta hai?
// Object keys kaise nikalte hain?
// Object values kaise nikalte hain?

// Nested Objects

// Ek object ke andar object ka example banao.
// User object ke andar address object create karo.
// Nested object ki city access karo.
// Student object me marks object add karo.
// Company object me employee object create karo.

// Array of Objects

// Array of objects kya hota hai?
// Students ka array banao jisme har student ka name aur marks ho.
// Array of objects me se sirf names print karo.
// Passed students filter karo from array of objects.
// map() use karke students names uppercase me convert karo.
// Highest marks wala student find karo.
// Ek products array me total stock calculate karo.
// Array of objects me new object push karo.
// User object ko array me find karo.
// Array of objects ko loop se print karo.