/*
Title: htt-client.js
Author: Janis Gonzalez
Date: 2/26/2023
Description: JS file for whatabook2 for WEB-330
*/

// request building

export class HttpClient {

    async get(url, params = '') {
        url = new URL(url);
        url.search = new URLSearchParams(params);

        let res = await fetch(url.toString(), {
            method: 'GET'
        });
        return res.json();
    }

};