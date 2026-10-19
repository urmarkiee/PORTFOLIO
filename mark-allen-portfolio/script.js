'use strict';
const one=(selector,root=document)=>root.querySelector(selector);
const many=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
const root=document.documentElement;
const safeStore={read(key){try{return localStorage.getItem(key)}catch{return null}},write(key,value){try{localStorage.setItem(key,value)}catch{}}};

// Ambiance selector and optional background audio
const ambienceToggle=one('#ambienceToggle'),ambiencePanel=one('#ambiencePanel'),ambienceClose=one('#ambienceClose');
function openAmbience(open){ambiencePanel.hidden=!open;ambienceToggle.setAttribute('aria-expanded',String(open));}
ambienceToggle.addEventListener('click',event=>{event.stopPropagation();openAmbience(ambiencePanel.hidden)});
ambienceClose.addEventListener('click',()=>openAmbience(false));
document.addEventListener('pointerdown',e=>{if(!ambiencePanel.hidden&&!ambiencePanel.contains(e.target)&&!ambienceToggle.contains(e.target))openAmbience(false)});
function setTheme(name){const theme=['dark','light','slate'].includes(name)?name:'dark';root.dataset.theme=theme;many('[data-theme]').filter(x=>x.tagName==='BUTTON').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.theme===theme)));safeStore.write('engineering-desk-theme',theme);one('meta[name="theme-color"]').content=theme==='light'?'#f6f8fd':theme==='slate'?'#101b24':'#070d19'}
setTheme(safeStore.read('engineering-desk-theme')||'dark');
many('.theme-option').forEach(btn=>btn.addEventListener('click',()=>setTheme(btn.dataset.theme)));
const audio=one('#backgroundMusic'),musicButton=one('#musicToggle'),musicLabel=one('#musicLabel'),volume=one('#volume');
function musicUI(){musicLabel.textContent=audio.paused?'Play relaxing music':'Pause relaxing music';one('use',musicButton).setAttribute('href',audio.paused?'#i-play':'#i-pause');musicButton.setAttribute('aria-pressed',String(!audio.paused))}
audio.volume=.24;volume.addEventListener('input',()=>{audio.volume=Number(volume.value)/100});musicButton.addEventListener('click',async()=>{if(audio.paused){try{await audio.play()}catch{musicLabel.textContent='Unable to play audio'}}else audio.pause();musicUI()});audio.addEventListener('play',musicUI);audio.addEventListener('pause',musicUI);musicUI();

// Mobile navigation
const mobileMenu=one('#mobileMenu'),menuButton=one('#mobileMenuToggle');
function toggleMobile(show){mobileMenu.hidden=!show;menuButton.setAttribute('aria-expanded',String(show));menuButton.setAttribute('aria-label',show?'Close menu':'Open menu')}
menuButton.addEventListener('click',()=>toggleMobile(mobileMenu.hidden));many('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>toggleMobile(false)));
window.addEventListener('resize',()=>{if(window.innerWidth>920)toggleMobile(false)},{passive:true});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){openAmbience(false);toggleMobile(false)}});

// Home navigation and active section tracking.
// The Home target must be outside the sticky header so it can actually scroll back to the top.
const navigationLinks=[...many('.desktop-nav a'),...many('.mobile-menu a')];
const scrollSections=many('main section[id]');
function setActiveSection(id){
  navigationLinks.forEach(link=>{
    const active=link.getAttribute('href')==='#'+id;
    link.classList.toggle('current',active);
    if(active)link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
}
function updateActiveSection(){
  const threshold=Math.max(110,window.innerHeight*.20);
  let current='home';
  for(const section of scrollSections){
    if(section.getBoundingClientRect().top<=threshold)current=section.id;
  }
  setActiveSection(current);
}
let activeNavScheduled=false;
window.addEventListener('scroll',()=>{
  if(activeNavScheduled)return;
  activeNavScheduled=true;
  requestAnimationFrame(()=>{activeNavScheduled=false;updateActiveSection()});
},{passive:true});
window.addEventListener('resize',updateActiveSection,{passive:true});
// Explicitly handle Home clicks for desktop, mobile, header brand, and footer logo.
many('a[href="#home"]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  toggleMobile(false);
  openAmbience(false);
  setActiveSection('home');
  try{history.replaceState(null,'','#home')}catch{}
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduceMotion?'instant':'smooth'});
}));
updateActiveSection();

