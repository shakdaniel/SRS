import React from "react";
import { Switch, Route } from "react-router-dom";
// import { useTransition, animated } from "react-spring";
// import useRouter from "./utils/useRouter";
import Layout from "./templates/Layout";
import { Home, About, Contact } from "./pages";

// const App = () => {
//   const { location } = useRouter();
//   const transitions = useTransition(location, location => location.pathname, {
//     from: { opacity: 0, right: "100%" },
//     enter: { opacity: 1, left: "0" },
//     leave: { opacity: 0, left: "-50%" }
//   });

//   return (
//     <Layout>
//       {transitions.map(({ item, props, key }) => (
//         <animated.div key={key} style={props}>
//           <Switch location={item}>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/contact" component={Contact} />
//           </Switch>
//         </animated.div>
//       ))}
//     </Layout>
//   );
// };

const App = () => {
  return (
    <Layout>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </Layout>
  );
};

export default App;
