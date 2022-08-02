import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import classes from './App.module.css'

const App = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className={classes.bodycomponent}>
        <Body/>
      </section>
    </div>
  );
};

export default App;
