import SelectionsABI from "../contractData/ABI-12345-Selections.json";
import SelectionsLocal from "../contractData/12345-Selections.json";
import SelectionsBaseSepolia from "../contractData/SelectionsBaseSepolia.json";

export const Selections = {
  abi: SelectionsABI,
  networks: {
    12345: SelectionsLocal,
    84532: SelectionsBaseSepolia,
  },
};
