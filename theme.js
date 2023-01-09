/*
;======================================
; Title: theme.js
; Author: Professor Krasso
; Date: 1/08/23
; Modified by: Janis Gonzalez
; Description: JavaScript theme file for WEB 330 - Enterprise JavaScript II
;=====================================
*/

/**
 * default theme set to light
 */

function setDefaultTheme() {
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * sets to user's selected theme and if none, set to default
 */

function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}