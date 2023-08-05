let deferredPrompt: Event;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // show install button
});

export const installApp = () => {
  if (!deferredPrompt) {
    alert("이미 앱이 설치되어있거나, 지원하지 않는 브라우저입니다.");
    return;
  }

  (deferredPrompt as BeforeInstallPromptEvent).prompt();
};
