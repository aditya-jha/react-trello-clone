"use strict";

// read and  write from localstorage for persistence

const LocalStorageService = {
    fetchData() {
        return new Promise((resole, reject) => {
            try {
                let data = localStorage.getItem("list") || "[]";
                data = JSON.parse(data);
                resole(data);
            } catch (err) {
                reject(err);
            }
        });
    },

    setData(data) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem("list", JSON.stringify(data));
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }
};

export default LocalStorageService;