import type { IconProps } from './types';

export default function IconChevronLeft({
  className,
  width = 24,
  height = 24,
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
