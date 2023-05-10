const Button = ({ children, ...props }: { children: React.ReactNode }) => (
  <button className="bg-primary px-7 py-4 text-[13px] font-bold uppercase leading-[18px] tracking-[1px] text-white">
    {children}
  </button>
);

const SecondaryButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button className="bg-black px-7 py-4 text-[13px] font-bold uppercase leading-[18px] tracking-[1px] text-white">
    {children}
  </button>
);

export { SecondaryButton };

export default Button;
