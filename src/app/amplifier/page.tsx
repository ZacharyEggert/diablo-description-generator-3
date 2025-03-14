import FormSection, { FormMultiSection } from "~/app/_components/FormSection";
import { getLocalization, supportedLanguages } from "~/lib/localization";

import AmpCopyOutput from "~/app/_components/AmpCopyOutput";
import FormInput from "~/app/_components/FormInput";
import GenerateAmpCopyButton from "~/app/_components/GenerateAmpCopyButton";
import LanguageSwapper from "~/app/_components/LanguageSwapper";

//TODO use the url to check for localization
export default async function AmplifierPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = new URLSearchParams(await searchParams);
  const lang = (params.get("lang") ||
    "en") as (typeof supportedLanguages)[number];

  const Local = getLocalization(lang);
  const { amplifier } = Local;
  const AmpLocal = amplifier;

  const conditions = [
    { value: "new", label: Local.conditions.new },
    { value: "mint", label: Local.conditions.mint },
    { value: "excellent", label: Local.conditions.excellent },
    { value: "very-good", label: Local.conditions.veryGood },
    { value: "good", label: Local.conditions.good },
    { value: "fair", label: Local.conditions.fair },
    { value: "poor", label: Local.conditions.poor },
    { value: "new-old-stock", label: Local.conditions.newOldStock },
    { value: "vintage-mint", label: Local.conditions.vintageMint },
    {
      value: "vintage-excellent",
      label: Local.conditions.vintageExcellent,
    },
    {
      value: "vintage-very-good",
      label: Local.conditions.vintageVeryGood,
    },
    { value: "vintage-good", label: Local.conditions.vintageGood },
    { value: "vintage-fair", label: Local.conditions.vintageFair },
    { value: "vintage-poor", label: Local.conditions.vintagePoor },
    {
      value: "non-functioning",
      label: Local.conditions.nonFunctioning,
    },
  ];

  return (
    <main className="flex flex-col gap-8 px-4 py-8 lg:mx-auto lg:w-3/4">
      <LanguageSwapper lang={lang} />
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
          {AmpLocal.title}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          {AmpLocal.description}
        </p>
      </header>
      <FormMultiSection>
        <FormSection label="Amplifier Information">
          <FormInput label={AmpLocal.form.brand} formKey="brand" />
          <FormInput label={AmpLocal.form.model} formKey="model" />
          <FormInput label={AmpLocal.form.submodel} formKey="submodel" />
          <FormInput label={AmpLocal.form.year} formKey="year" />
          <FormInput label={AmpLocal.form.country} formKey="country" />
          <FormInput
            label={AmpLocal.form.condition}
            type="select"
            formKey="condition"
            options={conditions}
          />
          <FormInput label={AmpLocal.form.serial} formKey="serial" />
          <FormInput label={AmpLocal.form.power} formKey="power" />
          <FormInput
            label={AmpLocal.form.formFactor}
            name="formFactor"
            type="radio"
            formKey="formFactor"
            options={[
              { value: "head", label: Local.amplifierTypes.head },
              { value: "combo", label: Local.amplifierTypes.combo },
              { value: "rack", label: Local.amplifierTypes.rack },
            ]}
          />
          <FormInput
            label={AmpLocal.form.type}
            name="type"
            type="radio"
            formKey="type"
            options={[
              { value: "tube", label: Local.amplifierTypes.tube },
              { value: "solid-state", label: Local.amplifierTypes.solidState },
              { value: "hybrid", label: Local.amplifierTypes.hybrid },
            ]}
          />
          <FormInput label={AmpLocal.form.voltage} formKey="voltage" />
          <FormInput label={AmpLocal.form.color} formKey="color" />
          <FormInput label={AmpLocal.form.grillCloth} formKey="grillCloth" />
          <FormInput label={AmpLocal.form.panel} formKey="panel" />
          <FormInput label={AmpLocal.form.preampTubes} formKey="preampTubes" />
          <FormInput label={AmpLocal.form.powerTubes} formKey="powerTubes" />
          <FormInput label={AmpLocal.form.rectifier} formKey="rectifier" />
          <FormInput
            label={AmpLocal.form.phaseInverter}
            formKey="phaseInverter"
          />
          <FormInput label={AmpLocal.form.controls} formKey="controls" />
          <FormInput label={AmpLocal.form.channels} formKey="channels" />
          <FormInput label={AmpLocal.form.inputs} formKey="inputs" />
          <FormInput label={AmpLocal.form.speakers} formKey="speakers" />
          <FormInput
            label={AmpLocal.form.effectsLoop}
            type="checkbox"
            formKey="effectsLoop"
          />
          <FormInput
            label={AmpLocal.form.onboardEffects}
            formKey="onboardEffects"
          />
          <FormInput label={AmpLocal.form.outputs} formKey="outputs" />
          <FormInput
            label={AmpLocal.form.outputImpedance}
            formKey="outputImpedance"
          />
        </FormSection>
      </FormMultiSection>
      <FormMultiSection>
        <FormSection label="Generate">
          <GenerateAmpCopyButton />
          <AmpCopyOutput />
        </FormSection>
      </FormMultiSection>
    </main>
  );
}
