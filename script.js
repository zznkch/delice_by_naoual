(function() {
    const cakeModel = document.getElementById('cake3DModel');
    if (cakeModel) {
        cakeModel.addEventListener('click', function() {
            this.style.transform = 'scale(1.4) rotateY(360deg)';
            this.style.transition = 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.5)';
            setTimeout(() => { this.style.transform = ''; }, 700);
        });
    }

    const buttons = document.querySelectorAll('.btn-perfected');
    const stars = ['✧','✦','·','∘','✶'];
    buttons.forEach(btn => {
        const positions = [
            { top: '-14px', left: '12px' },
            { top: '50%', right: '-18px' },
            { bottom: '-16px', left: '40%' }
        ];
        positions.forEach(pos => {
            if (Math.random() > 0.35) {
                const star = document.createElement('span');
                star.className = 'deco doodle-star';
                star.setAttribute('aria-hidden', 'true');
                star.style.cssText = `top:${pos.top || 'auto'}; left:${pos.left || 'auto'}; right:${pos.right || 'auto'}; bottom:${pos.bottom || 'auto'};`;
                star.textContent = stars[Math.floor(Math.random() * stars.length)];
                btn.appendChild(star);
            }
        });
    });

    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.7s ease';
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('animate').forEach(anim => anim.setAttribute('dur', '0.01ms'));
    }
})();