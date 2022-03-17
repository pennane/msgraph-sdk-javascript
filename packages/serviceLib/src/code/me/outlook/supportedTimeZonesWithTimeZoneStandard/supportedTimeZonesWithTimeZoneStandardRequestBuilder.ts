import {createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue} from './createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedTimeZones method.  */
export class SupportedTimeZonesWithTimeZoneStandardRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SupportedTimeZonesWithTimeZoneStandardRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param TimeZoneStandard Usage: TimeZoneStandard='{TimeZoneStandard}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, timeZoneStandard?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{TimeZoneStandard}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["TimeZoneStandard"] = timeZoneStandard
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function supportedTimeZones
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function supportedTimeZones
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SupportedTimeZonesWithTimeZoneStandardResponse
     */
    public get(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SupportedTimeZonesWithTimeZoneStandardResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<SupportedTimeZonesWithTimeZoneStandardResponse>(requestInfo, createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
