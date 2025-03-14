import { AmpFormData, EmptyAmpFormData } from "~/lib/canonical/ampForm";
import { atom, useAtom } from "jotai";
import { useEffect, useMemo } from "react";

import applyAmpCopyTransform from "~/lib/transformers/ampTransformer";
import { atomWithStorage } from "jotai/utils";

const AmpFormAtom = atomWithStorage<AmpFormData>("ampForm", EmptyAmpFormData);

export const useAmpFormAtom = () => {
  const [ampForm, setAmpForm] = useAtom(AmpFormAtom);

  return [ampForm, setAmpForm] as const;
};

const AmpCopyOutputAtom = atom<JSX.Element>(<></>);
export const useAmpCopyOutputAtom = () => {
  const [ampCopyOutput, setAmpCopyOutput] = useAtom(AmpCopyOutputAtom);
  const [ampForm] = useAmpFormAtom();

  const updateAmpCopy = () => {
    const ampCopy = applyAmpCopyTransform(ampForm);
    setAmpCopyOutput(ampCopy ? <pre>{ampCopy}</pre> : <></>);
  };

  return [ampCopyOutput, updateAmpCopy] as const;
};
