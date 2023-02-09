import "./mylabel.css";

export interface Props {
  /**
   * label message
   */
  label: string;
  /**
   * label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * label allcaps
   */
  allCaps?: boolean;
  /**
   * label basics colors
   */
  color?: "primary" | "secondary" | "tertiary" | "string";
  /**
   * custom font color
   */
  fontColor?: string;
}

function MyLabel({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
}: Props) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default MyLabel;
