export const idlFactory = ({ IDL }) => {
  const Duration = IDL.Variant({
    'nanoseconds' : IDL.Nat,
    'hours' : IDL.Nat,
    'days' : IDL.Nat,
    'minutes' : IDL.Nat,
    'seconds' : IDL.Nat,
  });
  const InitArgs = IDL.Record({
    'totalRewardsPerYear' : IDL.Nat,
    'rewardInterval' : Duration,
    'stakePeriod' : Duration,
  });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Time = IDL.Int;
  const DissolveState = IDL.Variant({
    'DissolveDelay' : Time,
    'DissolveTimestamp' : Time,
  });
  const Collection = IDL.Variant({
    'BTCFlower' : IDL.Null,
    'ICPFlower' : IDL.Null,
    'ETHFlower' : IDL.Null,
  });
  const TokenIndex = IDL.Nat;
  const Flower = IDL.Record({
    'collection' : Collection,
    'tokenIndex' : TokenIndex,
  });
  const Neuron = IDL.Record({
    'id' : IDL.Nat,
    'userId' : IDL.Principal,
    'createdAt' : Time,
    'totalRewards' : IDL.Nat,
    'rewards' : IDL.Nat,
    'dissolveState' : DissolveState,
    'stakingAccount' : Account,
    'flowers' : IDL.Vec(Flower),
  });
  const NeuronId = IDL.Nat;
  const Result_1 = IDL.Variant({ 'ok' : NeuronId, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const anon_class_10_1 = IDL.Service({
    'getStakingAccount' : IDL.Func([IDL.Nat16], [Account], ['query']),
    'getUserNeurons' : IDL.Func([], [IDL.Vec(Neuron)], ['query']),
    'me' : IDL.Func([], [IDL.Nat], ['query']),
    'stake' : IDL.Func([IDL.Nat16], [Result_1], []),
    'startDissolving' : IDL.Func([NeuronId], [Result], ['query']),
  });
  return anon_class_10_1;
};
export const init = ({ IDL }) => {
  const Duration = IDL.Variant({
    'nanoseconds' : IDL.Nat,
    'hours' : IDL.Nat,
    'days' : IDL.Nat,
    'minutes' : IDL.Nat,
    'seconds' : IDL.Nat,
  });
  const InitArgs = IDL.Record({
    'totalRewardsPerYear' : IDL.Nat,
    'rewardInterval' : Duration,
    'stakePeriod' : Duration,
  });
  return [IDL.Principal, InitArgs];
};
