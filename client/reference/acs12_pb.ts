//*
// AElf Standards ACS12(User Contract Standard)
//
// Used to manage user contract.

// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file reference/acs12.proto (package acs12, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Specified method fee for user contract.
 *
 * @generated from message acs12.UserContractMethodFees
 */
export class UserContractMethodFees extends Message<UserContractMethodFees> {
  /**
   * List of fees to be charged.
   *
   * @generated from field: repeated acs12.UserContractMethodFee fees = 2;
   */
  fees: UserContractMethodFee[] = [];

  /**
   * Optional based on the implementation of SetConfiguration method.
   *
   * @generated from field: bool is_size_fee_free = 3;
   */
  isSizeFeeFree = false;

  constructor(data?: PartialMessage<UserContractMethodFees>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "acs12.UserContractMethodFees";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "fees", kind: "message", T: UserContractMethodFee, repeated: true },
    { no: 3, name: "is_size_fee_free", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserContractMethodFees {
    return new UserContractMethodFees().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserContractMethodFees {
    return new UserContractMethodFees().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserContractMethodFees {
    return new UserContractMethodFees().fromJsonString(jsonString, options);
  }

  static equals(a: UserContractMethodFees | PlainMessage<UserContractMethodFees> | undefined, b: UserContractMethodFees | PlainMessage<UserContractMethodFees> | undefined): boolean {
    return proto3.util.equals(UserContractMethodFees, a, b);
  }
}

/**
 * @generated from message acs12.UserContractMethodFee
 */
export class UserContractMethodFee extends Message<UserContractMethodFee> {
  /**
   * The token symbol of the method fee.
   *
   * @generated from field: string symbol = 1;
   */
  symbol = "";

  /**
   * The amount of fees to be charged.
   *
   * @generated from field: int64 basic_fee = 2;
   */
  basicFee = protoInt64.zero;

  constructor(data?: PartialMessage<UserContractMethodFee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "acs12.UserContractMethodFee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "basic_fee", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserContractMethodFee {
    return new UserContractMethodFee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserContractMethodFee {
    return new UserContractMethodFee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserContractMethodFee {
    return new UserContractMethodFee().fromJsonString(jsonString, options);
  }

  static equals(a: UserContractMethodFee | PlainMessage<UserContractMethodFee> | undefined, b: UserContractMethodFee | PlainMessage<UserContractMethodFee> | undefined): boolean {
    return proto3.util.equals(UserContractMethodFee, a, b);
  }
}

