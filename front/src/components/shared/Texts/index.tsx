import React, { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
  className?: string;
  dataTestId?: string;
};

export function H1(props: ChildrenProps) {
  return (
    <h1
      data-testid={props.dataTestId}
      className={"sm:text-xl md:text-xl lg:text-[28px] xl:text-3xl 2xl:text-4xl " + props.className}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: ChildrenProps) {
  return (
    <h2
      data-testid={props.dataTestId}
      className={
        "sm:text-xl md:text-lg lg:text-2xl xl:text-[28px] 2xl:text-[28px] " + props.className
      }
    >
      {props.children}
    </h2>
  );
}

export function H3(props: ChildrenProps) {
  return (
    <h3
      data-testid={props.dataTestId}
      className={
        "sm:text-base md:text-base lg:text-sm xl:text-[22px] 2xl:text-2xl " + props.className
      }
    >
      {props.children}
    </h3>
  );
}

export function H4(props: ChildrenProps) {
  return (
    <h4
      data-testid={props.dataTestId}
      className={"sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[20px] " + props.className}
    >
      {props.children}
    </h4>
  );
}

export function H5(props: ChildrenProps) {
  return (
    <h5
      data-testid={props.dataTestId}
      className={"sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base " + props.className}
    >
      {props.children}
    </h5>
  );
}

export function H6(props: ChildrenProps) {
  return (
    <h6
      data-testid={props.dataTestId}
      className={
        "sm:text-[8px] md:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:text-xs " + props.className
      }
    >
      {props.children}
    </h6>
  );
}
