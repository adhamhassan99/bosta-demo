type Props = {
  title: string;
  onPress?: () => void;
};

const DropdownItem = ({ onPress, title }: Props) => {
  return (
    <div
      className="py-1 text-sm hover:cursor-pointer hover:bg-slate-100 w-full text-center rounded-sm transition-colors"
      onClick={onPress}
    >
      <span>{title}</span>
    </div>
  );
};

export default DropdownItem;
