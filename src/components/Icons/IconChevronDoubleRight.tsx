import type { IconProps } from './types';

export default function IconChevronDoubleRight({
  className,
  width = 16,
  height = 16,
  'aria-hidden': ariaHidden = true,
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
    >
      <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
    </svg>
  );
}
