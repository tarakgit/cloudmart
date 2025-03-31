import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DynamoDBStreamsServiceException as __BaseException } from "./DynamoDBStreamsServiceException";
export interface DescribeStreamInput {
  StreamArn: string | undefined;
  Limit?: number | undefined;
  ExclusiveStartShardId?: string | undefined;
}
export declare const KeyType: {
  readonly HASH: "HASH";
  readonly RANGE: "RANGE";
};
export type KeyType = (typeof KeyType)[keyof typeof KeyType];
export interface KeySchemaElement {
  AttributeName: string | undefined;
  KeyType: KeyType | undefined;
}
export interface SequenceNumberRange {
  StartingSequenceNumber?: string | undefined;
  EndingSequenceNumber?: string | undefined;
}
export interface Shard {
  ShardId?: string | undefined;
  SequenceNumberRange?: SequenceNumberRange | undefined;
  ParentShardId?: string | undefined;
}
export declare const StreamStatus: {
  readonly DISABLED: "DISABLED";
  readonly DISABLING: "DISABLING";
  readonly ENABLED: "ENABLED";
  readonly ENABLING: "ENABLING";
};
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];
export declare const StreamViewType: {
  readonly KEYS_ONLY: "KEYS_ONLY";
  readonly NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES";
  readonly NEW_IMAGE: "NEW_IMAGE";
  readonly OLD_IMAGE: "OLD_IMAGE";
};
export type StreamViewType =
  (typeof StreamViewType)[keyof typeof StreamViewType];
export interface StreamDescription {
  StreamArn?: string | undefined;
  StreamLabel?: string | undefined;
  StreamStatus?: StreamStatus | undefined;
  StreamViewType?: StreamViewType | undefined;
  CreationRequestDateTime?: Date | undefined;
  TableName?: string | undefined;
  KeySchema?: KeySchemaElement[] | undefined;
  Shards?: Shard[] | undefined;
  LastEvaluatedShardId?: string | undefined;
}
export interface DescribeStreamOutput {
  StreamDescription?: StreamDescription | undefined;
}
export declare class InternalServerError extends __BaseException {
  readonly name: "InternalServerError";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<InternalServerError, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class ExpiredIteratorException extends __BaseException {
  readonly name: "ExpiredIteratorException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ExpiredIteratorException, __BaseException>
  );
}
export interface GetRecordsInput {
  ShardIterator: string | undefined;
  Limit?: number | undefined;
}
export declare const OperationType: {
  readonly INSERT: "INSERT";
  readonly MODIFY: "MODIFY";
  readonly REMOVE: "REMOVE";
};
export type OperationType = (typeof OperationType)[keyof typeof OperationType];
export interface Identity {
  PrincipalId?: string | undefined;
  Type?: string | undefined;
}
export declare class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<LimitExceededException, __BaseException>
  );
}
export declare class TrimmedDataAccessException extends __BaseException {
  readonly name: "TrimmedDataAccessException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<TrimmedDataAccessException, __BaseException>
  );
}
export declare const ShardIteratorType: {
  readonly AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER";
  readonly AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER";
  readonly LATEST: "LATEST";
  readonly TRIM_HORIZON: "TRIM_HORIZON";
};
export type ShardIteratorType =
  (typeof ShardIteratorType)[keyof typeof ShardIteratorType];
export interface GetShardIteratorInput {
  StreamArn: string | undefined;
  ShardId: string | undefined;
  ShardIteratorType: ShardIteratorType | undefined;
  SequenceNumber?: string | undefined;
}
export interface GetShardIteratorOutput {
  ShardIterator?: string | undefined;
}
export interface ListStreamsInput {
  TableName?: string | undefined;
  Limit?: number | undefined;
  ExclusiveStartStreamArn?: string | undefined;
}
export interface _Stream {
  StreamArn?: string | undefined;
  TableName?: string | undefined;
  StreamLabel?: string | undefined;
}
export interface ListStreamsOutput {
  Streams?: _Stream[] | undefined;
  LastEvaluatedStreamArn?: string | undefined;
}
export type AttributeValue =
  | AttributeValue.BMember
  | AttributeValue.BOOLMember
  | AttributeValue.BSMember
  | AttributeValue.LMember
  | AttributeValue.MMember
  | AttributeValue.NMember
  | AttributeValue.NSMember
  | AttributeValue.NULLMember
  | AttributeValue.SMember
  | AttributeValue.SSMember
  | AttributeValue.$UnknownMember;
export declare namespace AttributeValue {
  interface SMember {
    S: string;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface NMember {
    S?: never;
    N: string;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface BMember {
    S?: never;
    N?: never;
    B: Uint8Array;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface SSMember {
    S?: never;
    N?: never;
    B?: never;
    SS: string[];
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface NSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS: string[];
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface BSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS: Uint8Array[];
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface MMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M: Record<string, AttributeValue>;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface LMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L: AttributeValue[];
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }
  interface NULLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL: boolean;
    BOOL?: never;
    $unknown?: never;
  }
  interface BOOLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL: boolean;
    $unknown?: never;
  }
  interface $UnknownMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    S: (value: string) => T;
    N: (value: string) => T;
    B: (value: Uint8Array) => T;
    SS: (value: string[]) => T;
    NS: (value: string[]) => T;
    BS: (value: Uint8Array[]) => T;
    M: (value: Record<string, AttributeValue>) => T;
    L: (value: AttributeValue[]) => T;
    NULL: (value: boolean) => T;
    BOOL: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: AttributeValue, visitor: Visitor<T>) => T;
}
export interface StreamRecord {
  ApproximateCreationDateTime?: Date | undefined;
  Keys?: Record<string, AttributeValue> | undefined;
  NewImage?: Record<string, AttributeValue> | undefined;
  OldImage?: Record<string, AttributeValue> | undefined;
  SequenceNumber?: string | undefined;
  SizeBytes?: number | undefined;
  StreamViewType?: StreamViewType | undefined;
}
export interface _Record {
  eventID?: string | undefined;
  eventName?: OperationType | undefined;
  eventVersion?: string | undefined;
  eventSource?: string | undefined;
  awsRegion?: string | undefined;
  dynamodb?: StreamRecord | undefined;
  userIdentity?: Identity | undefined;
}
export interface GetRecordsOutput {
  Records?: _Record[] | undefined;
  NextShardIterator?: string | undefined;
}
