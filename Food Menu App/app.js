console.log("Js Is Running!");

const arr = [
    {
        title: "Nihari",
        desc: "Slow-cooked beef stew with rich, spicy gravy and marrow.",
        price: 250,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Nihari-2c750c0.jpg?resize=768,713",
        category: "desi"
    },
    {
        title: "Samosa Chaat..",
        desc: "Fast Service stew with rich, spicy gravy and marrow.",
        price: 250,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVx9eMuRWQHSXGXG4YRrcK583KY73hxpv3eKmYeeGjhg&s=10",
        category: "desi"
    },
    {
        title: "Achar (Mixed Pickle)",
        desc: "Made of Base and Best vegetables.Fast Service stew with rich.",
        price: 100,
        img: "https://www.shangrila.com.pk/images/products/mixed-pickle-chunk/mixed-pickle-chunk-header-m.jpg",
        category: "desi"
    },
    {
        title: "Nimko..",
        desc: "Fast Service stew with rich, spicy gravy and marrow Delicious.",
        price: 50,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9i3lHaThRY3Ijw0vHeue3OUOSx06z7bOyuzqDpaFgA&s=10",
        category: "desi"
    },
    {
        title: "Beef Chili Dry..",
        desc: "Tender, sliced beef strips stir-fried to perfection with fresh green.",
        price: 50,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-njEBO_SJlo7oQ0S3ixNLWd8_Tq4Ch91LMdAeJenj8Q&s=10",
        category: "chinese"
    },
    {
        title: "Spring Rolls",
        desc: "Crispy, golden-fried pastry wrappers filled with julienned.",
        price: 50,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcixGiBxiATudZqlhOVw6bG9139xdKQNvJP-3kNFugA&s=10",
        category: "chinese"
    },
    {
        title: "Mapo Tofu",
        desc: "Soft tofu cubes set in a spicy, oily, and bright red sauce..",
        price: 50,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnbHslCgP0PKFnd3BpppryzQfRDx6bFO5kCIY4CtchQ&s=10",
        category: "chinese"
    },
    
    {
        title: "Chicken Karahi",
        desc: "Wok-cooked chicken with fresh tomatoes, ginger, and green chilies.",
        price: 1200,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Chicken-Karahi-847828f.jpg?quality=90&resize=708,643",
        category: "desi"
    },
    {
        title: "Halwa Puri",
        desc: "Crispy fried puris served with spicy chana curry and sweet halwa.",
        price: 180,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-lePwgyhUzz-3IO4joEjglhMmW_cBCQJHCvQ9-M2Aw&s=10",
        category: "desi"
    },
    {
        title: "Siri Paye",
        desc: "Traditional slow-cooked goat head and trotters stew with aromatic spices.",
        price: 480,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFDhnxmCYAY4gn0Znp7N2Bs1qEWv7GrjKWjd6O6P9p86LzIAuF1WVnFM&s=10",
        category: "desi"
    },
    {
        title: "Daal Makhni",
        desc: "Creamy, slow-cooked black lentils with plenty of butter and spices.",
        price: 280,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9oTEBGrBXoV6JhXQH_aCNNrTfiTHTlid-wC_Inep1w&s=10",
        category: "desi"
    },
    {
        title: "Seekh Kabab",
        desc: "Skewered minced beef grilled over open charcoal flames.",
        price: 400,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHXjBmxYPw6ccqrdeakRODv3nZIfpNZbkN_0GKZbF-Q&s=10",
        category: "bbq"
    },
    {
        title: "Malai Boti",
        desc: "Boneless chicken cubes marinated in a creamy.",
        price: 400,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS4A30DCxrt45ZMtSZPYYaeIPrFVlWygRj36_X99OpQ&s=10",
        category: "bbq"
    },
    {
        title: "Chicken Tikka",
        desc: "Quarter chicken marinated in fiery spices and yogurt, charred perfectly.",
        price: 320,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka6D1TKv-0HQqdiOcbjPiIp2go4W0TZtFywDA4E6iXw&s=10",
        category: "bbq"
    },
    {
        title: "Malai Boti",
        desc: "Boneless chicken cubes marinated in cream, cheese, and mild spices.",
        price: 450,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP19COwpV3H_FzDhk_A7dkU4Lv6Vq8dp66oE6eI39T7Q&s=10",
        category: "bbq"
    },
    {
        title: "Bihari Kabab",
        desc: "Tender, melt-in-your-mouth beef strips marinated in mustard oil and spices.",
        price: 480,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGZNH5BPeKo_YBCLisZddSyCGPYbl3jBHo_LbSxMBlSiJ9auGG4_Kyhdc&s=10",
        category: "bbq"
    },
    {
        title: "Mutton Chops BBQ",
        desc: "Tender mutton chops  ginger, garlic, and freshly crushed.",
        price: 1080,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYcfcovAxhBBYfWWIUQESSiJZUBY3TUF6r_L00ITbQQ&s=10",
        category: "bbq"
    },
    {
        title: "Kasturi Boti",
        desc: "Boneless chicken , cream, and dry fenugreek leaves.",
        price: 1080,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmgee69F5voNuGxYz4op7z_DvRE8jA44Eik1dhqJuqQ&s=10",
        category: "bbq"
    },
    {
        title: "Fish Tikka",
        desc: "Cubed fish fillets marinated in tandoori spices and grilled over coal.",
        price: 650,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AZyeeKrcV5-MjoTnI9am1GgLcyNzMxXS7-R-8JM5BYl00jNWKhCsy5k&s=10",
        category: "bbq"
    },
    {
        title: "Beef Burger",
        desc: "Juicy smashed beef patty with melted cheese and secret sauce.",
        price: 490,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs8PTd13D7kIpZeqV-kanPtprRKkKgm-UaU82wTXnsw&s=10",
        category: "fastfood"
    },
    {
        title: "Crispy Chicken Wings",
        desc: "Batter-coated, deep-fried  buffalo hot sauce or served.",
        price: 1900,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtUmQeCHwc44nDILw25H8XN5poP8vu5jzhmil8yFD6w&s=10",
        category: "fastfood"
    },
    {
        title: "Club Sandwich",
        desc: "Three layers of toasted  chicken mayo, a fried egg.",
        price: 1900,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTESVQw7J3_z29YCLH2hwl2G1aCBLCSrT73C1hkVZGubg&s=10",
        category: "fastfood"
    },
    {
        title: "Mozzarella Sticks (4 Pcs)",
        desc: "Elongated pieces of battered, , deep-fried until meltingly hot.",
        price: 1900,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_gB_jApul6AFCRfhYEwXl3wbJeuEGEg1i0rmuNWFhA&s=10",
        category: "fastfood"
    },
    {
        title: "Zinger Burger",
        desc: "Crispy, deep-fried chicken breast fillet topped with fresh lettuce.",
        price: 380,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRUrUmKq7OwHaH-Rfxdr7UWDYIbDVc832MFvbTvPL9g&s=10",
        category: "fastfood"
    },
    {
        title: "Loaded Fries",
        desc: "Crispy fries smothered in cheese sauce, chicken chunks, and jalapenos.",
        price: 350,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3m8Z5cudjRrxOAagDGIk0P2UwVfJe7fdbKQoxHMdEQ&s=10",
        category: "fastfood"
    },
    {
        title: "Pepperoni Pizza",
        desc: "Classic thin crust topped with premium beef pepperoni and mozzarella.",
        price: 850,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkSrtL0CGqaTal8Qvw9SXvV-cY49j0rkPuguBj4LdIA&s=10",
        category: "fastfood"
    },
    {
        title: "Chicken Nuggets",
        desc: "Ten pieces of crispy, golden-fried chicken nuggets served with garlic mayo.",
        price: 290,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdylhwlvqXm9YVSg1Gh5zPtUifD-sOzelbJX_wtWiRNQ&s=10",
        category: "fastfood"
    },
    {
        title: "Chicken Manchurian",
        desc: "Fried chicken cubes tossed in a sweet, tangy, and spicy red sauce.",
        price: 650,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGplnw8qqSJytaj0XRB4V9pxtXf9K7Gffriet06NHZ4g&s=10",
        category: "chinese"
    },
    {
        title: "Egg Fried Rice",
        desc: "Wok-tossed basmati rice with scrambled eggs, scallions, and soy sauce.",
        price: 400,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC0TnE56hIW7Wx7BlCmPlEgF6x6MUlU_rm0i4odTiPg&s=10",
        category: "chinese"
    },
    {
        title: "Chicken Chow Mein",
        desc: "Stir-fried noodles loaded with shredded chicken and crunchy vegetables.",
        price: 550,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHWxvJyppzTCVnOHXx6kd20r5V7Z0ETveEN4MMe41Rg&s=10",
        category: "chinese"
    },
    {
        title: "Hot and Sour Soup",
        desc: "Spicy and tangy broth packed with shredded chicken, eggs, and tofu.",
        price: 320,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEoPdmh61eJaWunQsTU-tsDvyigA2__vYBm-RkrEkrw&s=10",
        category: "chinese"
    },
    {
        title: "Kung Pao Chicken",
        desc: "Stir-fried chicken components with peanuts, vegetables, and chili peppers.",
        price: 690,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr09_0h_0dlZR_SBhD0lSnL-0yYehGO2swVtHaMoKYBA&s=10",
        category: "chinese"
    },
    {
        title: "Mint Margarita",
        desc: "Refreshing blend of fresh mint leaves, lime juice, ice, and soda.",
        price: 220,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRha9UfixkxvO69Ig7mEHlTJwHsv1n9c1l0UJF-Dn1C9w&s=10",
        category: "beverages"
    },
    {
        title: "Pina Colada",
        desc: "Creamy tropical mocktail made with pineapple juice and coconut cream.",
        price: 280,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGLR86wsiRnRL3arxQ_Jtn9VOW4tGUXDtrDhr4aVjpg&s=10",
        category: "beverages"
    },
    {
        title: "Soft Drink",
        desc: "Chilled 330ml can of your favorite carbonated beverage.",
        price: 90,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq92hIlExmbGbXFcXLCElLsiw3ih2p3z_YNo-s3lBekQ&s=10",
        category: "beverages"
    },
    {
        title: "Mango Shake",
        desc: "Thick, creamy milkshake made with sweet mangoes and vanilla ice cream.",
        price: 250,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgNbGkmJ0MuB62vNIPtPdAyzpWGZWegyxKVFv9b6Mcw&s=10",
        category: "beverages"
    },
    {
        title: "Kashmiri Chai",
        desc: "Traditional pink tea brewed with milk, pistachios, almonds, and cardamom.",
        price: 150,
        img: "https://primalwellness.coach/wp-content/uploads/2023/12/Kashmiri-Pink-Tea-Noon-Chai-3crop-scaled.jpg",
        category: "beverages"
    },
    {
        title: "Lassi",
        desc: "Traditional Dahi Made brewed with milk, pistachios, almonds, and cardamom.",
        price: 150,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Mz3aSdjHXQXMmIEGHRb8K1fj6sJSicN4M6smTNCAg&s=10",
        category: "beverages"
    },
    {
        title: "Pakola Ice Cream Soda",
        desc: "The iconic, bright green Pakistani carbonated soft drink.",
        price: 150,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G1aL7NqoxPNJL0iFn_qYQh-sVMUE_ri4kUteW49iLA&s=10",
        category: "beverages"
    },
    {
        title: "Sting Gold Rush (500ml)",
        desc: "The original ginseng-infused energy drink formulation delivering a crisp.",
        price: 450,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwZNulXtazCrojeS1NV8mmy5zCKqZ9M_o9PmLKKOeNQ&s=10",
        category: "beverages"
    }
];

