// 主页与通用脚本：返回操作、平滑滚动、按钮增强
document.addEventListener('DOMContentLoaded', function(){
  // 返回主页链接（如果存在）
  const back = document.getElementById('back-home');
  if(back) back.addEventListener('click', (e)=>{ e.preventDefault(); location.href = 'index.html'; });

  const back2 = document.getElementById('back-home-2');
  if(back2) back2.addEventListener('click', (e)=>{ e.preventDefault(); location.href = 'index.html'; });

  // 为卡片按钮添加简单点击反馈（用于主页）
  const mid = document.getElementById('open-midterm');
  const fin = document.getElementById('open-final');
  [mid, fin].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', ()=> {
      btn.style.transform = 'translateY(1px)';
      setTimeout(()=> btn.style.transform = '', 200);
    });
  });
});