(()=>{const t=document.querySelector(".installer"),e=document.querySelector(".installer__like"),s="clicked";let a=!1;const i=async()=>{const i=t.dataset.installerId,l=e.dataset.userId,n=await fetch(`/api/installer/${i}/like`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l,clicked:a})});a?404===n.status&&(e.classList.remove(s),a=!1):201===n.status&&(e.classList.add(s),a=!0)};!function(){if(t){const e=t.dataset.installerId;fetch(`/api/installer/${e}/view`,{method:"PATCH"})}e&&e.addEventListener("click",i)}()})();