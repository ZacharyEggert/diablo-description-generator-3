"use client";

import { AmpFormData } from "~/lib/canonical/ampForm";
import { useAmpFormAtom } from "~/app/_components/_atoms/AmpFormAtom";

interface ReactNodeChildren {
  children: React.ReactNode;
}

/**
 * An input field component for forms that supports various types of inputs.
 *
 * @param type - The type of input field (e.g., text, select, checkbox, radio). Defaults to "text".
 * @param label - The label text to be displayed above the input field.
 * @param placeholder - The placeholder text for the input field. Defaults to the label text for text inputs and "Select an option" for select inputs.
 * @param options - An array of options for select and radio input types. Each option should have a `value` and `label` property.
 * @param textType - The specific type of text input (e.g., email, password). Defaults to "text".
 *
 * @returns A JSX element representing the form input.
 */
const FormInput = (props: FormInputFieldProps & { label: string }) => {
  let newProps: typeof props = { ...props };

  if (newProps.type === "text" && !newProps.placeholder) {
    newProps.placeholder = props.label;
  } else if (newProps.type === "select" && !newProps.placeholder) {
    newProps.placeholder = "Select an option";
  }

  return (
    <FormInputWrapper label={props.label}>
      <FormInputField {...props} />
    </FormInputWrapper>
  );
};

export default FormInput;

/**
 * A React functional component that wraps its children with a label and applies styling.
 *
 * @remarks
 * This component is used to create a consistent layout for form inputs. It accepts a label
 * prop to display a label above the children elements.
 *
 * @param children - The React node(s) to be rendered inside the wrapper.
 * @param label - The label text to be displayed above the children.
 *
 * @returns A JSX element that defines the layout structure for the form input.
 */
const FormInputWrapper: React.FC<ReactNodeChildren & { label: string }> = ({
  children,
  label,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <FormInputLabel>{label}</FormInputLabel>
      {children}
    </div>
  );
};

/**
 * FormInputLabel component.
 *
 * Renders a styled label for a form input, applying typography
 * and color classes that adapt to dark mode.
 *
 * @param children - The content to display within the label.
 *
 * @example
 * <FormInputLabel>
 *   Enter your name:
 * </FormInputLabel>
 */
export const FormInputLabel: React.FC<ReactNodeChildren> = ({ children }) => {
  return (
    <label className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </label>
  );
};

export type FormInputFieldType = "text" | "select" | "checkbox" | "radio";

type FormInputFieldProps<
  SelectOptionType extends { value: string; label: string } = {
    value: string;
    label: string;
  },
  RadioOptionType extends { value: string; label: string } = {
    value: string;
    label: string;
  },
> =
  | ({
      type?: "text";
    } & FormInputField_TextProps)
  | ({
      type: "select";
    } & FormInputField_SelectProps<SelectOptionType>)
  | ({
      type: "checkbox";
    } & FormInputField_CheckboxProps)
  | ({
      type: "radio";
    } & FormInputField_RadioProps<RadioOptionType>);

/**
 * A React functional component that renders different types of input fields based on the provided type prop.
 *
 * @param props - The properties used to configure the input field.
 * @returns A JSX element representing the input field.
 */
export const FormInputField: React.FC<FormInputFieldProps> = (props) => {
  switch (props.type) {
    case "text":
      return (
        <FormInputField_Text
          textType={props.textType}
          placeholder={props.placeholder}
          formKey={props.formKey}
        />
      );
    case "select":
      return (
        <FormInputField_Select
          placeholder={props.placeholder}
          formKey={props.formKey}
          options={props.options}
        />
      );
    case "checkbox":
      return <FormInputField_Checkbox formKey={props.formKey} />;
    case "radio":
      return (
        <FormInputField_Radio
          options={props.options}
          formKey={props.formKey}
          name={props.name}
        />
      );
    default:
      return <FormInputField_Text formKey={props.formKey} />;
  }
};

interface FormInputField_TextProps {
  textType?: "text" | "email" | "password" | "number" | "tel" | "search";
  formKey: keyof AmpFormData;
  placeholder?: string;
}

