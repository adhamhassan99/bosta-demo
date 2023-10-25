import React from "react";

const TextBtn = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { title, onClick } = props;
  return (
    <button
      aria-description={title}
      onClick={onClick}
      className="hover:underline font-semibold text-brandBlack hover:text-brandRed transition-all duration-300"
    >
      {title}
    </button>
  );
};

export default TextBtn;
