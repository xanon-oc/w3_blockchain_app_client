import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import UsersTable from "./Dashboard/UsersTable";
import BlockchainContainer from "./Dashboard/BlockchainContainer";
import BalanceRequestContainer from "./Dashboard/BalanceRequestContainer";

export default function DashboardTab() {
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
          Users
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Blockchain
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Balance Request
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <UsersTable />
      </TabPanel>
      <TabPanel value={1}>
        <BlockchainContainer />
      </TabPanel>
      <TabPanel value={2}>
        <BalanceRequestContainer />
      </TabPanel>
    </Tabs>
  );
}