// Case file category filter
const filters=many('.filter-button'),cases=many('.case-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{const category=btn.dataset.filter;filters.forEach(b=>{const selected=b===btn;b.classList.toggle('is-active',selected);b.setAttribute('aria-pressed',String(selected))});let count=0;cases.forEach(card=>{const display=category==='all'||card.dataset.category===category;card.hidden=!display;if(display)count++});one('#filterEmpty').hidden=count>0}));

// Horizontally swipeable technology rail
const rail=one('#toolsRail');function scrollRail(factor){rail.scrollBy({left:factor*345,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
one('#toolsPrev').addEventListener('click',()=>scrollRail(-1));one('#toolsNext').addEventListener('click',()=>scrollRail(1));rail.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();scrollRail(-1)}else if(e.key==='ArrowRight'){e.preventDefault();scrollRail(1)}});
function updateRail(){one('#toolsPrev').disabled=rail.scrollLeft<4;one('#toolsNext').disabled=rail.scrollLeft>=rail.scrollWidth-rail.clientWidth-4}rail.addEventListener('scroll',updateRail,{passive:true});window.addEventListener('resize',updateRail,{passive:true});updateRail();

// Full-screen local media inspector
const galleryData=[
 {src:'assets/projects/obstacle-robot.jpg',title:'Smart Obstacle-Avoiding Robot',caption:'Arduino robotics prototype on display.'},
 {src:'assets/projects/medicare-front.jpg',title:'MEDICARE — Front View',caption:'Medicine reminder prototype with display and buttons.'},
 {src:'assets/projects/medicare-inside.jpg',title:'MEDICARE — Interior View',caption:'Internal electronic components and mechanical assembly.'},
 {src:'assets/projects/logitrack.png',title:'LogiTrack 1.0',caption:'Logistics tracking website screenshot.'},
 {src:'assets/documents/sip-certificate.jpg',title:'SIP — Certificate of Participation',caption:'Team ELNO — Top 15, Bato-Balani Version 2.0.'},
 {src:'assets/projects/synced-n-welcome.jpg',title:'Synced N — Welcome Screen',caption:'Get Started interface for the Synced N church ministry management application.'},
 {src:'assets/projects/synced-n-login.jpg',title:'Synced N — Sign In Screen',caption:'Email or mobile number and password interface with a Google sign-in option.'}
];
const gallery=one('#gallery'),galleryImage=one('#galleryImage');let activeImage=0;
function renderGallery(index){activeImage=(index+galleryData.length)%galleryData.length;const item=galleryData[activeImage];galleryImage.src=item.src;galleryImage.alt=item.title;one('#galleryTitle').textContent=item.title;one('#galleryCount').textContent=`${activeImage+1} / ${galleryData.length}`;one('#galleryCaption').textContent=item.caption;one('#galleryOriginal').href=item.src}
many('.gallery-open').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();renderGallery(Number(link.dataset.gallery));if(!gallery.open){gallery.showModal();document.body.classList.add('gallery-opened')}}));
one('#galleryPrev').addEventListener('click',()=>renderGallery(activeImage-1));one('#galleryNext').addEventListener('click',()=>renderGallery(activeImage+1));one('#galleryClose').addEventListener('click',()=>gallery.close());gallery.addEventListener('close',()=>document.body.classList.remove('gallery-opened'));gallery.addEventListener('click',e=>{if(e.target===gallery)gallery.close()});document.addEventListener('keydown',e=>{if(!gallery.open)return;if(e.key==='ArrowLeft')renderGallery(activeImage-1);else if(e.key==='ArrowRight')renderGallery(activeImage+1)});
let swipeStartX=null;galleryImage.addEventListener('touchstart',e=>{swipeStartX=e.changedTouches[0].screenX},{passive:true});galleryImage.addEventListener('touchend',e=>{if(swipeStartX===null)return;const d=e.changedTouches[0].screenX-swipeStartX;if(Math.abs(d)>55)renderGallery(activeImage+(d<0?1:-1));swipeStartX=null},{passive:true});

// Contact topics open the visitor's own email app, no false form submission.
many('[data-inquiry]').forEach(button=>button.addEventListener('click',()=>{const subject=encodeURIComponent('Portfolio Inquiry — '+button.dataset.inquiry);const body=encodeURIComponent('Hello,\n\nI would like to discuss '+button.dataset.inquiry.toLowerCase()+'.\n\n');window.location.href='mailto:sarmientomark936@gmail.com?subject='+subject+'&body='+body}));

// GitHub public profile stats are optional; do not fabricate data if offline.
const status=one('#githubStatus');
(async()=>{try{const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),5500);const response=await fetch('https://api.github.com/users/urmarkiee',{signal:controller.signal,headers:{'Accept':'application/vnd.github+json'}});clearTimeout(timer);if(!response.ok)throw Error('GitHub unavailable');const profile=await response.json();if(typeof profile.public_repos!=='number'||typeof profile.followers!=='number')throw Error('Invalid GitHub data');one('#repoCount').textContent=profile.public_repos.toLocaleString();one('#followerCount').textContent=profile.followers.toLocaleString();status.textContent='LIVE';one('#githubNote').textContent='Public statistics retrieved from GitHub. Open the profile for up-to-date repository activity.'}catch{status.textContent='OFFLINE';one('#githubNote').textContent='Live GitHub data could not be loaded here. Visit the profile to view current activity.'}})();
one('#year').textContent=new Date().getFullYear();


// Clickable profile photo toggle
const profileToggle=one('#profileToggle');
const profileImage=one('#profileImage');
if(profileToggle&&profileImage){
  const captionLeft=one('#profileCaptionLeft');
  const roleLine=one('#profileRoleLine');
  const formalSrc=profileImage.dataset.formal;
  const casualSrc=profileImage.dataset.casual;
  const setProfileMode=(mode)=>{
    const casual=mode==='casual';
    profileToggle.dataset.mode=mode;
    profileToggle.classList.toggle('profile-alt', casual);
    profileToggle.setAttribute('aria-pressed', String(casual));
    profileToggle.setAttribute('aria-label', casual?'Show formal portrait':'Show casual portrait');
    profileImage.src=casual?casualSrc:formalSrc;
    profileImage.alt=casual?'Casual photo of Mark Allen Sarmiento':'Formal portrait of Mark Allen Sarmiento';
    if(captionLeft) captionLeft.textContent=casual?'PERSONAL MODE':'IDENTITY VERIFIED';
    if(roleLine) roleLine.textContent=casual?'Computer Engineering Student · Personal View':'Computer Engineering Student';
    safeStore.write('engineering-desk-profile-mode', mode);
  };
  const storedMode=safeStore.read('engineering-desk-profile-mode');
  setProfileMode(storedMode==='casual'?'casual':'formal');
  profileToggle.addEventListener('click',()=>{
    profileToggle.classList.remove('profile-animate');
    void profileToggle.offsetWidth;
    profileToggle.classList.add('profile-animate');
    setProfileMode(profileToggle.dataset.mode==='formal'?'casual':'formal');
    setTimeout(()=>profileToggle.classList.remove('profile-animate'),600);
  });
}
