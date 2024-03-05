import { Select, MenuItem } from "@mui/material";
import ConnectWalletModal from "./ConnectWalletModal";
import { useGetBlockchainQuery } from "../../redux/features/blockchain/blockchainApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlockchain_id,
  useCurrentBlockchain,
} from "../../redux/features/blockchain/blockchainSlice";

function BlockchainDropDown() {
  const { data: blockchainData, isFetching } = useGetBlockchainQuery();
  const { blockchain } = useSelector(useCurrentBlockchain);
  const dispatch = useDispatch();

  const initialValue = blockchainData?.data?.[0]?._id || "";

  const selectedValue = blockchain?.id || initialValue;

  const handleChange = (event) => {
    const selectedBlockchainId = event.target.value;
    const selectedBlockchainName =
      blockchainData.data.find((option) => option._id === selectedBlockchainId)
        ?.name || "";
    const selectedData = {
      id: selectedBlockchainId,
      name: selectedBlockchainName,
    };
    dispatch(setBlockchain_id(selectedData));
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Select
        value={selectedValue}
        onChange={handleChange}
        disabled={isFetching}
        sx={{
          width: 250,
          height: 50,
        }}
        displayEmpty
        inputProps={{
          "aria-label": `${blockchain?.name || "Please select a network"}`,
        }}
      >
        <MenuItem disabled value="">
          Please select a network
        </MenuItem>
        {blockchainData?.data?.map((option) => (
          <MenuItem key={option?._id} value={option?._id}>
            {option?.name}
          </MenuItem>
        ))}
      </Select>
      <ConnectWalletModal />
    </div>
  );
}

export default BlockchainDropDown;
