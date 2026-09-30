// Ping IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the live sitemap.
// Run after a production deploy: npm run indexnow
const HOST = "aonelectricals.in";
const KEY = "6a020d1925cb2422481060abdcb0fb0a";
const origin = `https://${HOST}`;

const sitemap = await fetch(`${origin}/sitemap.xml`).then((res) => {
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  return res.text();
});

const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => new URL(url).hostname === HOST);

if (urlList.length === 0) throw new Error("No aonelectricals.in URLs found in sitemap.xml");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${origin}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);
