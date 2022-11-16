document.addEventListener("keydown", (e) => {
    if (e.key === "p" && e.ctrlKey) {
        e.preventDefault();
        localStorage.setItem("waktu", "pagi");
        window.location.reload();
    }
    if (e.key === "s" && e.ctrlKey) {
        e.preventDefault();
        localStorage.setItem("waktu", "sore");
        window.location.reload();
    }
    if (e.key === "m" && e.ctrlKey) {
        e.preventDefault();
        localStorage.setItem("waktu", "malam");
        window.location.reload();
    }
});