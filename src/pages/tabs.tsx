import React from "react";
import { TabContent, TabItem, TabsList, TabTrigger } from "../components/tab";

const Tabs: React.FC = () => {
  return (
    <div className="w-full h-full py-10 flex justify-center">
      <div className="shrink-0">
        <TabItem defaultValue="1">
          <TabsList>
            <TabTrigger value={"1"}>First Tab</TabTrigger>
            <TabTrigger value={"2"}>Second Tab</TabTrigger>
            <TabTrigger value={"3"}>Third Tab</TabTrigger>
          </TabsList>
          <TabContent value={"1"}>First tab content</TabContent>
          <TabContent value={"2"}>Second tab content</TabContent>
          <TabContent value={"3"}>Third tab content</TabContent>
        </TabItem>
      </div>
    </div>
  );
};

export default Tabs;
