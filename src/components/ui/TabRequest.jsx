import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ETHTable from "./ETHTable";
import TestLinkTable from "./TestLinkTable";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetAllBalanceRequestByUserEmailQuery } from "../../redux/features/balanceRequest/balanceRequestApi";

export default function TabRequest() {
  const { user: currentUser } = useSelector(selectCurrentUser);
  const { data: TransactionHistory } = useGetAllBalanceRequestByUserEmailQuery(
    currentUser.email || ""
  );

  const ethData = TransactionHistory?.data.filter(
    (data) => data.blockchain_id.network === "ETH"
  );
  const testNetData = TransactionHistory?.data.filter(
    (data) => data.blockchain_id.network === "TestNet"
  );

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
        <ETHTable ethData={ethData} />
      </TabPanel>
      <TabPanel value={1}>
        <TestLinkTable testNetData={testNetData} />
      </TabPanel>
    </Tabs>
  );
}
