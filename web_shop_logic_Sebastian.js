    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        item.querySelector('.item-header').addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
            // Close others
            items.forEach(other => {
                if(other !== item) {
                    other.classList.remove('active');
                }
            });
        });
    });
