<script>
    document.addEventListener('DOMContentLoaded', function () {
        const accordionItems = document.querySelectorAll('[data-accordion-target]');

        accordionItems.forEach(item => {
            item.addEventListener('click', function () {
                const target = document.querySelector(this.getAttribute('data-accordion-target'));

                if (target) {
                    const isOpen = target.classList.contains('hidden');
                    accordionItems.forEach(item => {
                        const otherTarget = document.querySelector(item.getAttribute('data-accordion-target'));
                        if (otherTarget && otherTarget !== target) {
                            otherTarget.classList.add('hidden');
                        }
                    });

                    if (isOpen) {
                        target.classList.remove('hidden');
                    } else {
                        target.classList.add('hidden');
                    }
                }
            });
        });
    });
</script>
