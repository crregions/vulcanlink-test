pragma solidity 0.4.24;

contract AggregatorFake {
    function latestAnswer() external pure returns (int256) {

        // 8 decimal places is expcted
        int256 exchangeRate = 221000000;

        return exchangeRate;
    }
}
