// 创建回到顶部按钮
function createBackToTopButton() {
    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        #back-to-top {
            position: fixed;
            right: 30px;
            bottom: 30px;
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        #back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
            #back-to-top {
                right: 20px;
                bottom: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(style);

    // 创建按钮
    const button = document.createElement('button');
    button.id = 'back-to-top';
    button.setAttribute('aria-label', '回到顶部');
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
    `;
    document.body.appendChild(button);

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    // 点击回到顶部
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 页面加载完成后创建按钮
window.addEventListener('load', createBackToTopButton); 