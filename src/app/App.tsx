import { Main } from "../pages/main";
import { FC } from "react";
import { Sidebar } from "../shared/ui/layout/sidebar/Sidebar.tsx";

const App: FC = () => {
  return (
    <>
      <Sidebar>
        <Main></Main>
      </Sidebar>
    </>
  );
};

export default App;
