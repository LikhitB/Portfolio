let r1 = document.querySelector(".r1");
let r2 = document.querySelector(".r2");
let r3 = document.querySelector(".r3");
let r4 = document.querySelector(".r4");
let r5 = document.querySelector(".r5");
var percentage;
let loadval = document.querySelector(".value");
let skillval = document.querySelector("#skillval");
let y = skillval.textContent;
let x = 0;
gsap.registerPlugin(TweenMax, Power2, TimelineLite);
function c() {
    if (parseInt(skillval.textContent) < 60 && y < 60) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        //https://github.com/LikhitB/MyPortfolio
        skillval.textContent = 60 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function html() {
    if (parseInt(skillval.textContent) < 80 && y < 80) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 80 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function py() {
    if (parseInt(skillval.textContent) < 30 && y < 30) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 30 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function java() {
    if (parseInt(skillval.textContent) < 60 && y < 60) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 60 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function react() {
    if (parseInt(skillval.textContent) < 40 && y < 40) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 40 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
//react
document.querySelector("#react").addEventListener("mouseover", () => {
    cursor.innerHTML = 'React';
    skillval.textContent = 0;
    percentage = setInterval(react, 30);
});
document.querySelector("#react").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});

function css() {
    if (parseInt(skillval.textContent) < 40 && y < 40) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 40 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function tail() {
    if (parseInt(skillval.textContent) < 90 && y < 90) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 90 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function js() {
    if (parseInt(skillval.textContent) < 30 && y < 50) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 30 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function gsp() {
    if (parseInt(skillval.textContent) < 20 && y < 20) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 20 + "%";
        clearInterval(percentage);
        y = 0;
    }
}

function git() {
    if (parseInt(skillval.textContent) < 50 && y < 50) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 50 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function github() {
    if (parseInt(skillval.textContent) < 70 && y < 10) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 70 + "%";
        clearInterval(percentage);
        y = 0;
    }
}
function ts() {
    if (parseInt(skillval.textContent) < 40 && y < 40) {
        skillval.textContent = y + "%";
        y += Math.floor(Math.random() * 5);
    } else {
        skillval.textContent = 40 + "%";
        clearInterval(percentage);
        y = 0;
    }
}

// git
document.querySelector("#git").addEventListener("mouseover", () => {
    cursor.innerHTML = "GIT";

    skillval.textContent = 0;
    percentage = setInterval(git, 30);
});
document.querySelector("#git").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//github
document.querySelector("#github").addEventListener("mouseover", () => {
    cursor.innerHTML = "GitHub";

    skillval.textContent = 0;
    percentage = setInterval(github, 30);
});
document.querySelector("#github").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//ts
document.querySelector("#ts").addEventListener("mouseover", () => {
    cursor.innerHTML = "Moodle";

    skillval.textContent = 0;
    percentage = setInterval(ts, 30);
});
document.querySelector("#ts").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
// gsap
document.querySelector("#gsap").addEventListener("mouseover", () => {
    cursor.innerHTML = "GSAP";

    skillval.textContent = 0;
    percentage = setInterval(gsp, 30);
});
document.querySelector("#gsap").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//js
document.querySelector("#js").addEventListener("mouseover", () => {
    cursor.innerHTML = "JavaScript";
        skillval.textContent = 0;
    percentage = setInterval(js, 30);
});
document.querySelector("#js").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//css
document.querySelector("#css").addEventListener("mouseover", () => {
    cursor.innerHTML = "CSS";

    skillval.textContent = 0;
    percentage = setInterval(css, 30);
});
document.querySelector("#css").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//tailwind
document.querySelector("#tail").addEventListener("mouseover", () => {
    cursor.innerHTML = "TailwindCSS";

    skillval.textContent = 0;
    percentage = setInterval(tail, 30);
});
document.querySelector("#tail").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});

//c
document.querySelector("#c").addEventListener("mouseover", () => {
    cursor.innerHTML = "C++";
    skillval.textContent = 0;
    percentage = setInterval(c, 30);
});
document.querySelector("#c").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//python
document.querySelector("#py").addEventListener("mouseover", () => {
    cursor.innerHTML = "Linux";

    skillval.textContent = 0;
    percentage = setInterval(py, 30);
});
document.querySelector("#py").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//html
document.querySelector("#html").addEventListener("mouseover", () => {
    cursor.innerHTML = "HTML";
    skillval.textContent = 0;
    percentage = setInterval(html, 30);
});
document.querySelector("#html").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
//java
document.querySelector("#java").addEventListener("mouseover", () => {
    cursor.innerHTML = "AWS";
    skillval.textContent = 0;
    percentage = setInterval(java, 30);
});
document.querySelector("#java").addEventListener("mouseleave", () => {
    clearInterval(percentage);
    skillval.textContent = "Hover/Click Icon check%";
});
function time() {
    if (x < 100) {
        loadval.textContent = x + "%";
        x += Math.floor(Math.random() * 20);
        // console.log(loadval.textContent)
    } else {
        loadval.textContent = 100 + "%";
        open();
    }
}
setInterval(time, 100);
function open() {
    gsap.to(".loader", {
        duration: 1,
        y: -1000,
    });
}
let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
tl.to(".r1", {
    y: -65,
    duration: 1,
    delay: 1,
});
tl.to(".r1", {
    opacity: 0,
    duration: 0.2,
});
tl.to(".r2", {
    y: -65,
    opacity: 1,
    duration: 1,
});
tl.to(".r2", {
    opacity: 0,
});
tl.to(".r3", {
    y: -125,
    opacity: 1,
    duration: 1,
});
tl.to(".r3", {
    opacity: 0,
});

let menu = document.getElementById("menu");
let menu1 = document.getElementById("menu1");
let cross = document.getElementById("cross");
let readmore = document.querySelector("#readm");
let readless = document.querySelector("#readl");
let hider = document.querySelector("#hider");
let last_nav = document.querySelector("#last_nav");
menu.addEventListener("click", () => {
    // console.log('hi');
    menu.classList.remove("rotate");
    menu1.classList.remove("hideclass");
    menu1.classList.add("showclass");
    cross.classList.add("rotate");
});
cross.addEventListener("click", () => {
    cross.classList.remove("rotate");
    menu1.classList.remove("showclass");
    menu1.classList.add("hideclass");
    menu.classList.add("rotate");
});
readmore.addEventListener("click", () => {
    readmore.classList.remove("active");
    readmore.classList.add("not_active");
    hider.classList.remove("text-align");
    readless.classList.add("active");
    readless.classList.remove("not_active");
});
readless.addEventListener("click", () => {
    readless.classList.remove("active");
    readless.classList.add("not_active");
    hider.classList.remove("text-align");
    readmore.classList.add("active");
    readmore.classList.remove("not_active");
    hider.classList.add("text-align");
});

gsap.from(".skill img", {
    scale: 0,
    duration: 5,
    stagger: 2,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        // markers: true,
        start: "top 24%",
        end: "-top 100%",
        scrub: 5,
        pin: true,
    },
});
gsap.to(".skill span", {
    scale: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        // markers: true,
        start: "top 15%",
        end: "-top 100%",
        scrub: 2,
        pin: true,
    },
});
gsap.from(".skill h1", {
    scale: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 15%",
        end: "-top 100%",
        scrub: 2,
        pin: true,
    },
});
gsap.from("#contactme div", {
    scale: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#contactme div",
        scrub: 2,
        // pin:true,
        end: "top 100%",
        start: "top 70%"

    },
});
var cursor = document.querySelector(".cursor");
var curparent = document.querySelector("#home");
var nav_bar = document.querySelector(".nav_bar");
var skills = document.querySelector("#skills");
setTimeout(() => {

    cursor.classList.remove("not_active");
}, 2500);
curparent.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
        duration: 1,
        x: event.x+25,
        y: event.y-25,
        duration: 1.5,
        ease: "back.out",
    });
});
nav_bar.addEventListener("mousemove", () => {
    gsap.to(cursor, {
        duration: 1,
        scale:4,
        boxShadow: " 2px 25px 40px 35px  rgb(249 115 22)",
    });
});
nav_bar.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        duration: 1,
        scale: 0,
    });
});
//project animation
document.querySelector("#projects").addEventListener("mouseover", () => {
    gsap.to(cursor, {
        duration: 1,
        scale: 25,
        boxShadow: "2px 2px 250px 5px rgb(249 115 22 0.5) inset",
    });
});
document.querySelector("#projects").addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        duration: 1,
        scale: 0,
    });
});
gsap.from(".pro_ani", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".pro_ani div",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2

    }
})
gsap.from(".pro_ani1", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".pro_ani1 div",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2

    }
})
gsap.from(".pro_ani2", {
    duration: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pro_ani2 div",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
    }
})
gsap.from(".pro_ani3", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".pro_ani3 div",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2

    }
})
document.querySelector("#last_nav").addEventListener("mouseover", () => {
    gsap.to(cursor, {
        duration: 1,
        scale: 5,
        boxShadow: "0px 0px 500px #333333",
    });
});
document.querySelector("#last_nav").addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        duration: 1,
        scale: 0,
    });
});

let per_sec = document.querySelector("#skills");
per_sec.addEventListener("mouseover", () => {
    gsap.to(cursor, {
        duration: 2,
        scale: 1,
    });
});
per_sec.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 0,
    });
});

//sheetdb

var form = document.querySelector("#sheetdb");
var names = document.querySelector("#name");
var email = document.querySelector("#email");
var contact = document.querySelector("#contacts");
var textbox = document.querySelector("#suggest");
if (!(names&&email&&contact&&textbox)) {alert('Check ,Something went wrong !')}
else{
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb")),
    })
        .then((response) => response.json())
        .then
        .then(() => {
            alert("Successfully Sent😁");
            setTimeout(() => {
                names.value = "";
                email.value = "";
                textbox.value = "";
                contact.value = "";
            }, 100);
        });
});}
    


//border animation
let h = document.querySelector('.home')
let a = document.querySelector('.about')
let con = document.querySelector('.contact')
let arr = [h, a, con]
arr.forEach(i => {
    i.addEventListener("mouseover", () => {
        i.classList.remove('animate2')
        i.classList.add('animate1')
    })
})
arr.forEach(i => {
    i.addEventListener("mouseleave", () => {
        i.classList.remove('animate1')
        i.classList.add('animate2')
    })
})
