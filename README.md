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

## Crash reports

* https://crash-stats.mozilla.org/report/index/490a9c3a-53a9-464f-835c-ca7ef0201210
* https://crash-stats.mozilla.org/report/index/2fb6a7f8-941e-4574-800c-bc0da0201210
* https://crash-stats.mozilla.org/report/index/b7111bdd-e17e-4f03-a329-a06280201210
* https://crash-stats.mozilla.org/report/index/f86abc5f-ebb1-4e9d-9c4a-429c30201210
* https://crash-stats.mozilla.org/report/index/ba14e939-4ebf-4aa9-9d86-a8cd20201210
* https://crash-stats.mozilla.org/report/index/605f946a-437e-4cba-872d-214ee0201210
