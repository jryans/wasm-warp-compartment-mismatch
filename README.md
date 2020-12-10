## Summary

Loading this multithreaded Wasm project triggers a compartment mismatch in
Firefox 85. It appears to be a regression caused by [bug
1660862](https://bugzilla.mozilla.org/show_bug.cgi?id=1660862).

## Steps to reproduce

1. Clone this repo
2. `yarn install` (to get a local HTTP server)
3. `yarn serve`
4. Go to http://localhost:5000
5. Wait ~10s for the large Wasm blob to download
6. Crash (reproduces every time)
