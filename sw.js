importScripts('/js/workbox-sw.prod.v2.1.1.js');

const workboxSW = new WorkboxSW({
cacheId: 'pwa-cache',
ignoreUrlParametersMatching: [/^utm_/],
skipWaiting: true,
clientsClaim: true
});
workboxSW.precache([{"url":"/js/jquery.fitvids.min.js","revision":"933ee1ba75e70b792d6d49d237cb620b"},{"url":"/js/jquery.ghostHunter.min.js","revision":"50ff499db8da8d530d813ff6f4f099ef"},{"url":"/js/script.min.js","revision":"f839794bc07ed5681695843c390e3f3f"},{"url":"/js/evil-icons.min.js","revision":"b77de0fe89ad34da6027b34963cb7c73"},{"url":"/js/jquery-2.1.4.min.js","revision":"f9c7afd05729f10f55b689f36bb20172"},{"url":"/fonts/Born/Born.woff","revision":"2d11011b3ebe66fbc7123e0f4e1a310a"},{"url":"/index.html","revision":"ccc8e26d2124603086b44a6fabfc00f6"},{"url":"/2018/01/25/The-Linux-Foundation/","revision":"aff5d2a51a3328e83d41379fa385851d"},{"url":"/2018/01/19/UK-EA-Forum-Part-Four/","revision":"05966de21a6763478073a83de9259105"},{"url":"/2018/01/14/Meltdown-and-Spectre/","revision":"ed58f70e47129c5339a965819d8eb1f9"}]);
workboxSW.router.registerRoute(/^api\/getdata/,
workboxSW.strategies.networkFirst());

workboxSW.router.registerRoute('/api/pic',
workboxSW.strategies.cacheFirst());
