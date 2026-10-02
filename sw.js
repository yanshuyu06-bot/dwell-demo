/* 展示版的 Service Worker。
   只做两件事：立刻接管、让「添加到主屏幕」这件事看起来完整。
   ⚠️ 这里**没有**任何推送订阅 —— 展示版是纯静态页，不发请求、也没有后端。
   原版那份处理网页通知的 sw.js 属于小屋本体，不在这份展示版里。 */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
