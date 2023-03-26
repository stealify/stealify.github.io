// dependencies
//await import('https://unpkg.com/markdown-wasm@1.2.0/dist/markdown.js')
//const markdown = await window['markdown'].ready.then(md=>md);
// We need to store that on load it is gone later it exists only on the first iteration
const importMeta = import.meta.url;
//const isErrorPage = new URL(importMeta).searchParams.get('page') === "404";
//console.log('isErrorPage')
//window['stealify'] = { markdown, importMeta }
/**
 * some stealify style code to load .md files in the browser and render them so we 
 * do not need to build always a new page when we change a file or run a action
 * it is a waist of time. 
*/
//const loadIndexMdfromUrlHash = ({ newURL, oldURL }) => {
  // fetch the newURL if 404 use the 404 handler directly on this page 
  
  //  console.log(markdown.parse("# hello\n*world*"))
  
  
//}
//window.addEventListener("hashchange", loadIndexMdfromUrlHash, false);
Object.assign(Object.assign(document.body,{ innerHTML: `<iframe width="100%" height="100%" src="/demo-jupyter/"></frame>` }).style,{
    overflow: 'hidden',
    margin: -2,
    padding: 0,
})

setInterval(()=>{
  const logo = decodeURIComponent(`<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>`);
  document.querySelector('iframe').contentDocument.querySelector("#jp-MainLogo") && document.querySelector('iframe').contentDocument.querySelector("#jp-MainLogo").innerHTML !== logo && (document.querySelector('iframe').contentDocument.querySelector("#jp-MainLogo").innerHTML = logo);  
},500)
document.querySelector('iframe').contentDocument.querySelector("#jp-MainLogo")) }})



const handle = {
  ["404"]() {
    
  }
}

