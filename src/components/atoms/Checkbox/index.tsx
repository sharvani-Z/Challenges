import "../atoms.css";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

function Checkbox({ checked = false, onChange }: Readonly<CheckboxProps>) {
  return (
    <input
      className="atom-checkbox"
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange?.(event.target.checked)}
    />
  );
}

export default Checkbox;
