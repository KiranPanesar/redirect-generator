window.addEventListener('input', function (e) {
 var ios_url_field = document.getElementById("ios_url");
 var android_url_field = document.getElementById("android_url");

 var final_url_field = document.getElementById("redirect_link");
 final_url_field.value = "https://"+ window.location.hostname + "/go/?ios=" + window.btoa(ios_url_field.value) + "&android="+ window.btoa(android_url_field.value);

}, false);
