// @generated by protoc-gen-aelf-es v1.0.0 with parameter "target=ts"
// @generated from file aelf/options.proto (package aelf, syntax proto3)
/* eslint-disable */
// @ts-nocheck


type SendMethodResponse = { TransactionId: string; };

type SendMethod = <P>(methodName: string, p: P) => Promise<SendMethodResponse>;

type ViewMethod = <P, R>(methodName: string, p: P) => Promise<R>;

