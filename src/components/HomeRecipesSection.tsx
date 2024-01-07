import { ModalBtn, Modal } from '../components/Modal';
import { NavLink } from 'react-router-dom';
import { randomizer } from '../utils/randomizer.ts';
import { useAppContext } from './AppProvider';

const HomeRecipesSection = () => {
  const { value, modalId, recipes } = useAppContext();

  return (
    <section>
      {recipes?.hits.map((user, i) => {
        const { recipe } = user;
        const [, id] = recipe.uri.split('#')[1].split('_');

        const imgLayoutStyle = {
          background: `linear-gradient(to bottom,transparent,rgba(${randomizer()},0.607)),linear-gradient(to left,transparent,rgba(${randomizer()},0.607))`,
        };
        return (
          <>
            <NavLink to={id} state={{ recipe, imgLayoutStyle }} key={i}>
              <div className="container--food">
                <div className="branding">
                  <img src={recipe.image} alt={recipe.label} />
                  <div
                    style={imgLayoutStyle}
                    className={`transition-all duration-500 ease-in-out img-layout absolute left-0 top-0 w-full h-full rounded-[10px] z-10 opacity-50  hover:opacity-20`}
                  />
                </div>
                <div className="info bg-transparent flex flex-col items-center justify-between  absolute w-full h-2/5 top-[56%]">
                  <h1 className="self-start text-2xl font-bold px-2 bg-transparent [display:-webkit-box] overflow-hidden [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    {recipe.label}
                  </h1>
                  <div className="btn bg-transparent">
                    <ModalBtn id={recipe.label} />
                  </div>
                </div>
              </div>
              {value && <Modal id={recipe.label} modalId={modalId} {...recipe} />}
            </NavLink>
          </>
        );
      })}
    </section>
  );
};

export default HomeRecipesSection;
