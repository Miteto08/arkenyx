import type { IconProps } from './types';

export default function IconArrowUp({
  className,
  width = 20,
  height = 20,
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
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
