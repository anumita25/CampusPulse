function showToast(title, body){
  const t=document.getElementById('toast');
  t.querySelector('.tt').textContent=title;
  t.querySelector('.tb').textContent=body;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(()=>t.classList.remove('show'), 4200);
}
function getToken(type, name, myNum, servingNum, untilText, aheadNum, aheadLabel){
  document.getElementById(type+'-token-sub').textContent = name;
  document.getElementById(type+'-token-num').textContent = '#'+String(myNum).padStart(2,'0');
  document.getElementById(type+'-token-lbl').textContent = 'now serving #'+String(servingNum).padStart(2,'0');
  document.getElementById(type+'-token-until').textContent = untilText;
  document.getElementById(type+'-token-ahead').textContent = aheadNum;
  document.getElementById(type+'-token-ahead-lbl').textContent = aheadLabel;
  go(type+'-token');
}
function cancelToken(){
  showToast('Token cancelled', 'Your spot has been released back into the queue.');
  setTimeout(()=>go('hub'), 600);
}
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.dotref').forEach(d=>d.classList.toggle('on', d.dataset.s===id));
  window.scrollTo({top:0,behavior:'instant'});
  document.getElementById(id).scrollTop=0;
  if(id==='mess-status'){
    clearTimeout(window._notifTimer);
    window._notifTimer=setTimeout(()=>showToast('Leave now 🏃','8 min walk gets you there as #47 is called.'), 2200);
  }
}
document.querySelectorAll('.opt').forEach(o=>{
  o.addEventListener('click', ()=>{
    document.querySelectorAll('.opt').forEach(x=>{if(x.parentElement===o.parentElement)x.classList.remove('sel');});
    o.classList.add('sel');
  });
});
go('splash');
