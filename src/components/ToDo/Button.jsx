export const Button = ({ type = 'button', children, selected, ...otherProps }) => {
  const selectedBtn =
    'cursor-pointer py-1 px-3 rounded text-sm font-semibold text-white bg-blue-700 transition duration-200 ease-in-out';
  const defaultBtn = 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-transparent';

  const buttonClass = selected ? selectedBtn : defaultBtn;

  return (
    <button className={buttonClass} type={type} {...otherProps}>
      {children}
    </button>
  );
};
