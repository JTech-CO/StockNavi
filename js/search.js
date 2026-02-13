// search.js - Integrated Search Filter Function

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const panels = document.querySelectorAll('.search-item');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        // If search term is empty, show all panels/rows
        if (term === '') {
            panels.forEach(panel => {
                panel.style.display = 'flex';
                const rows = panel.querySelectorAll('.hts-row');
                rows.forEach(row => row.style.display = 'table-row');
            });
            return;
        }

        // Filter logic
        panels.forEach(panel => {
            let hasMatch = false;
            const rows = panel.querySelectorAll('.hts-row');

            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = 'table-row';
                    hasMatch = true;
                } else {
                    row.style.display = 'none';
                }
            });

            // If there are matching rows, keep the panel, otherwise hide it
            if (hasMatch) {
                panel.style.display = 'flex';
            } else {
                panel.style.display = 'none';
            }
        });
    });
}
