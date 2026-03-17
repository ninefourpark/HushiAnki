
// ==============================================
//  手机端：汉堡菜单 / 抽屉
// ==============================================
 
function toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const btn    = document.getElementById('hamburger-btn');
    const isOpen = drawer.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    // 抽屉打开时隐藏“俺寻思”小精灵，关闭时恢复
    const thinkTank = document.getElementById('think-tank');
    if (thinkTank) thinkTank.style.display = isOpen ? 'none' : '';
}
 

 
// 抽屉内「花色」按钮文字与桌面保持同步
function toggleHints() {
    const board = document.querySelector('.board');
    const hintBtn        = document.getElementById('hint-toggle');
    const drawerHintBtn  = document.getElementById('drawer-hint-toggle');
 
    const isActive = board.classList.toggle('show-hints');
    const label = isActive ? '隐藏花色' : '显示花色';
 
    if (hintBtn)       hintBtn.innerText = label;
    if (drawerHintBtn) drawerHintBtn.innerText = label;
}
