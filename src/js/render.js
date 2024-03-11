// GET OBJECTS

// General
const overlay = document.getElementById("overlay")

// Topbar buttons
const minimize_btn = document.getElementById("minimize-btn")
const maximize_btn = document.getElementById("maximize-btn")
const close_btn = document.getElementById("close-btn")

minimize_btn.addEventListener("click", () => { window.topbar.minimize() })
maximize_btn.addEventListener("click", () => { window.topbar.maximize() })
close_btn.addEventListener("click", () => { window.topbar.close() })

// User menu
const open_btn = document.getElementById("sideBar-icon")

open_btn.addEventListener("click", () => { document.getElementById("user-menu").classList.add("active"); overlay.classList.add("active") })
overlay.addEventListener("click", () => { document.getElementById("user-menu").classList.remove("active"); overlay.classList.remove("active") })