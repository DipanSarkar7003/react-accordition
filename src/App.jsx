import { useState } from "react";
import "./App.css";

export default function App() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return <Accordion faqs={faqs} />;
}

function Accordion({ faqs }) {
  const [curNumber, setCurNumber] = useState(1);
  // console.log(ontogle)
  return (
    <div className="accordion">
      {faqs.map((elem, index) => (
        <AccordionItem
          key={index}
          number={"0" + Number(index + 1)}
          title={elem.title}
          text={elem.text}
          onClick={console.log("click")}
          curNumber = {curNumber}
          setCurNumber = {setCurNumber}
        />
      ))}
    </div>
  );
}

function AccordionItem({ number, title, text , curNumber , setCurNumber ,  }) {
  // const [isOpen , setIsOpen]=useState(false)
  const isOpen = curNumber==number;
  console.log(isOpen)
  console.log(curNumber)
  console.log(number)
  function handleTogle() {
  setCurNumber(number)
  }

  return (
    <>
      <div className={isOpen ? "item open" : "item"} onClick={handleTogle}>
        <p className="number">{number}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen ? <div className="content-box text">{text}</div> : ""}
      </div>
    </>
  );
}
