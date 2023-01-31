'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "80a9a3edf38ef664f56770f83ea04d13",
".git/config": "73844111533c91f539f5a46633422279",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "cece317775d3436a57c0b5267edeadcc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "693dbad956e1923afa7451925ca2c2cd",
".git/logs/refs/heads/main": "962eed3fd0d4a3fc5ac4aa62745c84c0",
".git/logs/refs/remotes/origin/main": "3ce97fbd7aab5b38a896c0f00d60ccdc",
".git/objects/04/3f4f73ded3083605455ea935bef6f43fca0635": "4ef087ca565690fd7d2be095f7070f3f",
".git/objects/04/742aa1ba37bd121b9a9f490aabd54faba3324e": "3af4839784248c40e4d3a1249c3dfde2",
".git/objects/07/4e8dd322260f58c48d14c50cae217c3e6f41f1": "d217ddd675fbbb0cd156d29bc84264e4",
".git/objects/0b/55eb0468d6dfeb307b5ea5ad7e7043e0bf9be3": "ef59fbc161508e0de277ef9496f8e3b2",
".git/objects/0b/80ce38231807eb27b8a8aeab06a1cc9dd16944": "36abb570fd9be59a15a79f8090726f6d",
".git/objects/10/3109ca4631eeeee6df8463704377ab54da8ff3": "b70695a068876e8336ca3dd745a83528",
".git/objects/13/6afa4efc1576d225be1f47b1117432c7fffedd": "01ca5de99909954d6f45a82ab6007b45",
".git/objects/16/86d63022e15029819c2391c750f0f96e6bdbaf": "19ffdf1d913cd7f2c5e014d9192bd9b3",
".git/objects/16/dda5daa3014f46e62b7d6300f70a0f13735d0c": "37b6ae1ffc5348dd08e542ba5fcabd1d",
".git/objects/17/e960024865bb55161d16215eab35ec063c23ba": "2434ac4bd4f266baf8159e5d77ca5eba",
".git/objects/18/4a73688c77169c4e9ad4b56e32db64296007a7": "ffbf1bf64b0651e50f368ad8d15b34f1",
".git/objects/19/4aa9b8ae5238fe1445e138130ad83543ec16c9": "efaf4a7186dc5b9e35d944782dca6a6d",
".git/objects/1a/b4624195998e350f840b1c21860b05823757eb": "3a29c347806b5bfccf3674dc05ec22eb",
".git/objects/1e/d1727b194b924442d38111644466f5b7d6c0e0": "452a24825564e6750fcfc6d6c0d814e5",
".git/objects/23/b97be4bbface5d7759055f288659cf5f929f36": "bf8fd7825e2e8674dc4c97e874079f02",
".git/objects/2a/12f7e30e6ef7b204c9f4f180ad768e402cbdb5": "0371ff6489c075431a674284359ddbab",
".git/objects/2a/7b79548254e1a38dd655e6aa49c8cb7f7ba12a": "382dd3a6ae5f112c9625cf0692fbf52e",
".git/objects/2c/c4271f01d1c3568af5f5ca514bc881179c6ddf": "f727d0bdfcf10df4fc0d9db0d6b5a5d2",
".git/objects/2f/77898920234025c0f74cb77f51d40315a059eb": "0997e8b8a2606ee162708c9a788d304c",
".git/objects/2f/a5ae4351a4ecd5326b518c87587825a93ffba3": "749f457f69c55cf70ee0c318dea36560",
".git/objects/2f/f3636bde4829223df8b0cda9bdfa4648e5dc13": "e07537e74002569d12b9333fe8155fce",
".git/objects/32/e9994dce7cd07a521e29cb3b0710b8e6a4bbc0": "ac89c0a7af87829b86d7b66972fe1057",
".git/objects/34/fe4003cce866a83b003b7417515df1c96f079a": "f000b00f78210677edeac708ac4eea46",
".git/objects/38/ddbb3e8e61319965fa8ec62aa27532be58e9b2": "f3e43e7a5dfffb39b5102efe80c3f0d9",
".git/objects/41/1f6491bda2e8efe36301dcaec7319aaab1f42b": "c5ba6c13caff89c24155e719f194df29",
".git/objects/42/bbbd6f8e33828360cb0dced47ef64f5845f946": "993049282b3f844aed0bbb49f1eab6c5",
".git/objects/45/780a071175e48849ac23783a4c8d24a662cc37": "846761167cf625153bb59a1afc6b1fb5",
".git/objects/49/63dec9dc89395c4abdfa02bc07847ef59bf335": "f4614a9527a58fa2edb0e1cb2102e1e1",
".git/objects/49/80dda1e6802cc5104d0bf717d1749fb59c34f7": "0f4500a6da422df4a109b9b5c6b7fcec",
".git/objects/4a/4b72abaa39b043e2f1f6dbdf8d5ec6b62893e8": "bb91c1bfffc0c9a47d61c3ef8e35f108",
".git/objects/4a/5fe57009308435ef062d0955996bd12b9edbec": "76d8051b04393037c1fcad746a771e48",
".git/objects/4a/e16205b9e9f25bab16c063e2a0b1029bf5989d": "47c603566b95595979665812d5b8dea5",
".git/objects/4c/35cd3831241d9f60702a66972e1b3cbea81e52": "86010d6228bcabcc2f543266f43d4d5e",
".git/objects/4f/00a96bb44cbaa1ac5e0ce6b8e33c9759dcea18": "1be6fbe97f9b13b3a6bdc89676276b72",
".git/objects/4f/a6be10df3c845a6f5eef9ea44823dc385c08ea": "1e0046507301ad4cbc40b8f3c8acad54",
".git/objects/4f/c9800df9c9731ed9e36ef96cffc59d96db66e7": "1452b2626b2b3c88fe2b0878896e7ad3",
".git/objects/50/3a33af4b27e94a4dc4900f2e925f5147077c0b": "37bdec6f111dd001044b2a26dfb833ff",
".git/objects/53/65528a6344a8c0d7326d4c7227fecc26a14438": "ec1242f7b8e1afbf1d8eb2ead6421aee",
".git/objects/58/841b5782720b904fcbba8657f80ff56de5aaf5": "28f169002f121c48b26e931115a24fe9",
".git/objects/59/19847e56713103957631d93e29096ef998e3fb": "633e4bc66cba16c355248d22be8829cf",
".git/objects/5a/99cdfa6567a4b37938367492f9d006915cf0c3": "c0982f07c43803c57f7b4f62a45f93d4",
".git/objects/5b/ea5d8b0260905b6c1a734d9f651eb485abc266": "baa7275114bc4f506398b9a224fce8e9",
".git/objects/5c/110b47085228fb4e20a787594dcc6109a79efd": "19b205d6fda64b83da46ea90753a498d",
".git/objects/5e/45755551f96454b82e09b3b85ee3e12683f8e8": "c33cf4cdce15c739a2d03d4421aa1144",
".git/objects/60/235b802b379bd253c03de12bca58a71d3deb29": "541e682d92109b25a9804346930aef18",
".git/objects/61/31d545bb39d2be8ab68d9d5563ad64dec4b6bb": "b6e21d052c27c41faee84c4806d60d00",
".git/objects/61/ea73956035ccd0e5ef12a71fcee47cc980194d": "8cf9a4f43575f5c3af299040b6caf496",
".git/objects/66/a609b97cbc846b5460a308fe8ef8864c9bff4d": "116d1ae3b73f1aa23e99e56ca1af3a4b",
".git/objects/67/2e440c8528ad71e446089c2ac09a130ffac07a": "5a52f0fd157dae73b07503a7a71d1d08",
".git/objects/67/ef8bcd14a9cbdd2fd03134a2b3b5e97b06d52c": "f41d9da3e2d95602456b1c1c093f9c11",
".git/objects/68/7dfaf1d752cf26c4ef11fb419608ff559e84e2": "57aa51a888cd1c66c813c2f300889bb9",
".git/objects/68/a5dfbd8a6c50f0a73190cf96af07a8bb3afc53": "de627854f7c6cc63d0ddb6a3a90a9f14",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/171245b93b87b1b8424e8d11139e4c2d207152": "25b3b851b4e90d16694acc8fa4ea7c33",
".git/objects/6e/3e1f6c63771cdc19d3980e21b3a9eb4b92e255": "5688a7c5a272f53add824e307ccc283f",
".git/objects/70/72d53312195deba9d21c1a237010838f894e54": "51d2035bf3fc38fa8d4b172dfb7ef01e",
".git/objects/73/59992fef6406036f4eb4f81befb212e3b84f55": "1ca9b4e57d993c3fe7fbdb8b15347f71",
".git/objects/78/1d34bed5988d9f679a7029cac2c75104b30642": "d16d3f7130cdc7ae58e675dd32d7f425",
".git/objects/78/21ba42e5e4047ae6281b970f1627a8578f4dd1": "937e19b0e91e786e602c9a3dbf8a837c",
".git/objects/79/9149c00ca43efcbe35b63224546f16ea17a92e": "d4fd6f1de88a1f217d917cd072aeab44",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/903159b0c47a6c56d9d23773fd2c7510282ebd": "e9bb5459d925f550c769634a3abe1765",
".git/objects/7d/33784fa2318541a1b39c4aac6b3045ccc68b1b": "39c77d4fccb9b27567ab9f4b5e7fa1b1",
".git/objects/83/f46ea92f28d1e47bf825f9f580f264b90866bb": "a522e26f73c3ff18acb69618e640d0ea",
".git/objects/84/00bac5cf2bbf199c9de961adbdc685e1d02cec": "e4f179020ea5420fdd8684d64bbbb39c",
".git/objects/85/862443c7a11af4bce37a268ed2551329c338d5": "96aac7c56a75b725f25f6294f05768d1",
".git/objects/85/ef25baa3a4fe4770e9fc826d21b1b9abe721f2": "7030d58f5b205a134cb494a672a79039",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/884c26b2a8c42622305e89ffe4e04020837792": "26ff75fecfa4b91dc1f8a4262821ffd9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5bb937ce15b801edd116b2024d42606e9381f3": "34fb56b70113c315ce5b1416e9962284",
".git/objects/8c/a3dec59f5a561dad413320cc3bb6da933218e2": "f7e8e4de3df573321213324e1c6b3ad7",
".git/objects/8e/13e94959eab1235edf9bda7d71375794bacbb9": "fc4361b0c0573d51d9ec1cd808adb3e8",
".git/objects/8f/4f5ba9d829b8b06c1ef968eea0e10cd88d6fda": "068fa8127e0e1fe71bd6d0ae019bcb8b",
".git/objects/94/b1283c522e4922ffb6ea749db21951c3181c46": "9d255d6ba004f515c3aba6b6328a2e59",
".git/objects/95/3c22101e8a5c5ef5b78b9b715c268317703b85": "f6281591a5b3e2c979367925bf7271bf",
".git/objects/95/9c2520d2a886059e705de9b2a02ce2ce54fa28": "f54c6968039d4457a87087551021af63",
".git/objects/96/46ce3196d1cf5d3eb9bae1d38fb869d90c8ee4": "e2a838a425af4fbc479d8b1cc7f8303e",
".git/objects/96/cafb5a383acfe4c9ec6b005212c493d320473c": "ec4113535f9f02f2eac4ca3c4c46608b",
".git/objects/9e/0c8697c0adb2535dae4a29c51bf78a30281a4d": "5e9513f11025738249411b668d972b7d",
".git/objects/9f/ffb2ebe952927ea635b38ee1b93fcbf2a79f03": "cb5d1a830d2eeca67dcfc29e09569c31",
".git/objects/a0/9107f6149f35f27000ae145613d935f60976ee": "bbc9d1efd212de9eb0bdf280640a9762",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2a4f65c348259e996664cfa9e95104af1648cd": "e9a3af5b329a391525e03d74d6e7faf6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/d2e3378dc0a0c4d9a5d48105bd5827e2f67c18": "ac9fab254a00d6967969f59435bb05b1",
".git/objects/af/8a5b12bff74aa494dd2b4c9ad860b16ea2ca7b": "a84b0b6e3311d8d107ec229947db4979",
".git/objects/b2/76daf07e776404b69a53a3e57a0e0fe2f0de27": "457d0fb6d0018775a72257a2512d6fb5",
".git/objects/b2/c28b3ea2d64234c539bdc4cc791f1e96957125": "9471fde7803e588a123c6ffa207dc50c",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bd87103a38f0d2f4098b76023fe6b6afd6633e": "1213d632752af5afabc45d28decc8796",
".git/objects/ba/6cf34a218546340cde249819f7ab35bec98b6c": "17a937b039fede710e6276a653dcae7f",
".git/objects/ba/ae56c8170b6d9d21df39fdb1980d7e0de2f70c": "8dd07911d0362d432a3ec0322ae4da0e",
".git/objects/bd/6517f8535ea0b2d2e689da41eae042c766105e": "b97f92f9a5ba7a08a93afe91cfd051c6",
".git/objects/bf/81a543b13575cb95b5aa4d9be68f1cc51f2043": "08202373a0777c0697801e6f21388e49",
".git/objects/c1/8e786c855ccfe3c1a0525eddaa8a64dbe0442c": "2cb2ac8e4d5701b89a26fa5367420720",
".git/objects/c7/1036c35cc2df5f06960e367af6b3d5e4abba6b": "131941935b58840bc55b84be56475a19",
".git/objects/c9/a9dcba0910a38d63cc5594556953e57c71e9bf": "d98c0093c1a11341ae88738aebf325c9",
".git/objects/ca/043b7c73b71c332408ed71de133cbd36290b1d": "b7ceb8ca7d93f3a74d57327a516785bc",
".git/objects/cb/5da8b433e7079025011b863759334847a10e41": "bc68cb74bb288dcdb56f3b34b10e3868",
".git/objects/cb/bf2e32b609d6a56301329ae6d11bdf7166ef8f": "a26aafd158ca6157787564dea4d116a0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/75ce1e3c76c46915a7d30bd9a76d3e4a12ec16": "886044445dad7126ef6c97cec8d3ee96",
".git/objects/d2/3a490bf820651bbe09e44217a9702ab6f87986": "560c14d41d520fdab8dd4728b81e73c7",
".git/objects/d2/d324a3747377c28ca13777d2e6835300d05fa9": "b5f3c8629dfe286152057df153a669d5",
".git/objects/d2/d62943c4ddcb53a2ba35af3174f2c6835afd51": "f0a4d9c921b3389133ef62804393e399",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/713db9555d891df6cc523250b44b1c26904797": "7aec741ac39da808244f25be5b4e6095",
".git/objects/d8/279693f82cff397a702ba80e2256631645de1a": "63f5d5668bbff89dde6958890823c6b2",
".git/objects/d8/53fd6d68b769339129ef995e191b11eef6800a": "3b71e9d2a86530256e9658bcfd405837",
".git/objects/dc/087e949a6919db9f4d723a26c0211d58e83c05": "b8fd331762ae6022434f0373d118e13b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/b58944d1bf4bb18e7f59dae2453ca147a52dcf": "4133be06b4df87d9c9906899f53b2167",
".git/objects/e3/5de0e349af867dca0c5e7f67b65b0b437feb15": "2b4db2b5c84e1153c02fba1dce9c3034",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/6426a5846b14089bc3d0c332fddad079aca69d": "38851d16db57849b0365757e5f651f0f",
".git/objects/e8/66f24c2737127c77e9da0d69f5e2ebb3b9959f": "ea6da3935efdeee955b8919a55d2e6e6",
".git/objects/e9/72d3821f238f126f559630808d4172d74d6484": "02a6441ab5570e3d5a14035b44ef22ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f64684b84d1916b40bad55153de7c33eb099ef": "8c3b3fd87c5c230520353ffe5aad7c6c",
".git/objects/f0/98e6e7022dda553e69f6c5f68ce1bd3b6f2efe": "b5be687d4f797a15eef430e942e87026",
".git/objects/fa/ef7545124c4e892d2635450f280f6482a9663c": "7c356c8bd2a4429d1999ea5475fa66ef",
".git/objects/fb/2399ca515aa49f67d51aa958fd1c36a97a8552": "c546b7ff6cb48043452fb798ea822eea",
".git/objects/fb/249dd613478ed1db493f389060269f75ef9c2e": "aae6e97d95b7c55591f36eda0283f6a2",
".git/objects/fc/3fca5b295bd9749f3a8b5b9138136a0d1799ae": "f7865002e66f3bf2b78ce0aa626fd257",
".git/objects/fd/ade529fe249f93f301caf984bdfd5f236e1da9": "ddcf3756ea532eee858519f5a1f42b11",
".git/refs/heads/main": "2c55860b130d3089dbd12e29092fe91b",
".git/refs/remotes/origin/main": "2c55860b130d3089dbd12e29092fe91b",
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
"index.html": "0450d7ed88ff68dcca99a48e5172b114",
"/": "0450d7ed88ff68dcca99a48e5172b114",
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
