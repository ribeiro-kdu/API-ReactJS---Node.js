import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin-top: 50px;

  @media(max-width: 615px) {
    justify-content: center;
  }
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  padding: 8px 16px;
  margin: 0 16px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #4CAF50;
  box-shadow: 2px 2px 3px #757575;
  color: #fff;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 2px 2px 3px #212121;
    background-color: #388E3C;
  }

  @media(max-width: 615px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
  }

`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;
  

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media(max-width: 615px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
  }
`;