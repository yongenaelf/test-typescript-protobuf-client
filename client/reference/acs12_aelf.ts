//*
// AElf Standards ACS12(User Contract Standard)
//
// Used to manage user contract.

// @generated by protoc-gen-aelf-es v1.0.0 with parameter "target=ts"
// @generated from file reference/acs12.proto (package acs12, syntax proto3)
/* eslint-disable */
// @ts-nocheck


type SendMethodResponse = { TransactionId: string; };

type SendMethod = <P>(methodName: string, p: P) => Promise<SendMethodResponse>;

type ViewMethod = <P, R>(methodName: string, p: P) => Promise<R>;

/**
 * @generated from service acs12.UserContract
 */
export class UserContractClient {

  private callSendMethod: SendMethod;

  private callViewMethod: ViewMethod;

  constructor(callSendMethod: SendMethod, callViewMethod: ViewMethod) {
    this.callSendMethod = callSendMethod;
    this.callViewMethod = callViewMethod;
  }
}