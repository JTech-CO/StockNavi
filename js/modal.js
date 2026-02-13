// modal.js - Help Modal Function

function openHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.classList.remove('hidden');
}

function closeHelpModal() {
    document.getElementById('helpModal').classList.add('hidden');
}

function initModal() {
    // Close modal when clicking outside
    document.getElementById('helpModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeHelpModal();
        }
    });
}
