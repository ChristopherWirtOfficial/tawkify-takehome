import type { NextPage } from 'next';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import { clearList } from '../functions/list';


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

const Home: NextPage = () => {
  const [label, setLabel] = useState("Big ol' Projects");
  const [placeholder, setPlaceholder] = useState("What's next?");
  const [disabled, setDisabled] = useState(false);
  const [greatPrankDisabledState, setGreatPrankDisabled] = useState(0);
  const [required, setRequired] = useState(false);
  const [max, setMax] = useState(3);

  useEffect(() => {
    // Only run through the joke states once (per pageload)
    if (disabled && greatPrankDisabledState === 0) {
      setGreatPrankDisabled(1);
      setTimeout(() => {
        setGreatPrankDisabled(2);
        setTimeout(() => {
          setGreatPrankDisabled(3);
        }, 5000);
      }, 3000);
    }
  }, [disabled])

  const greatPrankActive = greatPrankDisabledState === 1;

  return (
    <div>
      <TodoList
        label={label}
        placeholder={placeholder}
        max={max}
        required={required}
        disabled={disabled}
      />
      <div className='toolbox' style={{
        marginTop: '10rem',
      }}>
        <button style={{ display: 'block' }} type="button" onClick={clearList} disabled={greatPrankActive}>Reset</button>
        Label: <Input placeholder='Label' value={label} onChange={setLabel} disabled={greatPrankActive} />
        Placeholder: <Input placeholder='Placeholder' value={placeholder} onChange={setPlaceholder} disabled={greatPrankActive} />
        Max: <Input placeholder='Max' value={max} onChange={setMax} disabled={greatPrankActive} />
        <div style={{ display: 'flex', justifyContent: '' }}>
          <input type="checkbox" checked={disabled} onChange={() => setDisabled(!disabled)} disabled={greatPrankActive} /> Disabled
          <input type="checkbox" checked={required} onChange={() => setRequired(!required)} disabled={greatPrankActive} /> Required
        </div>
        {
          // Only show the message if prank is in stage 2.
          <div style={{
            color: 'green',
            fontSize: '1.5rem',
            marginTop: '1.5rem',
            opacity: greatPrankDisabledState === 2 ? 1.0 : 0.0,
            transition: 'opacity 1s',
          }}>Just kidding!
          </div>
        }
      </div>
    </div>
  );
};

export default Home;
