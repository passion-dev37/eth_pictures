import BN from "bn.js";
import { Address } from "web3x-es/address";
import { EventLog, TransactionReceipt } from "web3x-es/formatters";
import { Contract, ContractOptions, TxCall, TxSend, EventSubscriptionFactory } from "web3x-es/contract";
import { Eth } from "web3x-es/eth";
import abi from "./MedianizerAbi";
export type LogNoteEvent = {
    sig: string;
    guy: Address;
    foo: string;
    bar: string;
    wad: string;
    fax: string;
};
export type LogSetAuthorityEvent = {
    authority: Address;
};
export type LogSetOwnerEvent = {
    owner: Address;
};
export interface LogNoteEventLog extends EventLog<LogNoteEvent, "LogNote"> {
}
export interface LogSetAuthorityEventLog extends EventLog<LogSetAuthorityEvent, "LogSetAuthority"> {
}
export interface LogSetOwnerEventLog extends EventLog<LogSetOwnerEvent, "LogSetOwner"> {
}
interface MedianizerEvents {
    LogNote: EventSubscriptionFactory<LogNoteEventLog>;
    LogSetAuthority: EventSubscriptionFactory<LogSetAuthorityEventLog>;
    LogSetOwner: EventSubscriptionFactory<LogSetOwnerEventLog>;
}
interface MedianizerEventLogs {
    LogNote: LogNoteEventLog;
    LogSetAuthority: LogSetAuthorityEventLog;
    LogSetOwner: LogSetOwnerEventLog;
}
interface MedianizerTxEventLogs {
    LogNote: LogNoteEventLog[];
    LogSetAuthority: LogSetAuthorityEventLog[];
    LogSetOwner: LogSetOwnerEventLog[];
}
export interface MedianizerTransactionReceipt extends TransactionReceipt<MedianizerTxEventLogs> {
}
interface MedianizerMethods {
    setOwner(owner_: Address): TxSend<MedianizerTransactionReceipt>;
    poke(a0: string): TxSend<MedianizerTransactionReceipt>;
    poke(): TxSend<MedianizerTransactionReceipt>;
    compute(): TxCall<[string, boolean]>;
    set(wat: Address): TxSend<MedianizerTransactionReceipt>;
    unset(wat: Address): TxSend<MedianizerTransactionReceipt>;
    indexes(a0: Address): TxCall<string>;
    next(): TxCall<string>;
    read(): TxCall<string>;
    peek(): TxCall<[string, boolean]>;
    values(a0: string): TxCall<Address>;
    setMin(min_: number | string | BN): TxSend<MedianizerTransactionReceipt>;
    setAuthority(authority_: Address): TxSend<MedianizerTransactionReceipt>;
    owner(): TxCall<Address>;
    void(): TxSend<MedianizerTransactionReceipt>;
    set(pos: string, wat: Address): TxSend<MedianizerTransactionReceipt>;
    authority(): TxCall<Address>;
    unset(pos: string): TxSend<MedianizerTransactionReceipt>;
    setNext(next_: string): TxSend<MedianizerTransactionReceipt>;
    min(): TxCall<string>;
}
export interface MedianizerDefinition {
    methods: MedianizerMethods;
    events: MedianizerEvents;
    eventLogs: MedianizerEventLogs;
}
export class Medianizer extends Contract<MedianizerDefinition> {
    constructor(eth: Eth, address?: Address, options?: ContractOptions) {
        super(eth, abi, address, options);
    }
    deploy(): TxSend<MedianizerTransactionReceipt> {
        return super.deployBytecode("0x606060405260058054606060020a60c060020a03196001606060020a0319909116600117166c010000000000000000000000001790555b60018054600160a060020a03191633600160a060020a03169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a25b5b610fff8061008e6000396000f300606060405236156100f65763ffffffff60e060020a60003504166313af403581146100f85780631504460f14610116578063181783581461012b5780631a43c3381461013d5780632801617e146101665780632966d1b9146101845780632db78d93146101a25780634c8fe526146101db57806357de26a41461020857806359e02dd71461022a578063651dd0de146102535780636ba5ef0d1461028c5780637a9e5e4b146102aa5780638da5cb5b146102c8578063ac4c25b2146102f4578063beb38b4314610306578063bf7e214f14610331578063e0a1fdad1461035d578063f2c5925d1461037c578063f88979451461039b575bfe5b341561010057fe5b610114600160a060020a03600435166103c7565b005b341561011e57fe5b610114600435610437565b005b341561013357fe5b6101146104d0565b005b341561014557fe5b61014d6104dd565b6040805192835290151560208301528051918290030190f35b341561016e57fe5b610114600160a060020a03600435166108a4565b005b341561018c57fe5b610114600160a060020a0360043516610922565b005b34156101aa57fe5b6101be600160a060020a0360043516610951565b60408051600160a060020a03199092168252519081900360200190f35b34156101e357fe5b6101be610969565b60408051600160a060020a03199092168252519081900360200190f35b341561021057fe5b610218610975565b60408051918252519081900360200190f35b341561023257fe5b61014d610999565b6040805192835290151560208301528051918290030190f35b341561025b57fe5b610270600160a060020a0319600435166109ae565b60408051600160a060020a039092168252519081900360200190f35b341561029457fe5b6101146001606060020a03600435166109c9565b005b34156102b257fe5b610114600160a060020a0360043516610a91565b005b34156102d057fe5b610270610afd565b60408051600160a060020a039092168252519081900360200190f35b34156102fc57fe5b610114610b0c565b005b341561030e57fe5b610114600160a060020a031960043516602435600160a060020a0316610ba9565b005b341561033957fe5b610270610d37565b60408051600160a060020a039092168252519081900360200190f35b341561036557fe5b610114600160a060020a031960043516610d46565b005b341561038457fe5b610114600160a060020a031960043516610d55565b005b34156103a357fe5b6103ab610e09565b604080516001606060020a039092168252519081900360200190f35b6103e56103e033600035600160e060020a031916610e1f565b610f24565b60018054600160a060020a031916600160a060020a0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a25b5b50565b6040805134808252602082018381523693830184905260043593602435938493869333600160a060020a03169360008035600160e060020a031916949092606082018484808284376040519201829003965090945050505050a46104996104dd565b6001805491151560a060020a0274ff0000000000000000000000000000000000000000199092169190911790556002555b5b505050565b6104da6000610437565b5b565b600060006104e9610fc1565b6000600060006000600060006000600060006001600560009054906101000a900460a060020a0260a060020a9004036001606060020a031660405180591061052e5750595b908082528060200260200182016040525b50995060009850600197505b60055460a060020a908102046001606060020a03908116908916101561078057600160a060020a031960a060020a890216600090815260036020526040902054600160a060020a0316156107735760a060020a8802600160a060020a031916600090815260036020526040808220548151820183905281517f59e02dd70000000000000000000000000000000000000000000000000000000081528251600160a060020a03909216936359e02dd79360048084019491939192918390030190829087803b151561061757fe5b60325a03f1151561062457fe5b505060405180516020909101519098509650508515610773576001606060020a038916158061067657508960018a036001606060020a031681518110151561066857fe5b602090810290910101518710155b156106a257868a8a6001606060020a031681518110151561069357fe5b6020908102909101015261076c565b600094505b89856001606060020a03168151811015156106be57fe5b6020908102909101015187106106d9576001909401936106a7565b8893505b846001606060020a0316846001606060020a031611156107495789600185036001606060020a031681518110151561071157fe5b906020019060200201518a856001606060020a031681518110151561073257fe5b602090810290910101525b600019909301926106dd565b868a866001606060020a031681518110151561076157fe5b602090810290910101525b6001909801975b5b5b60019097019661054b565b6005546001606060020a03606060020a9091048116908a1610156107ac5760025460009b509b50610896565b60026001606060020a038a165b066001606060020a0316600014156108595789600160026001606060020a038c165b04036001606060020a03168151811015156107f257fe5b6020908102909101015191508960026001606060020a038b165b046001606060020a031681518110151561082257fe5b60209081029091010151905061084961083b8383610f35565b671bc16d674ec80000610f55565b6001608060020a0316925061088e565b8960026001606060020a036000198c01165b046001606060020a031681518110151561088157fe5b9060200190602002015192505b8260019b509b505b505050505050505050509091565b60006108c46103e033600035600160e060020a031916610e1f565b610f24565b5060055460a060020a908102819004600101026108ec600160a060020a031982161515610f24565b6005546108ff9060a060020a0283610ba9565b600580546bffffffffffffffffffffffff191660a060020a83041790555b5b5050565b600160a060020a0381166000908152600460205260408120546104339160a060020a90910290610ba9565b5b50565b60046020526000908152604090205460a060020a0281565b60055460a060020a0281565b600060006000610983610999565b9150915061099081610f24565b8192505b505090565b60025460015460a060020a900460ff165b9091565b600360205260009081526040902054600160a060020a031681565b6040805134808252602082018381523693830184905260043593602435938493869333600160a060020a03169360008035600160e060020a031916949092606082018484808284376040519201829003965090945050505050a4610a416103e033600035600160e060020a031916610e1f565b610f24565b6001606060020a0383161515610a575760006000fd5b6005805477ffffffffffffffffffffffff0000000000000000000000001916606060020a6001606060020a038616021790555b5b5b505050565b610aaf6103e033600035600160e060020a031916610e1f565b610f24565b60008054600160a060020a031916600160a060020a03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a25b5b50565b600154600160a060020a031681565b6040805134808252602082018381523693830184905260043593602435938493869333600160a060020a03169360008035600160e060020a031916949092606082018484808284376040519201829003965090945050505050a4610b846103e033600035600160e060020a031916610e1f565b610f24565b6001805474ff0000000000000000000000000000000000000000191690555b5b5b5050565b6040805134808252602082018381523693830184905260043593602435938493869333600160a060020a03169360008035600160e060020a031916949092606082018484808284376040519201829003965090945050505050a4610c216103e033600035600160e060020a031916610e1f565b610f24565b600160a060020a031984161515610c385760006000fd5b600160a060020a03831615801590610c775750600160a060020a03831660009081526004602052604090205460a060020a02600160a060020a03191615155b15610c825760006000fd5b600160a060020a03198416600090815260036020908152604080832054600160a060020a039081168452600490925290912080546bffffffffffffffffffffffff19169055831615610d0257600160a060020a038316600090815260046020526040902080546bffffffffffffffffffffffff191660a060020a86041790555b600160a060020a031984811660009081526003602052604090208054909116600160a060020a0385161790555b5b5b50505050565b600054600160a060020a031681565b610433816000610ba9565b5b50565b6040805134808252602082018381523693830184905260043593602435938493869333600160a060020a03169360008035600160e060020a031916949092606082018484808284376040519201829003965090945050505050a4610dcd6103e033600035600160e060020a031916610e1f565b610f24565b600160a060020a031983161515610de45760006000fd5b600580546bffffffffffffffffffffffff191660a060020a85041790555b5b5b505050565b600554606060020a90046001606060020a031681565b600030600160a060020a031683600160a060020a03161415610e4357506001610f1b565b600154600160a060020a0384811691161415610e6157506001610f1b565b600054600160a060020a03161515610e7b57506000610f1b565b6000805460408051602090810184905281517fb7009613000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301523081166024830152600160e060020a0319881660448301529251929093169363b70096139360648082019492918390030190829087803b1515610eff57fe5b60325a03f11515610f0c57fe5b5050604051519150610f1b9050565b5b5b5b92915050565b8015156104335760006000fd5b5b50565b8082016001608060020a038084169082161015610f1b57fe5b5b92915050565b6000610f9f6001608060020a0383166002815b046001608060020a0316670de0b6b3a76400006001608060020a0316866001608060020a03160201811515610f9957fe5b04610fa8565b90505b92915050565b806001608060020a0381168114610fbb57fe5b5b919050565b604080516020810190915260008152905600a165627a7a7230582061003742bb06deee80a56182105f9e38e91c997582675c5891203042dcfea2c70029") as any;
    }
}
export var MedianizerAbi = abi;