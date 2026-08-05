import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  function handleDarkMode() {
    setDarkMode((state) => !state);
  }
  useEffect(
    function () {
      if (darkMode) document.documentElement.classList.add("dark-mode");
      else document.documentElement.classList.remove("dark-mode");
    },
    [darkMode],
  );
  return (
    <ButtonIcon onClick={handleDarkMode}>
      {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
