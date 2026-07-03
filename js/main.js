/* ==========================
ENTRAR A LA EXPERIENCIA
========================== */

const enterBtn =
document.getElementById("enterBtn");

const hero =
document.getElementById("hero");

const mainContent =
document.getElementById("mainContent");

enterBtn.addEventListener("click",()=>{

hero.style.opacity="0";

hero.style.transition="1s";

setTimeout(()=>{

hero.style.display="none";

mainContent.style.display="block";

window.scrollTo(0,0);

},1000);

});

/* ==========================
CORAZON ROTO
========================== */

const heart =
document.getElementById("heart");

const heartMessage =
document.getElementById("heartMessage");

let broken=false;

heart.addEventListener("click",()=>{

if(broken) return;

broken=true;

heart.innerHTML="💔";

heart.style.transform="scale(1.2) rotate(10deg)";

heartMessage.innerHTML=`
"No todas las flechas de Cupido
llegan al corazón correcto."
`;

});

/* ==========================
BOVEDA SECRETA
========================== */

const vaultBtn =
document.getElementById("vaultBtn");

const vaultPassword =
document.getElementById("vaultPassword");

const vaultContent =
document.getElementById("vaultContent");

vaultBtn.addEventListener("click",()=>{

const password =
vaultPassword.value;

if(password==="majodavo2026"){

alert(
"🎉 ¡Bóveda desbloqueada!\n\nBienvenido al contenido exclusivo."
);

vaultContent.style.display="block";

window.scrollTo({
top:vaultContent.offsetTop-100,
behavior:"smooth"
});

}else{

alert(
"❌ Contraseña incorrecta.\n\nBuscá las pistas escondidas por la página."
);

}

});

/* ==========================
ZOOM FOTOS
========================== */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const overlay =
document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background=
"rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent=
"center";

overlay.style.alignItems=
"center";

overlay.style.zIndex="9999";

const image =
document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});

/* ==========================
ANIMACION BOVEDA
========================== */

const style =
document.createElement("style");

style.innerHTML=`

@keyframes fadeVault{

from{

opacity:0;
transform:translateY(40px);

}

to{

opacity:1;
transform:translateY(0);

}

}

`;

document.head.appendChild(style);

/* ==========================
EFECTO PORTADA 3D
========================== */

const cover =
document.querySelector(".cover");

cover.addEventListener("mousemove",(e)=>{

const rect =
cover.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*20;

const rotateX =
-((y / rect.height)-0.5)*20;

cover.style.transform=`

perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)

`;

});

cover.addEventListener("mouseleave",()=>{

cover.style.transform=`
perspective(1000px)
rotateX(0)
rotateY(0)
scale(1)
`;

});

/* ==========================
EFECTO BRILLO MOUSE
========================== */

document.addEventListener("mousemove",(e)=>{

const glow =
document.createElement("div");

glow.style.position="fixed";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

glow.style.width="10px";

glow.style.height="10px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background=
"rgba(197,139,69,.6)";

glow.style.boxShadow=
"0 0 20px rgba(197,139,69,.9)";

glow.style.zIndex="9999";

document.body.appendChild(glow);

setTimeout(()=>{

glow.remove();

},300);

});

/* ==========================
MENSAJE CONSOLA
========================== */

console.log(`
EX CUPIDO EXPERIENCE

Majo_music x Davo
`);

setInterval(()=>{

const flash=document.createElement("div");

flash.style.position="fixed";

flash.style.inset="0";

flash.style.background="white";

flash.style.opacity=".08";

flash.style.pointerEvents="none";

flash.style.zIndex="99999";

document.body.appendChild(flash);

setTimeout(()=>{

flash.remove();

},120);

},25000);

document
.getElementById("secretHeart")
.addEventListener("click",()=>{

alert("❤️ Encontraste un secreto.");

});

let score=0;

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
Math.random()*90+"vw";

heart.style.top=
Math.random()*90+"vh";

heart.style.fontSize="40px";

heart.style.cursor="pointer";

document.body.appendChild(heart);

heart.onclick=()=>{

score++;

heart.remove();

if(score===10){

alert("🏆 Logro desbloqueado");

}

};

setTimeout(()=>{

heart.remove();

},3000);

},5000);

