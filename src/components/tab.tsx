import { type FC } from "react";
import { useState, type PropsWithChildren } from "react";
import { TabContext, useTabContext } from "../store/tab-context";

interface TabItemProps extends PropsWithChildren {
  defaultValue: string | number;
}

interface TabTriggerProps extends PropsWithChildren {
  value: string | number;
}

const TabItem: FC<TabItemProps> = ({ children, defaultValue }) => {
  const [tab, setTab] = useState<string | number>(defaultValue);

  const onTabChange = (tab: string | number) => {
    setTab(tab);
  };
  return (
    <TabContext.Provider value={{ tab, onTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

const TabsList: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex gap-5 items-center">{children}</div>;
};

const TabTrigger: FC<TabTriggerProps> = ({ value, children }) => {
  const { tab, onTabChange } = useTabContext();
  const isActiveTab = tab === value;
  return (
    <button
      onClick={() => onTabChange(value)}
      className={`${isActiveTab ? "border p-1 bg-white" : ""} rounded-xl text-xs`}
    >
      {children}
    </button>
  );
};

const TabContent: FC<TabTriggerProps> = ({ value, children }) => {
  const { tab } = useTabContext();
  const showTab = value === tab;
  if (!showTab) return;
  return <div className="mt-2 border rounded-2xl p-2">{children}</div>;
};

export { TabItem, TabsList, TabTrigger, TabContent };
