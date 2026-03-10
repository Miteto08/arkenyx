import type { IconProps } from './types';

export default function IconSun({
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M6.64 6.64l1.42-1.42M17.16 17.16l1.42-1.42" />
    </svg>
  );
}
