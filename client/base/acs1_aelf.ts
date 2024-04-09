//*
// AElf Standards ACS1(Transaction Fee Standard)
//
// Used to manage the transaction fee.

// @generated by protoc-gen-aelf-es v1.0.0 with parameter "target=ts"
// @generated from file base/acs1.proto (package acs1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodFees } from "./acs1_pb.js";
import { AuthorityInfo } from "../message/authority_info_pb.js";
import { Empty, StringValue } from "@bufbuild/protobuf";


type SendMethodResponse = { TransactionId: string; };

type SendMethod = <P>(methodName: string, p: P) => Promise<SendMethodResponse>;

type ViewMethod = <P, R>(methodName: string, p: P) => Promise<R>;

/**
 * @generated from service acs1.MethodFeeProviderContract
 */
export class MethodFeeProviderContractClient {

  private callSendMethod: SendMethod;

  private callViewMethod: ViewMethod;

  constructor(callSendMethod: SendMethod, callViewMethod: ViewMethod) {
    this.callSendMethod = callSendMethod;
    this.callViewMethod = callViewMethod;
  }

    /**
     * Set the method fees for the specified method. Note that this will override all fees of the method.
     *
     * @generated from rpc acs1.MethodFeeProviderContract.SetMethodFee
     */
  async SetMethodFee(request: MethodFees): Promise<SendMethodResponse> {
    // this is a send method
    return await this.callSendMethod<MethodFees>('SetMethodFee', request);
    }

    /**
     * Change the method fee controller, the default is parliament and default organization.
     *
     * @generated from rpc acs1.MethodFeeProviderContract.ChangeMethodFeeController
     */
  async ChangeMethodFeeController(request: AuthorityInfo): Promise<SendMethodResponse> {
    // this is a send method
    return await this.callSendMethod<AuthorityInfo>('ChangeMethodFeeController', request);
    }

    /**
     * Query method fee information by method name.
     *
     * @generated from rpc acs1.MethodFeeProviderContract.GetMethodFee
     */
  async GetMethodFee(request: StringValue): Promise<MethodFees> {
    // this is a view method
    return await this.callViewMethod<StringValue, MethodFees>('GetMethodFee', request);
    }

    /**
     * Query the method fee controller.
     *
     * @generated from rpc acs1.MethodFeeProviderContract.GetMethodFeeController
     */
  async GetMethodFeeController(request: Empty): Promise<AuthorityInfo> {
    // this is a view method
    return await this.callViewMethod<Empty, AuthorityInfo>('GetMethodFeeController', request);
    }
}
