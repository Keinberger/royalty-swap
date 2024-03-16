import {
  add,
  sub,
  mul,
  div,
  checkLessThan,
  addToCallback,
  CircuitValue,
  CircuitValue256,
  constant,
  getSolidityMapping,
  getAccount,
  checkEqual,
} from "@axiom-crypto/client";

// TODO: update these
const volumeMappingSlot = 0;
const blockInterval = 5;
const volumeThreshold = 100e18;
const VIP_REBATE = 2990;

// Schema for the inputs to the circuit.
export interface CircuitInputs {
  // Latest block number.
  // TODO: The smart contract should verify this is a block number within an acceptable error margin of the latest mined block.
  blockNumber: CircuitValue;
  // The user to compute trading volume for.
  userAddress: CircuitValue;
  // The Uniswap V4 hook address.
  hookAddress: CircuitValue;
  // The Uniswap V4 pool ID.
  poolId: CircuitValue;
  // The fee for the pool.
  poolFee: CircuitValue;
}

// Default inputs to use (only for compiling the circuit).
// TODO: update these.
export const defaultInputs = {
  blockNumber: 20,
  userAddress: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  hookAddress: "0x0304dB7e57e2F6e5fE39Aa498c0bE815374F1859",
  poolId: "0x4bc33d3648d3d594c33099a3c88705855d686b19e9e81d2e6406611823e1a6e1",
  poolFee: 8388608,
};

// The Axiom circuit
export const circuit = async (inputs: CircuitInputs) => {
  // Calculate historical block number for volume computation and future block number for deprecating the obtained fee rebate (if any).
  const oneMonthBefore = sub(inputs.blockNumber.value(), blockInterval);
  const oneMonthAfter = add(inputs.blockNumber.value(), blockInterval);

  // Get historical volume one month before the current (given) block.
  // TODO: drill down the mapping.
  const volumeMappingBefore = getSolidityMapping(
    oneMonthBefore,
    inputs.hookAddress,
    volumeMappingSlot
  );
  const volumeBefore = await volumeMappingBefore.nested([
    inputs.poolId,
    inputs.userAddress,
  ]);

  // Get volume at end block number.
  const volumeMappingLatest = getSolidityMapping(
    inputs.blockNumber,
    inputs.hookAddress,
    volumeMappingSlot
  );
  const volumeLatest = await volumeMappingLatest.nested([
    inputs.poolId,
    inputs.userAddress,
  ]);

  // Compute diff in volume between start and end blocks.
  const volume = sub(volumeLatest.lo(), volumeBefore.lo());

  let feeRebate = constant(0);
  if (volume.value() > volumeThreshold) {
    // If the volume is greater than the threshold, calculate the fee rebate.
    feeRebate = constant(VIP_REBATE);
  }

  // Values to expose to our contract callback as `axiomResults`.
  // The ID of the pool that was processed
  addToCallback(inputs.poolId);
  // The user address that was processed
  addToCallback(inputs.userAddress);
  // The fee rebate to be given
  addToCallback(feeRebate);
  // The block when the fee rebate should be deprecated
  addToCallback(oneMonthAfter);
};
