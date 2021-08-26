import { useState, useEffect } from "react";
import { ActionRedirect, random, remove} from "./func.js";

const {mess,src,alt} = window.data.fin[1]

const Prog = (props) => {
  const { nums } = props;

  return (
    <div className="flx flx-jc-ce flx-ai-ce p-20 flx-jc-sa w-50 progress">
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[1]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[2]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[3]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[4]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[5]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[6]}</span>
      <span className="p-10 mont txt-drk flx-ai-ce prog bg-prog">{nums[7]}</span>
    </div>
  );
};

const Mes = (props) => {
  const { main, mes } = window.data.greet;

  return (
    <section className="flx flx-col flx-jc-sa flx-ai-ce p-20 txt-wht w-100 bg-drk brd m-t-1 fade shdw-main z-main">
      <h4 className="mont txt-al-ce">
        {main.greet1}
        <span className="txt-act">{main.bold1}</span>
        {main.greet2}
        <span className="txt-act">{main.bold2}</span>
      </h4>
      <p className="lato txt-al-ce">
        {mes.mes1}
        <span className="txt-act mont">{mes.bold1}</span>
        {mes.mes2}
        <span className="txt-act mont">{mes.bold2}</span>
      </p>
      <Prog nums={props.nums} upd={props.upd} />
    </section>
  );
};

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45,
];

const Texts = (props) => {
  const [reveal, updShow] = useState({
    one: false,
    two: false,
    three: false,
  });

  const show = (targ) => {
    if (targ === "three") {
      updShow({
        ...reveal,
        three: true,
      });
      setTimeout(() => {
        document.querySelector("main").classList.remove("bg-wht");
        document
          .querySelector("main")
          .classList.add("bg-drk", "txt-wht", "h-50");
        props.upd({
          ...props.disp,
          adv: true,
          mes: false,
        });
      }, 2000);
    } else {
      updShow({
        ...reveal,
        two: true,
      });
      setTimeout(() => show("three"), 2000);
    }
  };

  useEffect(() => {
    updShow({
      ...reveal,
      one: true,
    });

    setTimeout(() => {
      show("two");
    }, 2000);
  }, []);

  const { mes1, mes2, mes3 } = window.data.loading;

  return (
    <div className="flx flx-col flx-jc-sa flx-ai-ce flx-wrp h-100 w-80 txt-drk inner">
      {reveal.one && <p className="lato txt-al-ce w-100 fade">{mes1}</p>}
      {reveal.two && <p className="lato txt-al-ce w-100 fade">{mes2}</p>}
      {reveal.three && <p className="lato txt-al-ce w-100 fade">{mes3}</p>}
    </div>
  );
};

const Fin = (prop) => {
  const clicked = (id) => {
    ActionRedirect(id);
  };

  return (
    <section className="flx flx-col flx-jc-ce flx-ai-ce flx-wrp w-80">
      <h4 className="mont txt-wht">CONGRATULATIONS</h4>
      <h4 className="mont txt-wht"><span className="txt-act">$5000 </span>{mess}</h4>
      <img src={src} alt={alt} className="tesla m-t-2"/>
      <button
        className="btn-wht shdw-btn p-20 m-t-5 w-80 brd-btn txt-drk mont trans product-button"
        data-product-id="1"
        onClick={(elem) => clicked(elem.target.dataset.productId)}
      >
        Claim Now!
      </button>
    </section>
  );
};

let control = 0;

const PopUp = (prop) => {
  const [info, updInfo] = useState({
    name: "",
    item: "",
    src:"",
    alt:""
  });

  const close = () => {  
    remove(document.querySelector('.det'),prop.pop) 
    setTimeout(()=>prop.upd(false),5000)
    setTimeout(()=>{
      prop.updCtr(prop.ctr+1);
      if(prop.ctr<2){
       updInfo(window.names[prop.ctr]);   
        prop.upd(true); 
      }
    },10000)   
  };

  useEffect(() => {
    updInfo(window.names[prop.ctr]);
    setTimeout(() =>{
      close()
    }, 5000);
  }, []);

  return (
    <div className="pos-abs flx flx-jc-ce flx-ai-end w-100 h-100 fade popCont">
      <div className="flx pos-rel flx-jc-ce flx-ai-ce p-20 bg-wht trans txt-drk brd w-30 m-2 h-auto fade-b pop z-top shdw-main det">
        <img src="./img/exit.svg" alt="exit" className="txt-drk mont exit pos-abs" onClick={close}/>
        <div className="detImg bg-det shdw-main">
          <img src={info.src} alt={info.alt} className="fit"/>
        </div>
        <div className="w-70 flx flx-col flx-jc-ce flx-ai-ce">
          <p className="lato txt-al-l">{info.name} won:</p>
          <h4 className="mont txt-al-l">{info.item}</h4>
          <p className="lato txt-drk txt-al-l">{info.days}</p>          
        </div>
      </div>
    </div>
  );
};

const Balls = () => {
  return (
    <div className="pos-abs w-100 h-100 balls">
      <img src="./img/ball1.svg" className="ball ball-tr" alt="ball1" />
      <img src="./img/ball2.svg" className="ball ball-r" alt="ball2" />
      <img src="./img/ball3.svg" className="ball ball-l" alt="ball3" />
      <img src="./img/ball4.svg" className="ball ball-bl" alt="ball4" />
    </div>
  );
};

const clicked = [];

const Nums = (props) => {
  const update = (targ) => {
    const { upd, nums, disp, updDisp } = props;
    const { cur } = nums;
    let val = targ.id;
    let target = cur;

    let elem = document.querySelectorAll(".prog")[parseInt(cur) - 1];

    if (!clicked.includes(targ.id) && clicked.length < 7) {
      clicked.push(targ.id);
      upd({
        ...nums,
        [target]: val,
        cur: cur + 1,
      });

      targ.classList.remove("bg-drk");
      targ.classList.add("bg-act");
      elem.classList.remove("bg-prog");
      elem.classList.add("bg-act");
    }

    if (cur === 7) {
      updDisp({
        ...disp,
        mes: true,
        lotto: false,
      });
    }
  };

  return (
    <section className="flx flx-jc-ce flx-ai-ce flx-wrp w-100">
      {props.disp.lotto &&
        numbers.map((data, ndx) => (
          <span
            key={ndx}
            className="num bg-drk mont flx flx-jc-ce flx-ai-ce p-20"
            id={data}
            onClick={(elem) => update(elem.target)}
          >
            {data}
          </span>
        ))}
      {props.disp.mes && <Texts disp={props.disp} upd={props.updDisp} />}
    </section>
  );
};

const Main = (props) => {
  const { lotto, mes, adv } = props.disp;

  return (
    <main className="p-20 bg-wht brd flx flx-jc-ce flx-ai-ce w-50 h-50 m-t-1 trans shdw-main z-main text">
      {adv ? (
        <Fin mes={mess} src={src} alt={alt}/>
      ) : (
        <Nums
          nums={props.nums}
          upd={props.upd}
          disp={props.disp}
          updDisp={props.updDisp}
        />
      )}
    </main>
  );
};

export { Mes, Main, PopUp, Balls };
