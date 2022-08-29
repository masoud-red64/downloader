let fileUrl = document.querySelector(".file-url");
let fileName = document.querySelector(".file-name");
let downloadBtn = document.querySelector(".download");
let modalCloseBtn = document.querySelector(".btn-close");
let alertModal = document.querySelector(".alert");

downloadBtn.addEventListener("click", () => {
  if (fileUrl.value && fileName.value) {
    let url = fileUrl.value;
    let name = fileName.value;
    download(url, name);
    loading ()
    clearInput ()
    setTimeout(()=>{
        downloadBtn.innerHTML = 'Download File'
      
    },2000)
    

  } else {
    alertModal.style.display = "block";
    alertModal.style.animation = "alert 2s forwards";
  }
});

function download(url, filename) {
  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}

modalCloseBtn.addEventListener("click", () => {
  alertModal.style.display = "none";
});

function loading (){
    downloadBtn.innerHTML = 'Downloading...'
    downloadBtn.disabled = true
}

function disableBtn(){
    downloadBtn.disabled = false
    if (!fileUrl.value && !fileName.value) {
        downloadBtn.disabled = true
    }
}
if (!fileUrl.value && !fileName.value) {
    downloadBtn.disabled = true
}

function clearInput (){
    fileName.value = ''
    fileUrl.value = ''
}
fileUrl.addEventListener('keyup', disableBtn)
