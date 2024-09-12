pragma solidity ^0.8.0;

import {IFileStore} from "./IFileStore.sol";
import {File} from "./File.sol";

contract MockFileStore is IFileStore {
    constructor() {}

    function getFile(
        string calldata filename
    ) external view override returns (File memory file) {}
}
