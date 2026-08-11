import React from "react";
import {
  AccordianContainer,
  AccordianDescription,
  AccordianItem,
  AccordianTitle,
} from "../components/accordian";

const Accordian: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-xl px-5 shrink-0">
        <div className="w-full flex flex-col gap-3">
          <AccordianContainer>
            <AccordianItem>
              <AccordianTitle>Will this accordian work?</AccordianTitle>
              <AccordianDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias expedita dolor perferendis earum, neque, asperiores
                facere, accusamus alias rem quod a minus blanditiis ullam sint
                adipisci? Itaque cupiditate nihil maiores. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam iste ea ut a delectus
                ab asperiores magnam obcaecati odit natus amet modi, odio dolore
                sequi facilis excepturi libero officia debitis. Sit perspiciatis
                doloribus quas voluptatem, quod in dignissimos temporibus. Quia
                accusamus deserunt ab optio temporibus at eligendi cum, laborum
                hic deleniti veniam in laboriosam similique recusandae? Officiis
                optio accusamus sunt! Possimus doloremque explicabo
                exercitationem similique quo accusantium assumenda eos quia ab,
                maiores hic, ut ipsa accusamus, minus rem reiciendis molestiae.
                Fugiat provident placeat soluta necessitatibus fuga impedit eos
                ipsa dignissimos! Modi odio ab obcaecati suscipit magnam
                accusamus dolor eligendi, veniam repellendus eius, sunt laborum
                accusantium saepe ratione fugiat nam impedit illum sequi,
              </AccordianDescription>
            </AccordianItem>
          </AccordianContainer>
          <AccordianContainer>
            <AccordianItem>
              <AccordianTitle>Will this accordian work?</AccordianTitle>
              <AccordianDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias expedita dolor perferendis earum, neque, asperiores
                facere, accusamus alias rem quod a minus blanditiis ullam sint
                adipisci? Itaque cupiditate nihil maiores. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam iste ea ut a delectus
              </AccordianDescription>
            </AccordianItem>
          </AccordianContainer>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
