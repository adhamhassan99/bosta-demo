import React from "react";

type Props = {
  primaryColor?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const OutlineBtn = (props: Props) => {
  const { title, onClick } = props;

  return (
    <button
      aria-description={props["aria-description"]}
      onClick={onClick}
      className="bg-white hover:bg-brandRed text-brandRed hover:text-white font-semibold px-8 py-4 rounded-full border border-brandRed hover:underline"
    >
      {title}
    </button>
  );
};

export default OutlineBtn;
