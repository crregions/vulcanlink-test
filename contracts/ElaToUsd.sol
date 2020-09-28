pragma solidity 0.4.24;

import "./oz/Initializable.sol";

contract Aggregator {
    function latestAnswer() external view returns (int256);
}

contract ElaToUsd is Initializable {

    Aggregator oracleAggregator;

    function initialize(address aggregatorAddr) public initializer {
        oracleAggregator = Aggregator(aggregatorAddr);
    }

    function isInitalized() external pure returns (bool) {
        return initialized;
    }

    function calcUsd(int256 elaAmt) external view returns (int256) {
        int256 elaValueUsd = oracleAggregator.latestAnswer();

        return elaAmt * elaValueUsd;

    }

    // ************************************* MISC FUNCTIONS *************************************
    function() external payable {}
}
