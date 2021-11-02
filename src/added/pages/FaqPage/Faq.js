import React from "react";
import PageBanner from "src/components/commonComponent/PageBanner/PageBanner";
import faqData from "src/added/components/Data/FaqData.js";
import FaqComponent from "src/components/FaqComponent/FaqComponent";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <PageBanner title="faq" dontShowTitle={true} menu={true} />
      <div className="faqcont">
        {faqData.map((curElem) => {
          return (
            <div className="faqcomp">
              <FaqComponent Data={curElem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;