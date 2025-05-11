/**
 * Bubbly — минималистичный и гибкий уведомлятор для вашего интерфейса.
 *
 * Позволяет отображать всплывающие сообщения с плавной анимацией, типом (info, error и др.),
 * автоматическим скрытием и поддержкой позиционирования (например: left-bottom, right-top и т.д.).
 *
 * Особенности:
 * - Удобный синтаксис: Bubbly('Сообщение', { type: 'error', position: 'top-right' });
 * - Автоудаление по таймеру или отображение до ручного закрытия (timeleft: 0)
 * - Только один контейнер — легко стилизуется под любой UI
 *
 * Подключение: без зависимостей, но требует jQuery.
 *
 * Автор: kurakage
 * Версия: 1.0
*/
if(typeof Bubbly === 'undefined') {
	if(typeof generateUniqueId === 'undefined') {
		function generateUniqueId(prefix = 'id_') {
			return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
		}
	}

	function Bubbly(message, { type = 'info', timeleft = 3000, position = 'left-bottom', close = false } = {}) {
		const id = generateUniqueId('bubbly_');
		let container = document.getElementById('bubbly');
		
		const item = document.createElement('div');
		item.id = id;
		item.classList.add('bubbly-item', 'bubbly-' + type);
		item.style.opacity = '0';
		item.style.transform = 'translateY(-20px)';
		item.style.transition = 'all 0.3s ease';
		item.textContent = message;

		if(close === true) {
			const closeBtn = document.createElement('button');
			closeBtn.className = 'btn-close';
			closeBtn.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="8px" width="8px" viewBox="0 0 460.775 460.775">
					<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565
					c-2.913-2.911-6.866-4.55-10.992-4.55c-4.127,0-8.08,1.639-10.993,4.55L230.388,175.705L59.25,4.565
					c-2.913-2.911-6.866-4.55-10.993-4.55c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284
					c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719
					c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55l171.117-171.12l171.118,171.12
					c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
					c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
				</svg>`;
			closeBtn.addEventListener('click', () => {
				item.remove();
			});

			item.appendChild(closeBtn);
		}

		if(!container) {
			container = document.createElement('div');
			container.id = 'bubbly';
			container.classList.add('position-' + position);
			document.body.appendChild(container);
		}
		else {
			const existing = Array.from(container.classList).filter(c => c.startsWith('position-'));
			existing.forEach(c => container.classList.remove(c));
			container.classList.add('position-' + position);
		}

		container.appendChild(item);

		setTimeout(() => {
			item.style.opacity = '1';
			item.style.transform = 'translateY(0)';
		}, 10);

		if(timeleft !== 0) {
			setTimeout(() => {
				item.style.opacity = '0';
				item.style.transform = 'translateY(-20px)';

				setTimeout(() => {
					item.remove();
				}, 300);

			}, timeleft);
		}
	}
}