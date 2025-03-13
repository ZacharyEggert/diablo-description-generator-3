"use client";

interface ReactNodeChildren {
  children: React.ReactNode;
}

/**
 * An input field component for forms that supports various types of inputs.
 *
 * @param type - The type of input field (e.g., text, select, checkbox, radio). Defaults to "text".
 * @param label - The label text to be displayed above the input field.
 * @param placeholder - The placeholder text for the input field. Defaults to the label text for text inputs and "Select an option" for select inputs.
 * @param value - The current value of the input field.
 * @param onChange - The event handler triggered when the input value changes.
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
  // type is used to determine the type of input field to render
  // default is text, but can be select, checkbox, or radio

  switch (props.type) {
    case "text":
      return (
        <FormInputField_Text
          textType={props.textType}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          {...(props as FormInputField_TextProps)}
        />
      );
    case "select":
      return (
        <FormInputField_Select
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          {...(props as FormInputField_SelectProps<{
            value: string;
            label: string;
          }>)}
        />
      );
    case "checkbox":
      return (
        <FormInputField_Checkbox
          value={props.value}
          onChange={props.onChange}
          {...(props as FormInputField_CheckboxProps)}
        />
      );
    case "radio":
      return (
        <FormInputField_Radio
          value={props.value}
          onChange={props.onChange}
          {...(props as FormInputField_RadioProps<{
            value: string;
            label: string;
          }>)}
          name={props.name}
        />
      );
    default:
      return <FormInputField_Text />;
  }
};

interface FormInputField_TextProps {
  textType?: "text" | "email" | "password" | "number" | "tel" | "search";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders a text input field with specified properties.
 *
 * @param textType - The type of text input (e.g., "text", "email", "password"). Defaults to "text".
 * @param placeholder - The placeholder text displayed when the input is empty.
 * @param value - The current value of the input field.
 * @param onChange - Callback function triggered when the input value changes.
 *
 * @returns A JSX element representing the text input field.
 */
const FormInputField_Text: React.FC<FormInputField_TextProps> = ({
  textType = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={textType}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-md border-2 border-neutral-300 p-2 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
    />
  );
};

interface FormInputField_SelectProps<
  T extends { value: string; label: string },
> {
  options: T[];
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
}

/**
 * Renders a select dropdown field to choose an option from a list.
 *
 * @template T - A generic type that extends an object with a 'value' string and a 'label' string.
 * @param options - An array of option objects to be displayed in the dropdown.
 * @param placeholder - An optional placeholder text used as an initial non-selectable option. Defaults to "Select an option".
 * @param value - The currently selected option object. Its `value` property is used to set the select element's value.
 * @param onChange - A callback function invoked when a new option is selected. It receives the newly selected option as its argument.
 *
 * @returns A JSX element representing a select input field with provided options and styling.
 */
const FormInputField_Select = <T extends { value: string; label: string }>({
  options,
  placeholder = "Select an option",
  value,
  onChange,
}: FormInputField_SelectProps<T>) => {
  return (
    <select
      value={value?.value}
      onChange={(e) =>
        onChange?.(
          options.find((option) => option.value === e.target.value) as T,
        )
      }
      className="rounded-md border-2 border-neutral-300 p-2 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
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
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * A checkbox input field component.
 *
 * @remarks
 * This component renders a checkbox input element with preset styling that adapts
 * to both light and dark themes. It uses Tailwind CSS classes for styling.
 *
 * @param value - The boolean value that determines whether the checkbox is checked.
 * @param onChange - The event handler triggered when the checkbox value changes.
 *
 * @returns A JSX element representing the checkbox input.
 */
const FormInputField_Checkbox: React.FC<FormInputField_CheckboxProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      className="h-8 rounded-md border-2 border-neutral-300 p-1 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
    />
  );
};

interface FormInputField_RadioProps<
  T extends { value: string; label: string },
> {
  options: T[];
  value?: T;
  onChange?: (value: T) => void;
  name: string;
}

/**
 * Renders a radio input element for selecting an option.
 *
 * @template T - A type that extends an object with a `value` and a `label` property.
 * @param options - An array of options available for selection.
 * @param value - The current option that is selected.
 * @param onChange - Callback invoked when the radio input's value changes. It is called with the new option object from the options array.
 */
const FormInputField_Radio = <T extends { value: string; label: string }>({
  options,
  value,
  onChange,
  name,
}: FormInputField_RadioProps<T>) => {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <FormInputField_RadioOption
          key={option.value}
          option={option}
          onChange={onChange}
          name={name}
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
}: {
  option: T;
  onChange?: (value: T) => void;
  name: string;
}) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value={option.value}
        name={name}
        onChange={() => onChange?.(option)}
        className="h-8 rounded-md border-2 border-neutral-300 p-1 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
      />
      <span>{option.label}</span>
    </label>
  );
};
