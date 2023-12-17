import { useAppContext } from '../components/AppProvider';
import { Modal, ModalBtn } from '../components/Modal';

export type HomeType = {
  value: boolean;
  setValue: (value: boolean) => void;
};

function Home() {
  const { value } = useAppContext();

  return (
    <>
      <main className="main-container">
        <header className="home-header">
          <h1 className="font-bold text-3xl">5 Search Results</h1>
        </header>
        <section>
          <div className="container--food">
            <div className="branding">
              <img
                src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="info">
              <ModalBtn />
            </div>
          </div>
          {value && <Modal />}
        </section>
      </main>
    </>
  );
}

export default Home;
