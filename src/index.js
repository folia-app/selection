import SelectionABI from "../contractData/ABI-12345-Selection.json";
import SelectionLocal from "../contractData/12345-Selection.json";
import SelectionBaseSepolia from "../contractData/SelectionBaseSepolia.json";

export const Selection = {
  abi: SelectionABI,
  networks: {
    12345: SelectionLocal,
    84532: SelectionBaseSepolia,
  },
};
