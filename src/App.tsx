import "./App.css";
import GlobalStyles from "./components/GlobalStyling";
import SiteContainer from "./components/SiteContainer";
function App() {
  return (
    <div>
      <GlobalStyles />
      <SiteContainer />
    </div>
  );
}

export default App;
// const Container = styled.div`
//   overflow: hidden;
//   padding: 40px 120px 80px 200px;
//   @media (max-width: 1000px) {
//     padding: 40px 30px 80px 30px;
//   }
//   @media (max-width: 744px) {
//     padding: 40px 19px 84px 19px;
//   }
//   @media (max-width: 393px) {
//     padding: 60px 30px 70px 30px;
//   }
// `;
