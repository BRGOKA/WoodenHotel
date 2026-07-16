import { useEffect, useRef } from "react";

function useOutClick(closeFn, listneCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) closeFn();
      }
      document.addEventListener("click", handleClick, listneCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listneCapturing);
    },
    [closeFn, listneCapturing],
  );
  return ref;
}

export default useOutClick;
