import { AmpFormData } from "~/lib/canonical/ampForm";

const applyAmpCopyTransform = (ampForm: AmpFormData) => {
  const {
    brand,
    model,
    submodel,
    year,
    country,
    condition,
    serial,
    power,
    formFactor,
    type,
    voltage,
    color,
    grillCloth,
    panel,
    preampTubes,
    powerTubes,
    rectifier,
    phaseInverter,
    controls,
    channels,
    inputs,
    speakers,
    effectsLoop,
    onboardEffects,
    outputs,
    outputImpedance,
  } = ampForm;

  return JSON.stringify(ampForm, null, 2);
};

export default applyAmpCopyTransform;
