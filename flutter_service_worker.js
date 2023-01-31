'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a20ea925a9172f18f4603d563828f65b",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Urbanist-Medium.ttf": "70e637ec0b1644a19c2df09389a3b876",
"assets/assets/images/backgroundimages/account.png": "689c61fa7b6b508719a0ee868472088f",
"assets/assets/images/backgroundimages/ap%2520doc.png": "eb1afc459d96149ce99326d41c28aaf2",
"assets/assets/images/backgroundimages/appbar.png": "8fe1bcdf12c6f6177c3adb0b73c6307a",
"assets/assets/images/backgroundimages/appbarbg.jpg": "5745376915b05bef44dd12fe748ddce2",
"assets/assets/images/backgroundimages/appoint.svg": "2370435b8d6724b4c0c1032d97b07103",
"assets/assets/images/backgroundimages/camera.png": "ba9c7f6d3ea9780b630b022bdb747121",
"assets/assets/images/backgroundimages/category.png": "ee502642e677666dc601c753b80472b9",
"assets/assets/images/backgroundimages/chatting.png": "9734bd8b6dd8a8821c20c6abb0069414",
"assets/assets/images/backgroundimages/cold.png": "a163cd32fd2955b1805d183adb1ce422",
"assets/assets/images/backgroundimages/createnewpassword.png": "be05a05e679623456a6641becfd23266",
"assets/assets/images/backgroundimages/doclady.jpg": "5dc95f0794a79884428d2eb3f61604e6",
"assets/assets/images/backgroundimages/Doctor.png": "78afb975c147089332e7c6f6df3d2087",
"assets/assets/images/backgroundimages/dolo.png": "122d6b7ee079e117733c2d7db1ab1f36",
"assets/assets/images/backgroundimages/drawerbg.png": "52aecff1f5fe44357724b75f3aee22c6",
"assets/assets/images/backgroundimages/Facebook_Logo.png": "abb1a3924414728f57bc6d39ff3a2fbf",
"assets/assets/images/backgroundimages/forgotpassword.png": "15b4e719612beb82013e2cdb3b7e10d3",
"assets/assets/images/backgroundimages/gallery.png": "25b222287da75dd1348c4ed3cc68caec",
"assets/assets/images/backgroundimages/google.webp": "1d94cfe2ce6b5f05f74684ac04af8467",
"assets/assets/images/backgroundimages/Group%2520187.png": "c3cc358aa32f5416d7f2f50dbf9e9234",
"assets/assets/images/backgroundimages/india.png": "f525d7c26ec11f198d405ad7700dc3a1",
"assets/assets/images/backgroundimages/lady-doctor.png": "bf3f855d787fe3af4029bd5e36d549a4",
"assets/assets/images/backgroundimages/mail.png": "ccb3e343180f7262c81736b3753b5fa4",
"assets/assets/images/backgroundimages/Medical%2520Shield.png": "f39853eb4a0a00aa714788ccdbc343ac",
"assets/assets/images/backgroundimages/medicine%2520(2).png": "ff23660ba132f778644156bced8a530b",
"assets/assets/images/backgroundimages/Medicine.png": "235afdce172113dcbe5e9ffe89b116ec",
"assets/assets/images/backgroundimages/signin.jpg": "f46aa65e1b82be978cf7cdb76d66c5fc",
"assets/assets/images/backgroundimages/signup.jpg": "335ebaddced1adab524882cbbe5b4e04",
"assets/assets/images/backgroundimages/Stethoscope.png": "a4cff52fb7ef8c764f131c1fe019b2cd",
"assets/assets/images/backgroundimages/store.png": "41d69a3c043f65475cf548db4e468191",
"assets/assets/images/backgroundimages/Tablet%2520Strip.png": "19894278dfee16d1f0ee251addb9acde",
"assets/assets/images/backgroundimages/tablet.png": "e012635dd52befc8064cf07ac4fd8447",
"assets/assets/images/backgroundimages/time.png": "d35d9d594d2660a4a1f0815e7726a69d",
"assets/assets/images/backgroundimages/Vector%2520(1).png": "0c134aeff4e00379b554d99981ebf2a4",
"assets/assets/images/backgroundimages/wallet.png": "8df263f436bf9a3855507c3686661109",
"assets/assets/images/banners/appointmentnow1.png": "4521b92182259a302b3635827a4aa2e0",
"assets/assets/images/banners/blood%2520donate.png": "add9181ec2b936e165fe2f93b5b64322",
"assets/assets/images/banners/bone%2520&%2520joint.png": "46e5c3b3786b879f74658f959b98e5ad",
"assets/assets/images/banners/book%2520now1.png": "3305eb46d06d49968aee1342eee05891",
"assets/assets/images/banners/cardiac%2520care.png": "f3b77b2842c3741b23edbf9589bf32bc",
"assets/assets/images/banners/covid.png": "abaea4593f9d8a5135586627720d13b9",
"assets/assets/images/banners/devices.png": "0d6b4c6a0645fc75c26501b65cb7aaf2",
"assets/assets/images/banners/diabetes%2520care.png": "3f045ea62bda5bdc2d4f045cc1ae3ed9",
"assets/assets/images/banners/eye%2520care.png": "0756942e48c11a7f42d37f5f285bba5c",
"assets/assets/images/banners/fitness.png": "6c8b4f21c7463a32cfd335b028c3347b",
"assets/assets/images/banners/fstaid.png": "56b3c413e1bcbc2754b7d437a7a7bbac",
"assets/assets/images/banners/hair.png": "7965611d0728ecc0723256f039eaeba7",
"assets/assets/images/banners/hand%2520foot.png": "3fb4904f71e6c39731303b42aaafa853",
"assets/assets/images/banners/kidney%2520care.png": "c4c37cedf8ef4cb1ae12c4a705edfaca",
"assets/assets/images/banners/kyasanur%2520forest.png": "782a31a6b9a76b85d8e1586ee8be0c9b",
"assets/assets/images/banners/liver%2520care.png": "feafe229766b8f27b932819d7ebfd8e4",
"assets/assets/images/banners/med%2520door%2520step.png": "0dda0cf278c23dc5a8b0f41d61a49550",
"assets/assets/images/banners/medicinesnow1.png": "d7fc204febe9ffafc400df31dc236671",
"assets/assets/images/banners/mil%2520man.png": "4ddc9f0197203efa21c0c9a5782fabe1",
"assets/assets/images/banners/monkey%2520pox.png": "0d1a37125f43f2be94a9a5c62acef663",
"assets/assets/images/banners/pain%2520relief.png": "4b23d1ca1705f80c255e844498a10537",
"assets/assets/images/banners/pain.png": "726caa63f30cdf4bd7fd2c4c77adc3d5",
"assets/assets/images/banners/personal%2520care.png": "f8e9cefb4239292040b2986d79fba846",
"assets/assets/images/banners/resp.png": "c7f38585fdd7867597e8860c2d5f8540",
"assets/assets/images/banners/sandbag_1.png": "a2f196bcd9cd850c800431fb33d5d241",
"assets/assets/images/banners/senior%2520care.png": "5a04c011162c226d4ae36a06345abc40",
"assets/assets/images/banners/sexual%2520wellness.png": "f9281551f468894e1f8bd80f25c08331",
"assets/assets/images/banners/skin%2520care.png": "e1a4e54b0a386f858bcc9b1088b73d84",
"assets/assets/images/banners/stomach.png": "df83d6f5a6903990f79d9891a6762424",
"assets/assets/images/banners/surgicalmask.png": "27e5fb97e28d38653ad550cb694bb459",
"assets/assets/images/banners/uploadprescription.png": "419fa6bb3314cde71bea1bfb0106192a",
"assets/assets/images/categories/Artboard%25201.png": "73b75f7c49df3c97e8bf5f1a5f27b69e",
"assets/assets/images/categories/Artboard%25202.png": "3aef4487d5fa791b5d57e5feed24953c",
"assets/assets/images/categories/Artboard%25203.png": "8ae4a3dba7809b198b7b0c69b1e118db",
"assets/assets/images/categories/Artboard%25204.png": "5a440856730f23ee5b5a6a8d22db1d33",
"assets/assets/images/categories/Artboard%25205.png": "d23bcbc0e9a9dd7cf2d394932ad865ea",
"assets/assets/images/categories/Bioderma-Logo.png": "ec9d835ed98b90278bc47d39c5336eed",
"assets/assets/images/categories/Dabur_Logo.svg.png": "133c44052bff72da744365938e51f284",
"assets/assets/images/categories/diabetes.jpg": "067144a7a9a7a7d95e2ede586f4e0a82",
"assets/assets/images/categories/skincare.jpg": "e6d3b849cb653be32dab6842937daf26",
"assets/assets/images/categories/vitamis.png": "f0df6a75e9b4c77eba0bad3b7dfabc58",
"assets/assets/images/categories/wellness.png": "ad45c3927c3686b89bdeca7918630814",
"assets/assets/images/dp.jpg": "1906ab9313b6a6de57b8afb904e9c153",
"assets/assets/images/title/sooryalogo.png": "8730395004ec85d25babf408f095abbb",
"assets/assets/images/top%2520brands/aveeno.png": "c0dd5150f567b6e3e994502ca40f2e6f",
"assets/assets/images/top%2520brands/chiccco.png": "e247bf642b9c69ee504d9c9d2741b114",
"assets/assets/images/top%2520brands/dettol.png": "f6448231259b066dac7e15f4afb2727e",
"assets/assets/images/top%2520brands/dove.png": "8486970d5b5605934d3eafdd15cd776d",
"assets/assets/images/top%2520brands/mamma%2520earth.png": "4ef8e29205ebea33f916f7c353c00c99",
"assets/assets/images/top%2520brands/muscleblaze.png": "43651196e5a934d992050d55d931deb7",
"assets/assets/images/top%2520brands/nicotex.jpg": "f64dc1e6dd11d179e6f56211cc9097be",
"assets/assets/images/top%2520brands/NIVEA_logo_2021.svg.png": "2c90f7df49b2fbc536c185fb735c7b23",
"assets/assets/images/top%2520brands/pampers.png": "4cad936f4f7495d175f1a4dcfa38ef3e",
"assets/FontManifest.json": "852521d95061681d42b2c16acc1ef1c5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "81770430a43a4a799d3328052b9c4c64",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e430f2f229b1a9126b9b96896408ca3d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35f022787d24fcc1a48a42f008cbf17b",
"/": "35f022787d24fcc1a48a42f008cbf17b",
"main.dart.js": "64fc637731e350ee5b6e901d4c449be1",
"manifest.json": "f712bd58b65a9fcfa1a375e2bbcb89c3",
"version.json": "24f0148a2d842c67b993b44c1df43445"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
