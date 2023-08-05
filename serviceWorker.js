if (!("serviceWorker" in navigator)) {
  return;
}

let registration = await navigator.serviceWorker.getRegistration();

if (!registration) {
  registration = await navigator.serviceWorker.register("/serviceWorker.js");
}
