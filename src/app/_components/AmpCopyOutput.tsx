"use client";

import { useAmpCopyOutputAtom } from "./_atoms/AmpFormAtom";

const AmpCopyOutput = () => {
  const [ampCopy] = useAmpCopyOutputAtom();
  return (
    <div className="amp-copy-output">
      {/* Output content will be displayed here */}
      {ampCopy}
    </div>
  );
};

export default AmpCopyOutput;
