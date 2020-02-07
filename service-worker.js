/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6096f094f267bacf1cc153948f2b5988"
  },
  {
    "url": "assets/css/0.styles.003d3469.css",
    "revision": "34a000a5418b1ba86ac1c8aea8b7bc7c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3efd699c.js",
    "revision": "d0eeb461e1d7bc683691a8a9e42bd2fc"
  },
  {
    "url": "assets/js/11.b253d7d6.js",
    "revision": "333e7e84282828a16c1a36d4b81e09e1"
  },
  {
    "url": "assets/js/12.4afe29d5.js",
    "revision": "1d30db5b022e24c36e1927b775f89cb2"
  },
  {
    "url": "assets/js/13.b5e50fdc.js",
    "revision": "8160368828378076d62f3da5ed271d56"
  },
  {
    "url": "assets/js/14.31f41a93.js",
    "revision": "6624057c55074313defa23714c643dcc"
  },
  {
    "url": "assets/js/15.c1192408.js",
    "revision": "1aba806131a16ab727dfcda54433d6b4"
  },
  {
    "url": "assets/js/16.0eb1c1ae.js",
    "revision": "e80316774642d2527fd4f664fb982ce0"
  },
  {
    "url": "assets/js/17.baa85700.js",
    "revision": "cb1391dc2dd94aa629febd882be91bce"
  },
  {
    "url": "assets/js/18.432826ea.js",
    "revision": "891cea56d55b867ea2b55f0fb7d80910"
  },
  {
    "url": "assets/js/19.73a7ee1f.js",
    "revision": "606594b0c2c591302f27cdbe8a8cfe5b"
  },
  {
    "url": "assets/js/20.fc8895ed.js",
    "revision": "89e8e6ea462569a52577588312963436"
  },
  {
    "url": "assets/js/21.cf27c9d5.js",
    "revision": "2bbefae250d87b445298da3cfeca9bbf"
  },
  {
    "url": "assets/js/22.cd63be04.js",
    "revision": "589d093f64a13105a319aa6f125a2bde"
  },
  {
    "url": "assets/js/23.cfcd5f5e.js",
    "revision": "b70e718f0539da58211ffea158b58fd6"
  },
  {
    "url": "assets/js/24.144016ce.js",
    "revision": "67d499106873d96db9d6434741c3d64e"
  },
  {
    "url": "assets/js/25.1d9d4ee4.js",
    "revision": "d317347d99cff000b908eb6471f52e6f"
  },
  {
    "url": "assets/js/26.7f9c34e5.js",
    "revision": "fbe7b9e956ce208a331e2e6de3ae68ac"
  },
  {
    "url": "assets/js/27.6b068257.js",
    "revision": "263add1c98a9ef885234f5ecbc29af48"
  },
  {
    "url": "assets/js/28.78eaf783.js",
    "revision": "6adbbe8a78e768eadbed59cc80c7e57c"
  },
  {
    "url": "assets/js/29.5c2300dd.js",
    "revision": "9ae347895d193d807fe9822cff63a6a3"
  },
  {
    "url": "assets/js/30.2b53b9ce.js",
    "revision": "1bc68be6bc205510e8a3013f9dfe6ede"
  },
  {
    "url": "assets/js/31.72888995.js",
    "revision": "e9b5e5fc3e6dcb23aac9b446f8595a74"
  },
  {
    "url": "assets/js/32.5a7829da.js",
    "revision": "9dbc7b2efee0a7c2a07fc3e4545c8533"
  },
  {
    "url": "assets/js/33.3a0abc70.js",
    "revision": "19d16fac86dec221c1b923413e5068d8"
  },
  {
    "url": "assets/js/34.d3e7865a.js",
    "revision": "1d10ccb30c4b3659b4a0fb6609bf7fdb"
  },
  {
    "url": "assets/js/4.876a54a1.js",
    "revision": "ef15043c38011b3c5b8daa9db9c336cf"
  },
  {
    "url": "assets/js/5.a5e63d96.js",
    "revision": "5608590c37c0eaa106ab7f8cc0c9fa7e"
  },
  {
    "url": "assets/js/6.3faf7794.js",
    "revision": "98450e18cfbbb964272c64e7d19dd1d2"
  },
  {
    "url": "assets/js/7.49d24c76.js",
    "revision": "dbce73d1ee9573d3b349f59cb0d06c1a"
  },
  {
    "url": "assets/js/8.3058e5c0.js",
    "revision": "65bfbd9bd4f43b6c90f590b3fbce93f0"
  },
  {
    "url": "assets/js/9.597c39e3.js",
    "revision": "61367b1baa411048b21a26174e261954"
  },
  {
    "url": "assets/js/app.e539a57c.js",
    "revision": "169208f75b5e2e7e4080b33376bffeab"
  },
  {
    "url": "assets/js/vendors~flowchart.f5cdfab1.js",
    "revision": "4923f9fbdb349d5320106a0b0ab2a827"
  },
  {
    "url": "assets/js/vendors~notification.7414fc30.js",
    "revision": "4b2fa06e946087714f251475ce5cc89e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "61928b56893a8330650734946919197b"
  },
  {
    "url": "javaee/index.html",
    "revision": "b9d3315d95e222ddea1a8ab0530fc3b4"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "608d542bde75004badd373020672ecc1"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "4b2f7dc1a9dd71c5a675a1e8547595e6"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "c1b46f84e31aad3d7d40a991a658ccfa"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "443ddd4924ed731ff6f6437507826cfe"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "ba9a2a91102edd93cff58bd877fafa15"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "2f2d76125b2a6507e41ee9f79a1c31a5"
  },
  {
    "url": "javatool/build/gradle.html",
    "revision": "3ada3c2c13d78082ad50629b787aebb9"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "e83f3289762b486d870bb7dcfe6eb361"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "f62e17f6c25ec58bf9be0f4dbeaf2c01"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "9aaefa1b6f4cad9361ad048118ad6561"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "48ccdf07946d453114852c49125bf7f7"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "8edc7f1a5034c64359ad25d1d3e3bb29"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "14a585dff030441b2e567fa76bfada2d"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "3a1b6e7ea0b6cae8231bcdfed422b1b1"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "3ba44b0dd98a2d31e9a618d28dd3f9db"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "38572b759d5237a8611c3de362b8d547"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "9c35bac71d002e7f82863670ad7e8ca6"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "e8663a5f8a39a32e12482e3364f14c6a"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "c0a134a63583949d780f4aee4e8931e1"
  },
  {
    "url": "javatool/index.html",
    "revision": "a8da0ddac375487a3e08f3f2cff356a3"
  },
  {
    "url": "javatool/jmeter.html",
    "revision": "072f66755b55b2e02142e0603a33bcc8"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "205a9bcd653672aa21eb015084243cf7"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "640ac8bb60b14cc48594eb2159ca29ba"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "01b9da46235ad535e2f070e0e8d0bd52"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
