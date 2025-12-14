import { useEffect, useState } from "react";

export default function DesktopNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
        navigator.userAgent
      );

    const dismissed = sessionStorage.getItem("desktop_notice");

    if (isMobile && !dismissed) {
      setShow(true);

      // auto hide after 6 seconds
      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("desktop_notice", "true");
      }, 6000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="desktop-notice">
      <span>
        For the best experience, please view this site on a desktop 💻
      </span>
      <button
        onClick={() => {
          setShow(false);
          sessionStorage.setItem("desktop_notice", "true");
        }}
      >
        ✕
      </button>
    </div>
  );
}
