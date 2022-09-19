const ifilter=document.getElementById("viewchoice");
const CLICKED_CLASS = "clicked";
let clicked=false;

const filter=async ()=>{
  let selectValue=ifilter.value;
  console.log(selectValue);
  await fetch("/installer/filter",{
      method:'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({selectValue}),
  });
  
}

function init(){
  if(ifilter) {
    ifilter.addEventListener("change", filter);
  }
}

init();