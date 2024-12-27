document.addEventListener('DOMContentLoaded', () => {
    // 获取当前日期
    const currentDate = new Date().toLocaleDateString();
    // 找到目标元素并设置内容
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = currentDate;
    } else {
        console.error('目标元素未找到，请检查HTML结构！');
    }
});
