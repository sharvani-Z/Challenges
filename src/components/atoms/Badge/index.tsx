import "../atoms.css";

type BadgeProps = {
  status: "Completed" | "Pending";
};

const badgeStyles = {
  Completed: {
    background: "rgba(16, 185, 129, 0.18)",
    color: "#a7f3d0",
  },
  Pending: {
    background: "rgba(245, 158, 11, 0.18)",
    color: "#fcd34d",
  },
} as const;

function Badge({ status }: BadgeProps) {
  return (
    <span className="atom-badge" style={badgeStyles[status]}>
      {status}
    </span>
  );
}

export default Badge;