/**
 * Renders a text input field with specified properties.
 *
 * @param textType - The type of text input (e.g., "text", "email", "password"). Defaults to "text".
 * @param formKey - The key of the form data associated with this input field.
 * @param placeholder - The placeholder text displayed when the input is empty.
 *
 * @returns A JSX element representing the text input field.
 */
const FormInputField_Text: React.FC<FormInputField_TextProps> = ({
  textType = "text",
  placeholder,
  formKey,
}) => {
  const [ampForm, setAmpForm] = useAmpFormAtom();
  const value = ampForm[formKey];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmpForm({
      ...ampForm,
      [formKey]: e.target.value,
    });
  };

  return (
    <input
      type={textType}
      placeholder={placeholder}
      value={value.toString()}
      onChange={onChange}
      className="border-2 border-neutral-300 p-2 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
    />
  );
};

interface FormInputField_SelectProps<
  T extends { value: string; label: string },
> {
  formKey: keyof AmpFormData;
  options: T[];
  placeholder?: string;
}

/**
 * Renders a select dropdown field to choose an option from a list.
 *
 * @template T - A generic type that extends an object with a 'value' string and a 'label' string.
 * @param options - An array of option objects to be displayed in the dropdown.
 * @param formKey - The key of the form data associated with this select input field.
 * @param placeholder - An optional placeholder text used as an initial non-selectable option. Defaults to "Select an option".
 *
 * @returns A JSX element representing a select input field with provided options and styling.
 */
const FormInputField_Select = <T extends { value: string; label: string }>({
  options,
  placeholder = "Select an option",
  formKey,
}: FormInputField_SelectProps<T>) => {
  const [ampForm, setAmpForm] = useAmpFormAtom();
  const value = ampForm[formKey];

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmpForm({
      ...ampForm,
      [formKey]: e.target.value,
    });
  };

  return (
    <select
      value={value.toString()}
      onChange={onChange}
      className="border-2 border-neutral-300 p-2 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

interface FormInputField_CheckboxProps {
  formKey: keyof AmpFormData;
}
/**
 * A checkbox input field component.
 *
 * @remarks
 * This component renders a checkbox input element with preset styling that adapts
 * to both light and dark themes. It uses Tailwind CSS classes for styling.
 *
 * @param formKey - The key of the form data associated with this checkbox input field.
 *
 * @returns A JSX element representing the checkbox input.
 */
const FormInputField_Checkbox: React.FC<FormInputField_CheckboxProps> = ({
  formKey,
}) => {
  const [ampForm, setAmpForm] = useAmpFormAtom();
  const value = ampForm[formKey];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmpForm({
      ...ampForm,
      [formKey]: e.target.checked, // Changed from e.target.value === "on" to e.target.checked
    });
  };

  return (
    <input
      type="checkbox"
      checked={!!value}
      onChange={onChange}
      className="h-8 border-2 border-neutral-300 p-1 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
    />
  );
};

interface FormInputField_RadioProps<
  T extends { value: string; label: string },
> {
  formKey: keyof AmpFormData;
  options: T[];
  name: string;
}

/**
 * Renders a radio input element for selecting an option.
 *
 * @template T - A type that extends an object with a `value` and a `label` property.
 * @param formKey - The key of the form data associated with this radio group.
 * @param options - An array of options available for selection.
 */
const FormInputField_Radio = <T extends { value: string; label: string }>({
  options,
  formKey,
  name,
}: FormInputField_RadioProps<T>) => {
  const [ampForm, setAmpForm] = useAmpFormAtom();
  const value = ampForm[formKey];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAmpForm({
        ...ampForm,
        [formKey]: e.target.value,
      });
    }
  };

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <FormInputField_RadioOption
          key={option.value}
          option={option}
          name={name}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

const FormInputField_RadioOption = <
  T extends { value: string; label: string },
>({
  option,
  onChange,
  name,
  checked,
}: {
  option: T;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  checked: boolean;
}) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value={option.value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-8 border-2 border-neutral-300 p-1 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
      />
      <span>{option.label}</span>
    </label>
  );
};
