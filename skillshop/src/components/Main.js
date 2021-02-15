import "./../styles/Main.css";

import ServicesList from "./ServicesList";

const Main = () => {
  return (
    <div class="main">
      <div class="main-left">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
      <div class="main-center">
        <ServicesList />
      </div>
      <div class="main-right">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
    </div>
  );
};

export default Main;
