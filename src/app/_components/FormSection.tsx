interface ReactNodeChildren {
  children: React.ReactNode;
}

/**
 * Renders a section of a form with a label and body content.
 *
 * This component wraps the provided children within a styled section that includes a label.
 * It uses the FormSectionLabel and FormSectionBody components to render the label and content respectively.
 * The section is styled using Tailwind CSS classes to support light and dark themes.
 *
 * @param label - A string describing the label for the section.
 * @param children - The React node(s) that represent the content of this form section.
 *
 * @returns A JSX element representing the form section.
 */
const FormSection = ({
  children,
  label,
}: ReactNodeChildren & { label: string }) => {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-neutral-900">
      <FormSectionLabel>{label}</FormSectionLabel>
      <FormSectionBody>{children}</FormSectionBody>
    </section>
  );
};
export default FormSection;

/**
 * FormSectionLabel component.
 *
 * Renders a styled label for a form section, applying typography
 * and color classes that adapt to dark mode.
 *
 * @param children - The content to display within the label.
 *
 * @example
 * <FormSectionLabel>
 *   Enter your name:
 * </FormSectionLabel>
 */
const FormSectionLabel = ({ children }: ReactNodeChildren) => {
  return (
    <label className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </label>
  );
};

/**
 * A React functional component that renders its children within a two-column grid layout.
 *
 * @remarks
 * This component wraps its child elements in a div with predefined grid classes. The grid
 * displays two columns with a gap of 2 units.
 *
 * @param children - The React node(s) to be rendered inside the grid.
 *
 * @returns A JSX element that defines the layout structure for the form section.
 */
const FormSectionBody = ({ children }: ReactNodeChildren) => {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
};

/**
 * A React functional component that renders a form section with a vertical layout.
 *
 * @remarks
 * This component wraps its children inside a <section> element that uses flex styling
 * to arrange content in a column with a consistent gap between items. It is useful for
 * creating a multi-section form layout inside a multicolumn grid.
 *
 * @param children - The React nodes to be displayed within the section.
 *
 * @returns A section element containing the provided children.
 */
export const FormMultiSection = ({ children }: ReactNodeChildren) => {
  return <section className="flex flex-col gap-4">{children}</section>;
};
