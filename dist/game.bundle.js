(()=>{"use strict";class t{#t=[];#e=[];#s=1;luckClick=0;badClick=0;constructor(t){this.countItemsInRow=t.countItemsInRow||4,this.marginBlocks=t.marginBlocks||10,this.isOpenStart=t.isOpenStart||!1,this.baseClass=t.baseClass||"game",this.classItem=`${this.baseClass}__item`||"game__item",this.frontClass=`${this.baseClass}__front`||"game__front",this.backClass=`${this.baseClass}__back`||"game__back",this.winClass=`${this.baseClass}__win`||"game__win",this.values=this.#i(t.listImages)||[],this.blockGame=document.querySelector(`.${this.baseClass}__container`),this.parentNodeGame=document.querySelector(`.${this.baseClass}`),this.headerGame=document.querySelector(`.${this.baseClass}__header`)||0,this.#a(),this.nodesItems=this.blockGame.querySelectorAll(`.${this.classItem}`),this.#l()}#i(t){return[...t,...t].sort((()=>Math.random()-.5))}#h(){const t=this.parentNodeGame.offsetWidth,e=this.parentNodeGame.offsetHeight-(this.headerGame?.offsetHeight||0),s=e>t?t:e,i=Math.floor(s/this.countItemsInRow-this.marginBlocks*(this.countItemsInRow-1));return{card:i,container:i*this.countItemsInRow+this.countItemsInRow*this.marginBlocks}}#o(t,e="",s=[],i=[],a=[]){const l=document.createElement(t);""!==e&&(l.className=e);let h="";return s.map((t=>h+=t)),l.innerHTML=s,i.map((t=>l.append(t))),l}#a(){const t=this.#h(),e=t.card;this.blockGame.style.width=`${t.container}px`,this.blockGame.style.margin=`-${this.marginBlocks/2}px`,this.values.map((t=>{const s=this.#o("div",this.backClass,[`<img src="./images/${t}.jpg">`]),i=this.#o("div",this.frontClass,[`<svg class="a-logo" width="${Math.floor(.6*e)}px" height="${Math.floor(.2*e)}px"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo" /> </svg> <svg class="a-logo-quest" height="${Math.floor(.4*e)}px" width="${Math.floor(.1*e)}px"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-quest" /> </svg>`]),a=this.#o("div",this.classItem,[],[i,s]);a.style.height=`${e}px`,a.style.width=`${e}px`,a.style.margin=this.marginBlocks/2+"px",a.setAttribute("data-value",t),this.blockGame.append(a),this.isOpenStart?(setTimeout((()=>{this.#n(1,a)}),700),setTimeout((()=>{this.#n(0,a),this.#s&&(this.#s=0)}),4500)):this.#s&&(this.#s=0)}))}resizeBlocks(){const t=this.#h(),e=t.card;this.blockGame.style.width=`${t.container}px`;for(let t of this.nodesItems)t.style.height=`${e}px`,t.style.width=`${e}px`,t.querySelector(".a-logo").setAttribute("width",`${Math.floor(.6*e)}px`),t.querySelector(".a-logo").setAttribute("height",`${Math.floor(.2*e)}px`),t.querySelector(".a-logo-quest").setAttribute("width",`${Math.floor(.1*e)}px`),t.querySelector(".a-logo-quest").setAttribute("height",`${Math.floor(.4*e)}px`)}#l(){for(let t of this.nodesItems)t.addEventListener("click",(t=>{this.#c(t.currentTarget)}))}#c(t){!this.#s&&this.#r(t)}#n(t,e){e.classList.toggle("a-card-animate"),setTimeout((()=>{t?e.classList.add(`${this.classItem}-open`):e.classList.remove(`${this.classItem}-open`)}),100)}#r(t){if(!t.classList.contains(`${this.classItem}-open`)){const e=t.getAttribute("data-value");this.#n(1,t),this.#t.push(e),2===this.#t.length&&this.#m()}}#d(){for(let t of this.nodesItems){const e=t.getAttribute("data-value");!this.#e.includes(e)&&t.classList.contains(`${this.classItem}-open`)&&this.#n(0,t)}}#m(){this.#t[0]!==this.#t[1]||this.#e.includes(this.#t[0])?this.#u():this.#k(this.#t[0]),this.#t=[]}#u(){this.badClick+=1,this.#s=1,setTimeout((()=>{this.#d(),this.#s=0}),1e3)}#k(t){this.#e.push(t),this.luckClick+=1,8===this.#e.length&&console.log({"Удачные попытки":this.luckClick,"Неудачные попытки":this.badClick}),8===this.#e.length&&this.#g()}#g(){const t=this.#o("p",`${this.winClass}-big`,["Ура! Ты выиграл"]),e=this.#o("img");e.setAttribute("src","./images/win.png");const s=this.#o("a","",["Скачать стикерпак"]);s.setAttribute("href","#");const i=this.#o("div",`${this.winClass}`,[],[t,e,s]);setTimeout((()=>{this.parentNodeGame.innerHTML="",this.parentNodeGame.append(i)}),1e3),document.body.style.overflow="hidden"}}let e;const s={listImages:["image_1","image_2","image_3","image_4","image_5","image_6","image_7","image_8"]};window.addEventListener("load",(()=>{e=new t(s)})),window.addEventListener("resize",(()=>{e.resizeBlocks()}))})();