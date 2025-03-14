"use client";

import { useAmpCopyOutputAtom } from "./_atoms/AmpFormAtom";

const GenerateAmpCopyButton = () => {
  const [_, updateAmpCopy] = useAmpCopyOutputAtom();

  const handleClick = () => {
    updateAmpCopy();
  };

  return (
    <button onClick={handleClick} className="btn-generate">
      Generate
    </button>
  );
};

export default GenerateAmpCopyButton;
