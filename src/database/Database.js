
import localforage from "localforage";

export async function initializeDatabase() {
    // $ = require('jquery');
    console.log("Initializing Database");
    let gpus = [];
    let compare = new Set();
    var AMDjson = require('./GPUs.json');
    var id = 0;
    for(var key in AMDjson){
        var data = AMDjson[key];
        if(data["Memory Size"] === -1){
            data["Memory Size"] = "N/A";
        }
        if(data["Length"] === -1){
            data["Length"] = "N/A";
        }
        if(data["TDP"] === -1){
            data["TDP"] = "N/A";
        }
        if(data["Width"] === -1){
            data["Width"] = "N/A";
        }
        if(data["Height"] === -1){
            data["Height"] = "N/A";
        }
        data["id"] = id;
        id++;
        gpus.push(data);
    }
    await localforage.setItem("gpus", gpus);
    await localforage.setItem("compare", compare);
}

export async function getGpus() {
    return await localforage.getItem("gpus");
}

export async function getCompare() {
    return await localforage.getItem("compare");
}

export async function addCompare(id) {
    // await localforage.setItem("compare", compare);
    let compare = await getCompare();
    compare.add(id);
    await localforage.setItem("compare", compare);
}