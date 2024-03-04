import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ETHTable from "./ETHTable";
import TestLinkTable from "./TestLinkTable";

export default function TabRequest() {
  return (
    <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        width: "100%",
        borderRadius: "lg",
        boxShadow: "sm",
        overflow: "auto",
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: "sm",
            fontWeight: "lg",
            [`&[aria-selected="true"]`]: {
              color: "primary.500",
              bgcolor: "background.surface",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          ETH Transaction History
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          TestLink Transaction History
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <ETHTable />
      </TabPanel>
      <TabPanel value={1}>
        <TestLinkTable />
      </TabPanel>
    </Tabs>
  );
}
