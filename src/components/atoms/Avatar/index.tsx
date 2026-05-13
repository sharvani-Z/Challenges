import "../atoms.css";

type AvatarProps = {
  name: string;
};

function Avatar({ name }: Readonly<AvatarProps>) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return <div className="atom-avatar">{initials}</div>;
}

export default Avatar;
