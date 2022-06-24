'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "0719bfc2ec55b3faa6338831d0ee1821",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e40e637a76fb5aaca34bfac9bd0408eb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e67df94daaa8dcb6a9aa3227a91381a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "430dce1f51c665845abb4a9112e684ed",
".git/logs/refs/heads/master": "430dce1f51c665845abb4a9112e684ed",
".git/logs/refs/remotes/origin/master": "afd84f244811d8607b59e32e6f662b77",
".git/objects/08/98cf2af8e183f2fa890cc047c3ceeae9843a76": "b0c1252ea27708a420ede281e44a8ddb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/1a/e64f89a071987a6f4ae4699a308e76f97d112a": "0cc0023480dfabbee6995c0b6545f4a3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/3ab9b095b178d1e826134dc842895b483b64cb": "fb9319c60c84889b0aa90c346aaa1c3b",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/43882dfe0c2d36abd50e33d0671f880962261c": "ef1d2ddb11d4e331d1b0b51c840f865c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/47c9dd0b4b93f32a1b18a70dbac08974739b9f": "a2456b5730c28e201076e517692c57e4",
".git/objects/30/4ff6335d5a84a82b54225d3af8c507ee1295d9": "4fb190ecde63aa3c1f748742f5a9e32b",
".git/objects/34/ef403e0674916571c27be43a7a0b3ff1c01f5b": "e44147cbf1dd65d96d20d2e59aa387c2",
".git/objects/3f/2f8d3fc65f3f15aba093933055f7af811f94a0": "c6de2663f2101d7a48de29288d5a2eae",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/5abbf1f347f6c6b21b2af9a24c80b39d8b358b": "ad1468052c73f08f34e15d7a6f5132b7",
".git/objects/51/2a000a5cf8a76768557850b42ac2b54347bd0f": "a83e72fedcf3ae97f75a4794c317dd72",
".git/objects/57/e659bb79954ad9771ed37e35e4fa351033595b": "6df460a0801cad1b008deccbcc3dd17f",
".git/objects/5a/d327b736de76b681c6338100f6e7e341e50ee4": "8f3d1b0429ec4dc61e76a6ca6f99652a",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/6b/d3f2e14240faa5ba8519d2a39a699cdb33bf32": "244abb60ccd768945c58501138473040",
".git/objects/6c/141154cec472bbfcd89fb976bb95563b0ab5d1": "16122dea207241d9e2b3f87fa497bb5a",
".git/objects/72/f1e13457574e020371bacecc4405a5174a8ebf": "98f9477ecccdfe50088dcd732ea38c47",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/8b/149fe7c3a9f36a87621007037bb3c335ccd882": "dcb058da0832f9564f37944219afff17",
".git/objects/8b/897b3c4b3ff99065295c33efdd7409f00714c3": "c5c66a7ce7a0cfa2ea8fd54ad089e537",
".git/objects/95/587621ef0cfe49cf825434a0604114b3cd8d23": "407cc1d86046971742c629ecd92ed53a",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/ad/65a960066dc57f8f5fc45482c1057956c008c5": "ff9f75c1be961aef4198ada852cee8ad",
".git/objects/b4/f568060800a001b4806a3de0ae7fca5419f49e": "4b4360bbf88268d9bc18acf380a49d38",
".git/objects/b8/d30da2b0ce9bd1a7adc3085865c715a4fb238b": "db8e7271866a7182b06bb40d832e4bcb",
".git/objects/b9/fc67ea0e40c499463477af5736c1d47aa7fbd4": "cbaa0573be06093203b2fc30e3d82d6f",
".git/objects/ba/4bc5de3a11f52e04ca5bc0277c9c05a8358401": "82bd1a05ca59703c28f253d11557aade",
".git/objects/bb/143c4f5fb399e1323fd351946ec64fac9ca057": "19ee0c6cacb9117374657e3ac70e3abd",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/bf/fa93b51adb6ddb08ea212a2d8ffd4c0d516cab": "ae782e814484840c8156d2792ad6a2b1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d3/ed6eb2db8dab79bd06e6a2d0f68be36a98b9cc": "dccb2d965ba4d29b9c4c17603437bc92",
".git/objects/d9/e4714eca2efcdcbb0f92124c44fbba87e8c4c6": "538feca48a40906172392d05ea403f43",
".git/objects/dc/85c7002d41cab150ded0d62806f27714b49e7d": "9990dc53b4f9ef6cd1b527c32510ed1f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/a6ce187f2ea466c2966f754ce3da174ef076dc": "8a1d95b212b8cdfe42435f263ee32c4c",
".git/objects/e0/22fceb5990589a9500613c0f4fb98e17115164": "85f5f6b44d3f26eab02be25f1f0489f9",
".git/objects/e7/2dfd0875bb2bd3d128b4e308ca004732b57630": "7ab24f6e3bb9e63f385494ca5e45f558",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ed/5678990300772db1b361e912350d22723e6d49": "6053bfc950c04ce9e52eb3603fb843a8",
".git/objects/f5/bea1b3ecbaef4b569bca7c052b490c657b5675": "efe15036e6dd7fd49baa9ed6dca61c43",
".git/objects/f7/271773fc260fd2cda1bda314b676e53f7e4317": "7e390835bb4cd0855278f52983b932ec",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/ORIG_HEAD": "9aaf7a2c42ab366ce48c1343a8dfba6f",
".git/refs/heads/master": "9aaf7a2c42ab366ce48c1343a8dfba6f",
".git/refs/remotes/origin/master": "9aaf7a2c42ab366ce48c1343a8dfba6f",
"assets/AssetManifest.json": "e53c41c29d22f25ecf74233217f10e3b",
"assets/assets/about.html": "08a72ccf84fd1a2813c696cf6c4a68db",
"assets/assets/avatar.jpg": "bebd4fa9cbcf6c252b4636773c6f07d5",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"assets/assets/works/cryptotracker.png": "55443b34c960238e91eed8ce9317e0d5",
"assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"assets/FontManifest.json": "ab310715c29abd30b1eb1b6c626d8ec7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8b13ef7c91aeee6cda33888165bc3828",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"index.html": "93b368e1266728ec2b13e580ea548c41",
"/": "93b368e1266728ec2b13e580ea548c41",
"main.dart.js": "94df904d3320c4437258b247e5396751",
"version.json": "0d301e69a58e79b04a71f22b121998f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
