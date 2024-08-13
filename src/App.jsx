import { Counter } from "./assign1/Counter";
import { Assign10Page } from "./assign10/Assign10Page";
import { ThemeProvider10 } from "./assign10/ThemeHook";
import { GetData } from "./assign2/GetPublicData";
import { GetData3 } from "./assign3/GetData";
import { AnotherComponent } from "./assign4/components/AnotherComponent";
import { SampleComponent } from "./assign4/components/SampleComponent";
import { ThemeProvider } from "./assign4/hooks/ThemeProvider";
import { ProfileComponent } from "./assign5/ProfileComponent";
import { TopPage } from "./assign6/top";
import { Assign9Page } from "./assign9/Assign9Page";

function App() {

  return (
    < >
    <ThemeProvider10>
      <Assign10Page/>
    </ThemeProvider10>
    </>
  )
}

export default App
