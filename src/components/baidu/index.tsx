export default function Baidu() {
  const hm = `
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2f055db28ff6273a91299d278f52e30c";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  `
  return (<script dangerouslySetInnerHTML={{ __html: hm }}></script>)
}