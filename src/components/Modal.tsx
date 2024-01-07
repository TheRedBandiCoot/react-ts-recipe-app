import { IoClose } from 'react-icons/io5';
import { useAppContext } from './AppProvider';
import { FormEvent, useEffect, useState } from 'react';
import type { Modal, ModalIdType } from '../utils/Types';

export function Modal({ id, modalId, ...recipe }: Modal) {
  const { unmounted, setValue, setUnmounted } = useAppContext();
  const [padding, setPadding] = useState<boolean | null>(null);

  const closeBtn = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setValue(false);
    }, 200);
    setUnmounted(true);
  };

  useEffect(() => {
    recipe.ingredientLines.length <= 6 ? setPadding(true) : setPadding(false);
  }, [recipe]);

  if (!modalId || modalId !== id) return null;

  return (
    <>
      {/*//@ Modal Layout */}
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 backdrop-blur-sm"
        onClick={closeBtn}
      />
      <div
        onClick={(e) => e.preventDefault()}
        className={`[background-color:rgb(199,199,199)] cursor-default rounded-md fixed top-1/2 left-1/2 z-20 overflow-hidden translate-x-[-50%] translate-y-[-50%] ${
          unmounted
            ? `animate-[unmountAnimation_200ms_ease-in-out_forwards]`
            : `animate-[mountAnimation_200ms_ease-in-out_forwards]`
        }`}
      >
        {/*//@ Modal Header */}
        <header className="w-full bg-transparent h-24 flex justify-around">
          <div className="bg-transparent w-11/12 pl-6 flex items-center border-[6px] border-solid [border-image:linear-gradient(to_right,rgb(134,134,134),rgba(0,0,0,0))_0%_0%_100%_30%]">
            <h1
              className={`transition ease-in-out duration-700 font-bold text-[rgb(129,134,141)] select-none bg-transparent cursor-pointer text-3xl hover:text-gray-500`}
            >
              {id}
            </h1>
          </div>
          <div className="bg-transparent flex items-start w-[10%] justify-end pr-2">
            <button
              type="button"
              className="w-[2.3rem] h-[2.3rem] p-2 text-[1.3rem] rounded-full mt-2 transition  duration-200 hover:[background-color:rgba(183,183,183,0.596)] [&:active>*]:text-red-700"
              onClick={closeBtn}
            >
              <IoClose className="text-red-500 bg-transparent" />
            </button>
          </div>
        </header>

        <main className="bg-transparent h-[78%] pl-14 pr-4 flex justify-between items-center">
          <img className="w-1/4 rounded-2xl" src={recipe.image} alt={recipe.label} />
          <aside className="bg-transparent w-[30rem] h-72 overflow-hidden hover:overflow-y-scroll [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[rgb(168,168,168)] [&::-webkit-scrollbar-thumb]:rounded-xl">
            <ul
              className={`bg-transparent relative top-1/2 w-full h-full ${
                padding ? 'pt-16' : 'pt-4'
              }  px-8 pb-12 list-disc translate-y-[-50%]`}
            >
              {recipe.ingredientLines.map((ingredient, i) => {
                return (
                  <li key={i} className="bg-transparent">
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </aside>
        </main>
      </div>
    </>
  );
}

/**
 *
 *  scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2 lg:max-h-96
 */

export function ModalBtn({ id }: ModalIdType) {
  const { setValue, setUnmounted, setModalId, value } = useAppContext();

  function handleClick(e: FormEvent) {
    e.preventDefault();
    setValue(true);
    setUnmounted(false);
    setModalId(id);
  }

  useEffect(() => {
    value ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'scroll');
  }, [value]);
  return (
    <button
      className="transition duration-500  ease-in-out border-2 border-cyan-950  px-8 py-1 rounded-md hover:bg-cyan-800 hover:border-cyan-700 hover:text-white text-base font-bold tracking-widest active:bg-cyan-950"
      onClick={handleClick}
    >
      View
    </button>
  );
}
