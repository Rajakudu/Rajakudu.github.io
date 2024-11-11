function openTopUpModal(gameName) {
    document.getElementById("modalGameName").textContent = `Top Up untuk ${gameName}`;
    document.getElementById("topUpModal").style.display = "flex";
}

function closeTopUpModal() {
    document.getElementById("topUpModal").style.display = "none";
}

function confirmTopUp() {
    const userId = document.getElementById("userId").value;
    const amount = document.getElementById("amount").value;
    if (userId && amount) {
        alert(`Top Up sebesar ${amount} untuk User ID: ${userId} berhasil!`);
        closeTopUpModal();
    } else {
        alert("Silakan masukkan User ID dan nominal top up.");
    }
}
