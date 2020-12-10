import runtime from "./seshat_browser.js";

const wasm = "./seshat_browser.wasm";
// Workers need the `nomodule` variants
const workerStartup = "./seshat_browser.nomodule.worker.js";
const workerRuntime = "./seshat_browser.nomodule.js";

if (!window.SharedArrayBuffer) {
    document.body.textContent =
        "Error: SharedArrayBuffer missing, check COOP / COEP headers";
}

runtime({
    locateFile(file) {
        if (file === "seshat_browser.wasm") {
            return wasm;
        }
        if (file === "seshat_browser.worker.js") {
            return workerStartup;
        }
        throw new Error(`Unable to locate file ${file}`);
    },
    // Even though this says "main", it's used by workers to find some
    // runtime they can use.
    mainScriptUrlOrBlob: workerRuntime,
});
