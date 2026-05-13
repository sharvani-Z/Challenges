import "../atoms.css";

type IconProps = {
  label: string;
};

function Icon({ label }: IconProps) {
  return (
    <span className="atom-icon" aria-label={label} title={label}>
      ⭐
    </span>
  );
}

export default Icon;
