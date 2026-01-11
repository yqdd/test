// 期末页脚本：折叠/复制功能（与 midterm 相同逻辑，可复用）
document.addEventListener('DOMContentLoaded', function(){
  // 折叠/展开
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-target');
      const section = document.querySelector(`.section[data-section="${target}"]`);
      if(!section) return;
      if(section.style.maxHeight){
        section.style.maxHeight = '';
        section.style.overflow = '';
      } else {
        section.style.maxHeight = section.scrollHeight + 'px';
        section.style.overflow = 'hidden';
      }
    });
  });

  // 复制文本到剪贴板
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const target = btn.getAttribute('data-target');
      const section = document.querySelector(`.section[data-section="${target}"]`);
      if(!section) return;
      try {
        const text = section.innerText;
        await navigator.clipboard.writeText(text);
        btn.innerText = '已复制';
        setTimeout(()=> btn.innerText = '复制本节', 1200);
      } catch(err){
        console.warn('复制失败', err);
        btn.innerText = '复制失败';
        setTimeout(()=> btn.innerText = '复制本节', 1200);
      }
    });
  });
});