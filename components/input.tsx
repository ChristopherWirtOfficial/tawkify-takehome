import { ChangeEventHandler, FC } from "react";

const Input: FC<{ value: string | number, onChange: Function, placeholder: string, disabled: boolean }> =
  ({ value, onChange, placeholder, disabled }) => {
    // Fun prank, so good, what a classic bit of comedy humor
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange(event.target.value);
    };

    return (
      <input
        style={{ width: '80%' }}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    );
  };

export default Input;
