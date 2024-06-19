// Control Showing Windows
let ns = document.querySelectorAll(".cir"),
    bs = document.querySelectorAll(".body")

ns.forEach(e => e.addEventListener("click", () => {
    ns.forEach(n => n.classList.remove("active"))
    e.classList.add("active")
    bs.forEach(b => b.classList.remove("active"))
    bs.forEach(b => {
        if (b.classList.contains(e.classList[1])) {
            b.classList.add("active")
        }
    })
}))


let namepro = "",
    pricepro = "",
    addonname = [],
    addoneprice = []

// Validation Of First Form
let inputs = document.querySelectorAll(".body.one .inputs div input"),
    err = document.querySelectorAll(".body.one .inputs div .err"),
    button = document.querySelector(".body.one button")

button.addEventListener("click", _ => {
    let ist = true
    inputs.forEach(e => e.classList.remove("er"))
    err.forEach(e => e.classList.remove("ac"))
    if (inputs[0].value.trim() === "") {
        ist = false
        inputs[0].classList.add("er")
        err[0].classList.add("ac")
    }
    if (inputs[1].value.trim() === "") {
        ist = false
        inputs[1].classList.add("er")
        err[1].classList.add("ac")
        err[1].innerHTML = "This Field Is Needed"
    }
    else if (!inputs[1].value.trim().includes("@")) {
        ist = false
        inputs[1].classList.add("er")
        err[1].classList.add("ac")
        err[1].innerHTML = "This Email Is Invalid"
    }
    if (inputs[2].value.trim() === "") {
        ist = false
        inputs[2].classList.add("er")
        err[2].classList.add("ac")
        err[2].innerHTML = "This Field Is Needed"
    }
    else if (inputs[2].value.trim().length < 10) {
        ist = false
        inputs[2].classList.add("er")
        err[2].classList.add("ac")
        err[2].innerHTML = "Phone Number Is Invalid"
    }

    if (ist) {
        ns[1].click()
    }
})

// Validation Of Second Form

let button2 = document.querySelectorAll(".body.two .buttons button"),
    boxes = document.querySelectorAll(".body.two .box"),
    ball = document.querySelector(".body.two .ball"),
    switcher = document.querySelectorAll(".body.two .switcher span"),
    years = document.querySelectorAll(".body.two .box .discount"),
    prices = document.querySelectorAll(".body.two .box .price"),

    prices3 = document.querySelectorAll(".disc") // months in form 3

boxes.forEach(e => e.addEventListener("click", _ => {
    boxes.forEach(s => s.classList.remove("active"))
    e.classList.add("active")
}))

button2[0].addEventListener("click", _ => ns[0].click())
button2[1].addEventListener("click", _ => {
    boxes.forEach(e => {
        if (e.classList.contains("active")) {
            namepro = e.children[1].children[0].innerHTML
            if (switcher[0].classList.contains("ac")) namepro += " (Monthly)"
            else namepro += " (Yearly)"
            pricepro = e.children[1].children[1].innerHTML
        }
    })
    ns[2].click()
})

ball.addEventListener("click", _ => {
    ball.classList.toggle("active")
    switcher.forEach(e => e.classList.toggle("ac"))
    years.forEach(e => e.classList.toggle("ac"))
    if (switcher[0].classList.contains("ac")) {
        prices[0].innerHTML = "$9/mo"
        prices[1].innerHTML = "$12/mo"
        prices[2].innerHTML = "$15/mo"
        prices3[0].innerHTML = "+$1/mo"
        prices3[1].innerHTML = "+$2/mo"
        prices3[2].innerHTML = "+$2/mo"
    }
    else {
        prices[0].innerHTML = "$90/yr"
        prices[1].innerHTML = "$120/yr"
        prices[2].innerHTML = "$150/yr"
        prices3[0].innerHTML = "+$10/yr"
        prices3[1].innerHTML = "+$20/yr"
        prices3[2].innerHTML = "+$20/yr"
    }
})

// Validation Of Third Form

let button3 = document.querySelectorAll(".body.three .buttons button"),
    boxes3 = document.querySelectorAll(".body.three .box"),
    check = document.querySelectorAll(`.body.three input[type="checkbox"]`)

boxes3.forEach((e, i) => e.addEventListener("click", _ => {
    if (e.classList.contains("active")) {
        e.classList.remove("active")
        check[i].checked = false
    }
    else {
        e.classList.add("active")
        check[i].checked = true
    }
}))

check.forEach((e, i) => e.addEventListener("click", _ => {
    if (e.checked === false) {
        boxes3[i].classList.add("active")
        e.checked = true
    }
    else {
        boxes3[i].classList.remove("active")
        e.checked = false
    }
}))

button3[0].addEventListener("click", _ => ns[1].click())
button3[1].addEventListener("click", _ => {
    addonname = []
    addoneprice = []
    check.forEach((e, i) => {
        if (e.checked) {
            addonname.push(boxes3[i].children[0].children[1].children[0].innerHTML)
            addoneprice.push(boxes3[i].children[1].innerHTML)
        }
    })
    ns[3].click()
    SetRev()
})

// Validation Of Fourth Form

let mainpro = document.querySelector(".body.four .mainer .title"),
    mainpric = document.querySelector(".body.four .mainer .disc"),
    addo = document.querySelector(".body.four .addon"),
    total = document.querySelector(".body.four .inputs .total .bo .price"),
    final = document.querySelector(".body.four .inputs .total .bo .discc"),
    button4 = document.querySelectorAll(".body.four button")

function SetRev() {
    document.querySelectorAll(".body.four .box .bo").forEach(e => {
        e.remove()
    })
    mainpro.innerHTML = namepro
    mainpric.innerHTML = pricepro

    let all = +pricepro.split("/")[0].slice(1)

    for (let i = 0; i < addonname.length; i++) {
        let di = document.createElement("div")
        let dp = document.createElement("div")
        let dd = document.createElement("div")

        di.classList.add("bo", "flexr")

        dp.classList.add("price")
        dp.innerHTML = addonname[i]

        dd.classList.add("disc")
        dd.innerHTML = addoneprice[i]
        all += +addoneprice[i].split("/")[0].slice(2)

        di.appendChild(dp)
        di.appendChild(dd)

        addo.appendChild(di)
    }

    let m = ""


    if (namepro.includes("Monthly")) { total.innerHTML = "Total (per month)"; m = "mo" }
    else { total.innerHTML = "Total (per year)"; m = "yr" }

    final.innerHTML = "$" + all + "/" + m
}

button4[0].addEventListener("click", _ => ns[2].click())
button4[1].addEventListener("click", _ => {
    bs.forEach(b => b.classList.remove("active"))
    bs[4].classList.add("active")
})