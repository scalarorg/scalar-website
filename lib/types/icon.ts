export type IconProps =
  | React.FC<React.ComponentProps<"svg">>
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.ComponentPropsWithoutRef<"svg">> &
        React.RefAttributes<React.ElementRef<"svg">>
    >;
