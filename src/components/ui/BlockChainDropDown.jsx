// import * as React from "react";
// import Avatar from "@mui/joy/Avatar";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import ListDivider from "@mui/joy/ListDivider";
// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
// import ConnectWalletModal from "./ConnectWalletModal";
// import { useGetBlockchainQuery } from "../../redux/features/blockchain/blockchainApi";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setBlockchain_id,
//   useCurrentBlockchain,
// } from "../../redux/features/blockchain/blockchainSlice";

// function renderValue(option, setBlockchain) {
//   if (!option) {
//     return null;
//   }

//   const { label, src, value } = option;
//   const dataValue = { label, value };
//   setBlockchain(dataValue);
//   return (
//     <React.Fragment>
//       <ListItemDecorator>
//         {src ? (
//           <Avatar size="sm" src={src} alt={label} />
//         ) : (
//           <Avatar size="sm">{label.charAt(0)}</Avatar>
//         )}
//       </ListItemDecorator>
//       {label}
//     </React.Fragment>
//   );
// }

// import { Select, MenuItem } from "@mui/material";
// import { useState } from "react";
// import ConnectWalletModal from "./ConnectWalletModal";
// import { useGetBlockchainQuery } from "../../redux/features/blockchain/blockchainApi";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setBlockchain_id,
//   useCurrentBlockchain,
// } from "../../redux/features/blockchain/blockchainSlice";
// function BlockchainDropDown() {
//   const { data: blockchainData, isFetching } = useGetBlockchainQuery();
//   const { blockchain } = useSelector(useCurrentBlockchain);
//   const dispatch = useDispatch();

//   // Set initial value to an empty string or the ID of the first option
//   const initialValue = blockchainData?.data?.[0]?._id || "";

//   // Use the blockchain ID from Redux state as the selected value
//   const selectedValue = blockchain?.id || initialValue;

//   const handleChange = (event) => {
//     const selectedBlockchainId = event.target.value;
//     const selectedBlockchainName =
//       blockchainData.data.find((option) => option._id === selectedBlockchainId)
//         ?.name || "";
//     const selectedData = {
//       id: selectedBlockchainId,
//       name: selectedBlockchainName,
//     };
//     dispatch(setBlockchain_id(selectedData));
//   };

//   return (
//     <div style={{ display: "flex", gap: "1rem" }}>
//       <Select
//         value={selectedValue}
//         onChange={handleChange}
//         disabled={isFetching}
//         sx={{
//           width: 250,
//           height: 50,
//         }}
//         displayEmpty
//         inputProps={{
//           "aria-label": `${blockchain?.name || "Please select a network"}`,
//         }}
//       >
//         <MenuItem disabled value="">
//           Please select a network
//         </MenuItem>
//         {blockchainData?.data?.map((option) => (
//           <MenuItem key={option?._id} value={option?._id}>
//             {option?.name}
//           </MenuItem>
//         ))}
//       </Select>
//       <ConnectWalletModal />
//     </div>
//   );
// }

// export default BlockchainDropDown;

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

  // Set initial value to an empty string or the ID of the first option
  const initialValue = blockchainData?.data?.[0]?._id || "";

  // Use the blockchain ID from Redux state as the selected value
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
