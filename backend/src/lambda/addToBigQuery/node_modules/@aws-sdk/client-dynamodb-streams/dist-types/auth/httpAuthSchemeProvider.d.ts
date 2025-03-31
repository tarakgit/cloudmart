import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { DynamoDBStreamsClientResolvedConfig } from "../DynamoDBStreamsClient";
/**
 * @internal
 */
export interface DynamoDBStreamsHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface DynamoDBStreamsHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<DynamoDBStreamsClientResolvedConfig, HandlerExecutionContext, DynamoDBStreamsHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultDynamoDBStreamsHttpAuthSchemeParametersProvider: (config: DynamoDBStreamsClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<DynamoDBStreamsHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface DynamoDBStreamsHttpAuthSchemeProvider extends HttpAuthSchemeProvider<DynamoDBStreamsHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultDynamoDBStreamsHttpAuthSchemeProvider: DynamoDBStreamsHttpAuthSchemeProvider;
/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: DynamoDBStreamsHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: DynamoDBStreamsHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
