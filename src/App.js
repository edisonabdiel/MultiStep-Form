import './App.css';
// Custom made components
import NavBar from './components/NavBar';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <section className="">
        <NavBar />
        <div className="container pt-5">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Form />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default App;
