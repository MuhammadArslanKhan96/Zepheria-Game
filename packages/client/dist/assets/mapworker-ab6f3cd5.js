(function(){"use strict";let a=0,i=0,o=[],e=[];onmessage=t=>{[a,i]=t.data,d(),postMessage({data:o,grid:e})};function d(){for(let t=0;t<i;t++){e[t]=[];for(let s=0;s<a;s++)o.push(0),e[t][s]=1}}})();
//# sourceMappingURL=mapworker-ab6f3cd5.js.map
