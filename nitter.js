chrome.pageAction.onClicked.addListener(tab => {
  const parsed = new URL(tab.url);
  const url = `${parsed.protocol}//nitter.net${parsed.pathname + parsed.search + parsed.hash}`;
  chrome.tabs.update({ url });
})