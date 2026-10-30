import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Every navigation (including clicking a link to the page you are already on)
// starts at the top of the page. Links with a #hash scroll to that element instead.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}
