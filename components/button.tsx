const Button = ({ children, ...props }: { children: React.ReactNode }) => (
  <button className="bg-primary text-[13px] font-bold uppercase leading-[18px] tracking-[1px] text-white py-4 px-7">
    {children}
  </button>
);

export default Button;
