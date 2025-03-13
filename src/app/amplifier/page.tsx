import FormSection, { FormMultiSection } from "~/app/_components/FormSection";
import { getLocalization, supportedLanguages } from "~/lib/localization";

import FormInput from "~/app/_components/FormInput";
import LanguageSwapper from "../_components/LanguageSwapper";

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
        <h1 className="text-2xl">{AmpLocal.title}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {AmpLocal.description}
        </p>
      </header>
      <FormMultiSection>
        <FormSection label="Amplifier Information">
          <FormInput label={AmpLocal.form.brand} />
          <FormInput label={AmpLocal.form.model} />
          <FormInput label={AmpLocal.form.submodel} />
          <FormInput label={AmpLocal.form.year} />
          <FormInput label={AmpLocal.form.country} />
          <FormInput
            label={AmpLocal.form.condition}
            type="select"
            options={conditions}
          />
          <FormInput label={AmpLocal.form.serial} />
          <FormInput label={AmpLocal.form.power} />
          <FormInput
            label={AmpLocal.form.formFactor}
            name="formFactor"
            type="radio"
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
            options={[
              { value: "tube", label: Local.amplifierTypes.tube },
              { value: "solid-state", label: Local.amplifierTypes.solidState },
              { value: "hybrid", label: Local.amplifierTypes.hybrid },
            ]}
          />
          <FormInput label={AmpLocal.form.voltage} />
          <FormInput label={AmpLocal.form.color} />
          <FormInput label={AmpLocal.form.grillCloth} />
          <FormInput label={AmpLocal.form.panel} />
          <FormInput label={AmpLocal.form.preampTubes} />
          <FormInput label={AmpLocal.form.powerTubes} />
          <FormInput label={AmpLocal.form.rectifier} />
          <FormInput label={AmpLocal.form.phaseInverter} />
          <FormInput label={AmpLocal.form.controls} />
          <FormInput label={AmpLocal.form.channels} />
          <FormInput label={AmpLocal.form.inputs} />
          <FormInput label={AmpLocal.form.speakers} />
          <FormInput label={AmpLocal.form.effectsLoop} type="checkbox" />
          <FormInput label={AmpLocal.form.onboardEffects} />
          <FormInput label={AmpLocal.form.outputs} />
          <FormInput label={AmpLocal.form.outputImpedance} />
        </FormSection>
      </FormMultiSection>
      <FormMultiSection>
        <FormSection label="Generate">
          <></>
        </FormSection>
      </FormMultiSection>
    </main>
  );
}
