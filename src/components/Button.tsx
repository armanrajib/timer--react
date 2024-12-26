import { type ComponentPropsWithoutRef } from "react";

type ButtonProps =
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (ComponentPropsWithoutRef<"a"> & { href?: string });

function isAnchorProps(props: ButtonProps): props is ComponentPropsWithoutRef<"a"> & { href?: string } {
  return "href" in props;
}

function Button(props: ButtonProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
