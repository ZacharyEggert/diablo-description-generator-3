import localization_en from "./en";
import localization_es from "./es";

type FormInputFields = {
	amplifier: 'brand' 
	| 'model' 
	| 'type' 
	| 'year' 
	| 'submodel' 
	| 'country'
	| 'condition'
	| 'serial'
	| 'power'
	| 'color'
	| 'formFactor'
	| 'grillCloth'
	| 'panel'
	| 'preampTubes'
	| 'powerTubes'
	| 'rectifier'
	| 'phaseInverter'
	| 'controls'
	| 'channels'
	| 'inputs'
	| 'speakers'
	| 'voltage'
	| 'effectsLoop'
	| 'onboardEffects'
	| 'outputs'
	| 'outputImpedance'
	electricGuitar: 'brand' 
	| 'model' 
	| 'type' 
	| 'bodyShape' 
	| 'neckMaterial' 
	| 'fretboardMaterial'
}

type Conditions = 'new'
	| 'mint'
	| 'excellent'
	| 'veryGood'
	| 'good'
	| 'fair'
	| 'poor'
	| 'newOldStock'
	| 'vintageMint'
	| 'vintageExcellent'
	| 'vintageVeryGood'
	| 'vintageGood'
	| 'vintageFair'
	| 'vintagePoor'
	| 'nonFunctioning';
type AmplifierTypes = 'tube' | 'solidState' | 'hybrid' | 'head' | 'combo' | 'rack';

export type Localization = {
	[key in keyof FormInputFields]: {
		title: string;
		description: string;
		form: Record<FormInputFields[key], string>;
	};
} & {
	conditions: Record<Conditions, string>;
	amplifierTypes: Record<AmplifierTypes, string>;
};


const localization = {
	// Add other languages here
	en: localization_en,
	es: localization_es,
};

export default localization;

export const defaultLanguage = "en";
export const supportedLanguages = Object.keys(localization) as Array<keyof typeof localization>;
export const getLocalization = (lang: string) => {
	if (!lang) return localization[defaultLanguage];
	if (supportedLanguages.includes(lang as keyof typeof localization)) return localization[lang as keyof typeof localization];
	// Fallback to default language if the provided language is not supported	
	return localization[defaultLanguage];
}
