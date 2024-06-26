// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file reference/acs6.proto (package acs6, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message acs6.RandomBytesGenerated
 */
export class RandomBytesGenerated extends Message<RandomBytesGenerated> {
  /**
   * @generated from field: bytes argument = 1;
   */
  argument = new Uint8Array(0);

  /**
   * @generated from field: bytes random_bytes = 2;
   */
  randomBytes = new Uint8Array(0);

  constructor(data?: PartialMessage<RandomBytesGenerated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "acs6.RandomBytesGenerated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "argument", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "random_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RandomBytesGenerated {
    return new RandomBytesGenerated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RandomBytesGenerated {
    return new RandomBytesGenerated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RandomBytesGenerated {
    return new RandomBytesGenerated().fromJsonString(jsonString, options);
  }

  static equals(a: RandomBytesGenerated | PlainMessage<RandomBytesGenerated> | undefined, b: RandomBytesGenerated | PlainMessage<RandomBytesGenerated> | undefined): boolean {
    return proto3.util.equals(RandomBytesGenerated, a, b);
  }
}

