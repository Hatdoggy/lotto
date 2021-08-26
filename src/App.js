import { Mes, Main, PopUp, Balls } from "./Components";
import { useState, useEffect } from "react";

function App() {
  const [pop, updPop] = useState(false);
  const [ctr,updCtr] = useState(0);
  const [disp, updDisp] = useState({
    lotto: true,
    mes: false,
    adv: false,
  });

  const [nums, updNums] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    cur: 1,
  });

  useEffect(() => {
    setTimeout(() => updPop(true), 10000);
  }, []);

  return (
    <div className="App h-auto w-100 flx flx-col flx-jc-ce flx-ai-ce p-20 fade-t pos-rel main-div">
      <Balls />
      {pop && <PopUp pop={pop} upd={updPop} ctr={ctr} updCtr={updCtr}/>}

      <section className="flx flx-col flx-jc-ce flx-ai-ce w-50 main-greet">
        <h4 className="mont txt-al-ce txt-wht">Are you the next big winner?</h4>
        <Mes nums={nums} upd={updNums} />
      </section>

      <Main nums={nums} upd={updNums} disp={disp} updDisp={updDisp} updCtr={updCtr}/>
    </div>
  );
}

export default App;