let All = document.getElementById("All")
let Desi = document.getElementById("Desi")
let Chinese = document.getElementById("Chinese")
let BBQ = document.getElementById("BBQ")
let Fast = document.getElementById("FastFood")
let Bevarages = document.getElementById("Bevarages")
let menuBar = document.getElementById("MenuBar")
let input = document.getElementById("input")
// let btn = document.getElementById("btn")


const startApp = () => {
    // console.log("ok")
    const modify = arr.map((item) => {
    return ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
  <img src="${item.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
  <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
  <h1 class=" text-2xl font-bold text-red-600">${item.title}</h1>
  <p class="text-white">${item.desc}</p>
  <p class="text-white">${item.price}</p>
  <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
  </div>
    </div> `
    })

    menuBar.innerHTML = `<h1 class=" w-full text-4xl text-center text-white font-bold italic ">Loading...</h1>`
setTimeout(() => {
    menuBar.innerHTML = modify.join(" ")
},1000)
}
startApp()

const allHandler =()=> {
startApp()
}
const desiHandler = (category) => {
    const filteredItems = arr.filter((item) => {
    if(item.category.toLowerCase() === category.toLowerCase()){
        return  true     
    }
    }) 
    let modify = filteredItems.map((o) => {
    return `<div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
  <img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
  <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
  <h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
  <p class="text-white">${o.desc}</p>
  <p class="text-white">${o.price}</p>
  <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
  </div>
    </div> `
    })
 
        menuBar.innerHTML = modify.join(" ")
    

}
const chineseHandler = (category) => {
    const chineseFilterItems = arr.filter((item) => {
    if(item.category.toLowerCase() === category.toLowerCase()){
        return true
    }
    })
    const modify = chineseFilterItems.map((o) => {
    return  ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
  <img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
  <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
  <h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
  <p class="text-white">${o.desc}</p>
  <p class="text-white">${o.price}</p>
  <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
  </div>
    </div> `

})
menuBar.innerHTML = modify.join(" ")

}
const bbqHandler = (category) => {
    const filteredItems = arr.filter((item) => {
    if(item.category.toLowerCase() === category.toLowerCase()) return true
    })
    const modify = filteredItems.map((o) => {
    return  ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
  <img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
  <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
  <h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
  <p class="text-white">${o.desc}</p>
  <p class="text-white">${o.price}</p>
  <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
  </div>
    </div> `
    })
  
        menuBar.innerHTML = modify.join(" ")
    
}
const fastFoodHandler = (category) => {
    const filteredItems = arr.filter((item) => {
    if(item.category.toLowerCase() === category.toLowerCase()) return true
    })
    const modify = filteredItems.map((o) => {
    return  ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
  <img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
  <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
  <h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
  <p class="text-white">${o.desc}</p>
  <p class="text-white">${o.price}</p>
  <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
  </div>
    </div> `
    })
        menuBar.innerHTML = modify.join(" ")
   
}
const bevaragesHandler = (category) => {
    const filteredItems = arr.filter((item) => {
   if(item.category.toLowerCase() === category.toLowerCase())  return true
 
})
const modify = filteredItems.map((o) => {
return  ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
<div class="h-[200px] w-full bg-red-600 border-white rounded ">
<img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
<div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
<h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
<p class="text-white">${o.desc}</p>
<p class="text-white">${o.price}</p>
<button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
</div>
</div> `
})

menuBar.innerHTML = modify.join(" ")
}

const searchHanlder = () => {

let searchVal = input.value.toLowerCase()
const filteredItems = arr.filter((item) => {
 if(item.title.toLowerCase().includes(searchVal)) return true
})    
const modify = filteredItems.map((o) => {
    return ` <div class="h-[380px] w-[300px] border-1 border-red-600 rounded border-solid" id="box">
    <div class="h-[200px] w-full bg-red-600 border-white rounded ">
    <img src="${o.img}" alt="" class="h-full w-full border-b border border-red-600"></div>
    <div class="h-[180px] w-full  p-2 flex flex-col gap-2" id="bak">
    <h1 class=" text-2xl font-bold text-red-600">${o.title}</h1>
    <p class="text-white">${o.desc}</p>
    <p class="text-white">${o.price}</p>
    <button class="text-white rounded border border-solid border-white h-[30px] w-[90px]">Add</button>
    </div>
    </div> `
})
if(modify.length > 0) {
    menuBar.innerHTML =  modify.join(" ")
}else{
    menuBar.innerHTML = `<p class="text-white">No items found matching your search.</p>`;

}
}

All.addEventListener("click" , () => {allHandler()})
Desi.addEventListener("click" , () => desiHandler("desi"))
Chinese.addEventListener("click" , () => chineseHandler("chinese"))
BBQ.addEventListener("click" , () => bbqHandler("bbq"))
Fast.addEventListener("click" , () => fastFoodHandler("fastfood"))
Bevarages.addEventListener("click" , () => bevaragesHandler("beverages"))
input.addEventListener("input" , () => searchHanlder())
