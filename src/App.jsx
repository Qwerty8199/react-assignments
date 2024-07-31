import { Counter } from "./assign1/Counter";
import { GetData } from "./assign2/GetPublicData";
import { GetData3 } from "./assign3/GetData";
import { AnotherComponent } from "./assign4/components/AnotherComponent";
import { SampleComponent } from "./assign4/components/SampleComponent";
import { ThemeProvider } from "./assign4/hooks/ThemeProvider";

function App() {

  return (
    <>
      <ThemeProvider>
        <SampleComponent />
        <AnotherComponent />
      </ThemeProvider>
    </>
  )
}

export default App
