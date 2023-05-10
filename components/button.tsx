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

const OutlineButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button className="px-7 py-4 text-[13px] font-bold uppercase leading-[18px] tracking-[1px] border border-black">
    {children}
  </button>
);

export { SecondaryButton, OutlineButton };

export default Button;
