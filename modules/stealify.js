// dependencies
//await import('https://unpkg.com/markdown-wasm@1.2.0/dist/markdown.js')
const markdown = await window['markdown'].ready.then(md=>md);
// We need to store that on load it is gone later it exists only on the first iteration
const importMeta = import.meta.url;
const isErrorPage = new URL(importMeta).searchParams.get('page') === "404";
console.log('isErrorPage')
window['stealify'] = { markdown, importMeta }
/**
 * some stealify style code to load .md files in the browser and render them so we 
 * do not need to build always a new page when we change a file or run a action
 * it is a waist of time. 
*/
const loadIndexMdfromUrlHash = ({ newURL, oldURL }) => {
  // fetch the newURL if 404 use the 404 handler directly on this page 
  
    console.log(markdown.parse("# hello\n*world*"))
  
  
}
window.addEventListener("hashchange", loadIndexMdfromUrlHash, false);

const handle = {
  ["404"]() {
    
  }
}

