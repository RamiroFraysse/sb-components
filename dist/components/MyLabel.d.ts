/// <reference types="react" />
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
    /**
     * custom background color label
     */
    backgroundColor?: string;
}
export declare function MyLabel({ allCaps, color, label, size, fontColor, backgroundColor, }: Props): JSX.Element;
export default MyLabel;
