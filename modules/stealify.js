// dependencies
const markdown = window['markdown'] = await import('https://unpkg.com/markdown-wasm@1.2.0/dist/markdown.es.js')


/**
 * some stealify style code to load .md files in the browser and render them so we 
 * do not need to build always a new page when we change a file or run a action
 * it is a waist of time. 
*/
const loadIndexMdfromUrlHash = ({ newURL, oldURL }) => {
  markdown.ready.then(markdown => {
    console.log(markdown.parse("# hello\n*world*"))
  })
}
window.addEventListener("hashchange", loadIndexMdfromUrlHash, false);
