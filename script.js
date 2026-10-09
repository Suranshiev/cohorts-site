const T={
ru:{nav_features:"Возможности",nav_explore:"Обзор",nav_gallery:"Скриншоты",nav_roadmap:"Планы",badge:"Скоро в Google Play",
h1:"Вся IT-инфраструктура — <em>под контролем</em>",lead:"Паспортизация зданий, стоек и оборудования прямо с телефона. Порты, кабели, журнал работ и экспорт в готовые таблицы.",
gp:"Google Play — скоро",see:"Посмотреть",st1:"устройств",st2:"портов",st3:"кабелей",
f_title:"Всё для паспортизации",f_sub:"От здания до порта коммутатора — в одной иерархии.",
c1t:"Иерархия объектов",c1d:"Здания → помещения → стойки → устройства. Статистика на каждом уровне.",
c2t:"Визуальные стойки",c2d:"Схема 42U спереди и сзади, свободные юниты, мощность и лимит по стойке.",
c3t:"Порты и кабели",c3d:"Карта портов, VLAN и цепочка соединений от устройства до устройства.",
c4t:"План помещения",c4d:"Метки камер, ПК и точек доступа на плане — перетаскиваются пальцем.",
c5t:"Журнал работ",c5d:"Обслуживание и ремонт, стоимость, подрядчик и просроченные плановые работы.",
c6t:"Экспорт в таблицы",c6d:"Кабель-менеджмент, инвентаризация, журнал и полная выгрузка в Excel.",
e_title:"Посмотрите изнутри",e_sub:"Выберите раздел — и увидите, как это работает.",
g_title:"Скриншоты",g_sub:"Листайте или тяните. Нажмите, чтобы увеличить.",
r_title:"Что дальше",r_sub:"Приложение уже готово к релизу и продолжает развиваться.",
r1t:"Готово",r1d:"Объекты, стойки, порты, кабели, журнал, поиск, экспорт в Excel, перенос базы между устройствами.",
r2t:"Скоро",r2d:"Публикация в Google Play.",r3t:"В разработке",r3d:"Автоматическое добавление оборудования с других платформ.",
foot:"Паспортизация IT-инфраструктуры и оборудования",
tabs:[
["Структура","assets/buildings.webp","Здания и помещения","Весь парк организован в понятную иерархию.",["Здания, помещения, стойки","Счётчики устройств на каждом уровне","Быстрое добавление кнопкой +"]],
["Стойки","assets/rack-both.webp","Стойка 42U","Реальный вид стойки — как в серверной.",["Вид спереди и сзади","Мощность, лимит и свободные юниты","Цветовая маркировка типов устройств"]],
["Устройства","assets/device.webp","Карточка устройства","Вся паспортная информация в одном месте.",["Модель, серийный номер, гарантия","Сеть: имя хоста, MAC, IP","Свои поля, например инвентарный номер"]],
["Порты и кабели","assets/chain.webp","Цепочка соединений","Видно, куда идёт каждый кабель.",["Карта занятых и свободных портов","VLAN и тип разъёма","Цепочка от порта до порта"]],
["Журнал","assets/journal.webp","Журнал работ","Обслуживание и ремонт под контролем.",["Плановые работы и просрочки","Стоимость и подрядчик","Привязка к устройству"]],
["Экспорт","assets/export.webp","Экспорт и перенос","Готовые таблицы одним нажатием.",["Кабель-менеджмент и инвентаризация","Резервная копия и перенос базы","Массовая загрузка из файла"]]
],cap:["Здания","Помещения","Стойки","План помещения","Стойка — спереди","Стойка — обе стороны","Устройство","Порты и обслуживание","Цепочка соединений","Поиск","Журнал работ","Экспорт","Перенос базы"],title:"Cohorts — паспортизация IT-инфраструктуры"},
en:{nav_features:"Features",nav_explore:"Explore",nav_gallery:"Screenshots",nav_roadmap:"Roadmap",badge:"Coming soon to Google Play",
h1:"Your entire IT infrastructure, <em>under control</em>",lead:"Document buildings, racks and equipment right from your phone. Ports, cables, work log and ready-made spreadsheet exports.",
gp:"Google Play — soon",see:"Take a look",st1:"devices",st2:"ports",st3:"cables",
f_title:"Everything for documentation",f_sub:"From the building down to the switch port — one hierarchy.",
c1t:"Object hierarchy",c1d:"Buildings → rooms → racks → devices. Stats at every level.",
c2t:"Visual racks",c2d:"42U diagram front and rear, free units, power and limit per rack.",
c3t:"Ports & cables",c3d:"Port map, VLANs and the connection chain from device to device.",
c4t:"Room plan",c4d:"Pin cameras, PCs and access points on the plan — drag with a finger.",
c5t:"Work log",c5d:"Maintenance and repairs, cost, contractor and overdue scheduled work.",
c6t:"Spreadsheet export",c6d:"Cable management, inventory, work log and a full Excel export.",
e_title:"See it from the inside",e_sub:"Pick a section and see how it works.",
g_title:"Screenshots",g_sub:"Swipe or drag. Tap to enlarge.",
r_title:"What's next",r_sub:"The app is release-ready and keeps evolving.",
r1t:"Done",r1d:"Objects, racks, ports, cables, log, search, Excel export, database transfer between devices.",
r2t:"Soon",r2d:"Publication on Google Play.",r3t:"In development",r3d:"Automatic equipment import from other platforms.",
foot:"IT infrastructure and equipment documentation",
tabs:[
["Structure","assets/buildings.webp","Buildings & rooms","Your whole estate in a clear hierarchy.",["Buildings, rooms, racks","Device counters at every level","Quick add with the + button"]],
["Racks","assets/rack-both.webp","42U rack","A real rack view, just like in the server room.",["Front and rear views","Power, limit and free units","Color-coded device types"]],
["Devices","assets/device.webp","Device card","All asset data in one place.",["Model, serial number, warranty","Network: hostname, MAC, IP","Custom fields, e.g. inventory number"]],
["Ports & cables","assets/chain.webp","Connection chain","See where every cable goes.",["Map of used and free ports","VLAN and connector type","Chain from port to port"]],
["Work log","assets/journal.webp","Work log","Maintenance and repairs under control.",["Scheduled work and overdue items","Cost and contractor","Linked to the device"]],
["Export","assets/export.webp","Export & transfer","Ready spreadsheets in one tap.",["Cable management and inventory","Backup and database transfer","Bulk import from a file"]]
],cap:["Buildings","Rooms","Racks","Room plan","Rack — front","Rack — both sides","Device","Ports & maintenance","Connection chain","Search","Work log","Export","Database transfer"],title:"Cohorts — IT infrastructure documentation"}};
const SH=["buildings","rooms","racks","plan","rack-front","rack-both","device","ports","chain","search","journal","export","export2"];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let lang=localStorage.getItem("lang")||((navigator.language||"").startsWith("ru")?"ru":"en"),tab=0;
function render(){
 const t=T[lang];document.documentElement.lang=lang;document.title=t.title;
 $$("[data-i18n]").forEach(e=>e.textContent=t[e.dataset.i18n]);
 $$("[data-i18n-html]").forEach(e=>e.innerHTML=t[e.dataset.i18nHtml]);
 $("#lang").textContent=lang==="ru"?"EN":"RU";
 $("#tabs").innerHTML=t.tabs.map((x,i)=>`<button class="tab${i===tab?" on":""}" data-i="${i}" role="tab">${x[0]}</button>`).join("");
 $$(".tab").forEach(b=>b.onclick=()=>{tab=+b.dataset.i;show(true)});
 $("#slider").innerHTML=SH.map((n,i)=>`<figure><img src="assets/${n}.webp" alt="${t.cap[i]}" loading="lazy" draggable="false"><figcaption>${t.cap[i]}</figcaption></figure>`).join("");
 $$("#slider img").forEach(im=>im.onclick=()=>{if(moved)return;$("#lb img").src=im.src;$("#lb").classList.add("on")});
 show(false);
}
function show(anim){
 const x=T[lang].tabs[tab];$$(".tab").forEach((b,i)=>b.classList.toggle("on",i===tab));
 const im=$("#showImg"),set=()=>{im.src=x[1];im.alt=x[2];$("#showT").textContent=x[2];$("#showD").textContent=x[3];$("#showL").innerHTML=x[4].map(l=>`<li>${l}</li>`).join("");im.classList.remove("out")};
 if(anim){im.classList.add("out");setTimeout(set,200)}else set();
}
$("#lang").onclick=()=>{lang=lang==="ru"?"en":"ru";localStorage.setItem("lang",lang);render()};
const root=document.documentElement;
function setTheme(th){root.dataset.theme=th;$("#theme").textContent=th==="light"?"☾":"☀";try{localStorage.setItem("theme",th)}catch(e){}}
setTheme((()=>{try{return localStorage.getItem("theme")}catch(e){}})()||"dark");
$("#theme").onclick=()=>setTheme(root.dataset.theme==="light"?"dark":"light");
$("#lb").onclick=()=>$("#lb").classList.remove("on");
document.onkeydown=e=>{if(e.key==="Escape")$("#lb").classList.remove("on")};
// slider: arrows + drag
const sl=$("#slider");let moved=false,down=false,sx=0,sl0=0;
$("#prev").onclick=()=>sl.scrollBy({left:-340,behavior:"smooth"});
$("#next").onclick=()=>sl.scrollBy({left:340,behavior:"smooth"});
sl.onpointerdown=e=>{if(e.pointerType!=="mouse")return;down=true;moved=false;sx=e.clientX;sl0=sl.scrollLeft;sl.style.scrollSnapType="none"};
window.addEventListener("pointermove",e=>{if(!down)return;const d=e.clientX-sx;if(Math.abs(d)>5)moved=true;sl.scrollLeft=sl0-d});
window.addEventListener("pointerup",()=>{if(!down)return;down=false;sl.style.scrollSnapType="";setTimeout(()=>moved=false,0)});
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".reveal").forEach(e=>io.observe(e));
$$("[data-count]").forEach(el=>{const n=+el.dataset.count,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString("en-US").replace(/,/g," ");if(p<1)requestAnimationFrame(f)})(t0)});
// hero tilt
const tl=$("#tilt");
if(matchMedia("(hover:hover)").matches)tl.parentElement.addEventListener("mousemove",e=>{const r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
 $(".p1").style.transform=`translate(${x*-24}px,${y*-14}px) rotate(-6deg)`;$(".p2").style.transform=`translate(${x*18}px,${y*12}px)`;$(".p3").style.transform=`translate(${x*-30}px,${y*-18}px) rotate(6deg)`});
$("#yr").textContent=new Date().getFullYear();
render();
