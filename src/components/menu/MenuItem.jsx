export default function MenuItem({ setMenuOpen, MenuText, MenuLink }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={`#${MenuLink}`}>{MenuText}</a>
    </li>
  );
}
