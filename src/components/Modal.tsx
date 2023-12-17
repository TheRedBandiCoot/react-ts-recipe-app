import { IoClose } from 'react-icons/io5';
import { useAppContext } from './AppProvider';
import { useState } from 'react';

// type ModalType = Pick<HomeType, 'setValue'>;

export function Modal() {
  const { setValue } = useAppContext();
  const [unmounted, setUnmounted] = useState(false);
  const [change, setChange] = useState(false);

  const closeBtn = () => {
    setTimeout(() => {
      setValue(false);
    }, 170);
    setUnmounted(true);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-layout" onClick={closeBtn} />
        <div className={`modal-content ${unmounted && 'unmounted'}`}>
          <header className="modal-content--header">
            <div className="main-header">
              <h1
                className={`transition-colors duration-700 ease-in-out text-red-400 text-3xl ${
                  change && 'text-green-400'
                }`}
              >
                Chicken Recipe
              </h1>
              <button onClick={() => setChange(!change)}>change</button>
            </div>
            <div className="close-btn-layout">
              <button type="button" className="close-btn" onClick={closeBtn}>
                <IoClose />
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export function ModalBtn() {
  const { setValue } = useAppContext();
  return <button onClick={() => setValue(true)}>Modal</button>;
}
