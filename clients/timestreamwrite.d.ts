import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class TimestreamWrite extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: TimestreamWrite.Types.ClientConfiguration)
  config: Config & TimestreamWrite.Types.ClientConfiguration;
  /**
   * Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. Refer to AWS managed KMS keys for more info. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  createDatabase(params: TimestreamWrite.Types.CreateDatabaseRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.CreateDatabaseResponse) => void): Request<TimestreamWrite.Types.CreateDatabaseResponse, AWSError>;
  /**
   * Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. Refer to AWS managed KMS keys for more info. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  createDatabase(callback?: (err: AWSError, data: TimestreamWrite.Types.CreateDatabaseResponse) => void): Request<TimestreamWrite.Types.CreateDatabaseResponse, AWSError>;
  /**
   * The CreateTable operation adds a new table to your account. In an AWS account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions. While creating the table, you must specify the table name, database name, and the retention duration for the magnetic and memory store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  createTable(params: TimestreamWrite.Types.CreateTableRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.CreateTableResponse) => void): Request<TimestreamWrite.Types.CreateTableResponse, AWSError>;
  /**
   * The CreateTable operation adds a new table to your account. In an AWS account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions. While creating the table, you must specify the table name, database name, and the retention duration for the magnetic and memory store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  createTable(callback?: (err: AWSError, data: TimestreamWrite.Types.CreateTableResponse) => void): Request<TimestreamWrite.Types.CreateTableResponse, AWSError>;
  /**
   * Deletes a given Timestream database. This is an irreversible operation. After a database is deleted, the time series data from its tables cannot be recovered. 
   */
  deleteDatabase(params: TimestreamWrite.Types.DeleteDatabaseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a given Timestream database. This is an irreversible operation. After a database is deleted, the time series data from its tables cannot be recovered. 
   */
  deleteDatabase(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time series data stored in the table cannot be recovered. 
   */
  deleteTable(params: TimestreamWrite.Types.DeleteTableRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time series data stored in the table cannot be recovered. 
   */
  deleteTable(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide.
   */
  describeDatabase(params: TimestreamWrite.Types.DescribeDatabaseRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeDatabaseResponse) => void): Request<TimestreamWrite.Types.DescribeDatabaseResponse, AWSError>;
  /**
   * Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide.
   */
  describeDatabase(callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeDatabaseResponse) => void): Request<TimestreamWrite.Types.DescribeDatabaseResponse, AWSError>;
  /**
   * 
   */
  describeEndpoints(params: TimestreamWrite.Types.DescribeEndpointsRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeEndpointsResponse) => void): Request<TimestreamWrite.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * 
   */
  describeEndpoints(callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeEndpointsResponse) => void): Request<TimestreamWrite.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  describeTable(params: TimestreamWrite.Types.DescribeTableRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeTableResponse) => void): Request<TimestreamWrite.Types.DescribeTableResponse, AWSError>;
  /**
   * Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  describeTable(callback?: (err: AWSError, data: TimestreamWrite.Types.DescribeTableResponse) => void): Request<TimestreamWrite.Types.DescribeTableResponse, AWSError>;
  /**
   * Returns a list of your Timestream databases. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  listDatabases(params: TimestreamWrite.Types.ListDatabasesRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.ListDatabasesResponse) => void): Request<TimestreamWrite.Types.ListDatabasesResponse, AWSError>;
  /**
   * Returns a list of your Timestream databases. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  listDatabases(callback?: (err: AWSError, data: TimestreamWrite.Types.ListDatabasesResponse) => void): Request<TimestreamWrite.Types.ListDatabasesResponse, AWSError>;
  /**
   * A list of table names. 
   */
  listTables(params: TimestreamWrite.Types.ListTablesRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.ListTablesResponse) => void): Request<TimestreamWrite.Types.ListTablesResponse, AWSError>;
  /**
   * A list of table names. 
   */
  listTables(callback?: (err: AWSError, data: TimestreamWrite.Types.ListTablesResponse) => void): Request<TimestreamWrite.Types.ListTablesResponse, AWSError>;
  /**
   *  List all tags on a Timestream resource. 
   */
  listTagsForResource(params: TimestreamWrite.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.ListTagsForResourceResponse) => void): Request<TimestreamWrite.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  List all tags on a Timestream resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: TimestreamWrite.Types.ListTagsForResourceResponse) => void): Request<TimestreamWrite.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
   */
  tagResource(params: TimestreamWrite.Types.TagResourceRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.TagResourceResponse) => void): Request<TimestreamWrite.Types.TagResourceResponse, AWSError>;
  /**
   *  Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
   */
  tagResource(callback?: (err: AWSError, data: TimestreamWrite.Types.TagResourceResponse) => void): Request<TimestreamWrite.Types.TagResourceResponse, AWSError>;
  /**
   *  Removes the association of tags from a Timestream resource. 
   */
  untagResource(params: TimestreamWrite.Types.UntagResourceRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.UntagResourceResponse) => void): Request<TimestreamWrite.Types.UntagResourceResponse, AWSError>;
  /**
   *  Removes the association of tags from a Timestream resource. 
   */
  untagResource(callback?: (err: AWSError, data: TimestreamWrite.Types.UntagResourceResponse) => void): Request<TimestreamWrite.Types.UntagResourceResponse, AWSError>;
  /**
   *  Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (KmsKeyId). If there are any concurrent UpdateDatabase requests, first writer wins. 
   */
  updateDatabase(params: TimestreamWrite.Types.UpdateDatabaseRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.UpdateDatabaseResponse) => void): Request<TimestreamWrite.Types.UpdateDatabaseResponse, AWSError>;
  /**
   *  Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (KmsKeyId). If there are any concurrent UpdateDatabase requests, first writer wins. 
   */
  updateDatabase(callback?: (err: AWSError, data: TimestreamWrite.Types.UpdateDatabaseResponse) => void): Request<TimestreamWrite.Types.UpdateDatabaseResponse, AWSError>;
  /**
   * Modifies attributes such as the retention duration of the memory store and magnetic store for your Timestream table. Note that if you are using UpdateTable to upgrade the retention period of the memory or magnetic store, the retention change takes effective from that point onwards. For example, if the retention period of the memory store was set to 2 hours and then changed to 24 hours through this API, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store.  Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide.
   */
  updateTable(params: TimestreamWrite.Types.UpdateTableRequest, callback?: (err: AWSError, data: TimestreamWrite.Types.UpdateTableResponse) => void): Request<TimestreamWrite.Types.UpdateTableResponse, AWSError>;
  /**
   * Modifies attributes such as the retention duration of the memory store and magnetic store for your Timestream table. Note that if you are using UpdateTable to upgrade the retention period of the memory or magnetic store, the retention change takes effective from that point onwards. For example, if the retention period of the memory store was set to 2 hours and then changed to 24 hours through this API, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store.  Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide.
   */
  updateTable(callback?: (err: AWSError, data: TimestreamWrite.Types.UpdateTableResponse) => void): Request<TimestreamWrite.Types.UpdateTableResponse, AWSError>;
  /**
   * The WriteRecords operation enables you to write your time series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you with a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream support eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  writeRecords(params: TimestreamWrite.Types.WriteRecordsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The WriteRecords operation enables you to write your time series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you with a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream support eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. For more information, see ts-limits in the Timestream Developer Guide. 
   */
  writeRecords(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace TimestreamWrite {
  export type AmazonResourceName = string;
  export interface CreateDatabaseRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
    /**
     * The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. Refer to AWS managed KMS keys for more info.
     */
    KmsKeyId?: StringValue2048;
    /**
     *  A list of key-value pairs to label the table. 
     */
    Tags?: TagList;
  }
  export interface CreateDatabaseResponse {
    /**
     * The newly created Timestream database.
     */
    Database?: Database;
  }
  export interface CreateTableRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
    /**
     * The name of the Timestream table.
     */
    TableName: ResourceName;
    /**
     * The duration for which your time series data must be stored in the memory store and the magnetic store.
     */
    RetentionProperties?: RetentionProperties;
    /**
     *  A list of key-value pairs to label the table. 
     */
    Tags?: TagList;
  }
  export interface CreateTableResponse {
    /**
     * The newly created Timestream table.
     */
    Table?: Table;
  }
  export interface Database {
    /**
     * The Amazon Resource Name that uniquely identifies this database.
     */
    Arn?: String;
    /**
     * The name of the Timestream database.
     */
    DatabaseName?: ResourceName;
    /**
     * The total number of tables found within a Timestream database. 
     */
    TableCount?: Long;
    /**
     * The identifier of the KMS key used to encrypt the data stored in the database.
     */
    KmsKeyId?: StringValue2048;
    /**
     * The time when the database was created, calculated from the Unix epoch time.
     */
    CreationTime?: _Date;
    /**
     *  The last time that this database was updated. 
     */
    LastUpdatedTime?: _Date;
  }
  export type DatabaseList = Database[];
  export type _Date = Date;
  export interface DeleteDatabaseRequest {
    /**
     * The name of the Timestream database to be deleted.
     */
    DatabaseName: ResourceName;
  }
  export interface DeleteTableRequest {
    /**
     * The name of the database where the Timestream database is to be deleted.
     */
    DatabaseName: ResourceName;
    /**
     * The name of the Timestream table to be deleted.
     */
    TableName: ResourceName;
  }
  export interface DescribeDatabaseRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
  }
  export interface DescribeDatabaseResponse {
    /**
     * The name of the Timestream table.
     */
    Database?: Database;
  }
  export interface DescribeEndpointsRequest {
  }
  export interface DescribeEndpointsResponse {
    Endpoints: Endpoints;
  }
  export interface DescribeTableRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
    /**
     * The name of the Timestream table.
     */
    TableName: ResourceName;
  }
  export interface DescribeTableResponse {
    /**
     * The Timestream table.
     */
    Table?: Table;
  }
  export interface Dimension {
    /**
     *  Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. 
     */
    Name: StringValue256;
    /**
     * The value of the dimension.
     */
    Value: StringValue256;
    /**
     * The data type of the dimension for the time series data point.
     */
    DimensionValueType?: DimensionValueType;
  }
  export type DimensionValueType = "VARCHAR"|string;
  export type Dimensions = Dimension[];
  export interface Endpoint {
    Address: String;
    CachePeriodInMinutes: Long;
  }
  export type Endpoints = Endpoint[];
  export interface ListDatabasesRequest {
    /**
     * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    NextToken?: String;
    /**
     * The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    MaxResults?: PaginationLimit;
  }
  export interface ListDatabasesResponse {
    /**
     * A list of database names.
     */
    Databases?: DatabaseList;
    /**
     * The pagination token. This parameter is returned when the response is truncated.
     */
    NextToken?: String;
  }
  export interface ListTablesRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName?: ResourceName;
    /**
     * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    NextToken?: String;
    /**
     * The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    MaxResults?: PaginationLimit;
  }
  export interface ListTablesResponse {
    /**
     * A list of table names.
     */
    Tables?: TableList;
    /**
     * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN). 
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     *  The tags currently associated with the Timestream resource. 
     */
    Tags?: TagList;
  }
  export type Long = number;
  export type MagneticStoreRetentionPeriodInDays = number;
  export type MeasureValueType = "DOUBLE"|"BIGINT"|"VARCHAR"|"BOOLEAN"|string;
  export type MemoryStoreRetentionPeriodInHours = number;
  export type PaginationLimit = number;
  export interface Record {
    /**
     * Contains the list of dimensions for time series data points.
     */
    Dimensions?: Dimensions;
    /**
     * Measure represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. 
     */
    MeasureName?: StringValue256;
    /**
     *  Contains the measure value for the time series data point. 
     */
    MeasureValue?: StringValue2048;
    /**
     *  Contains the data type of the measure value for the time series data point. 
     */
    MeasureValueType?: MeasureValueType;
    /**
     *  Contains the time at which the measure value for the data point was collected. 
     */
    Time?: StringValue256;
    /**
     *  The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds or other supported values. 
     */
    TimeUnit?: TimeUnit;
  }
  export type Records = Record[];
  export type ResourceName = string;
  export interface RetentionProperties {
    /**
     * The duration for which data must be stored in the memory store. 
     */
    MemoryStoreRetentionPeriodInHours: MemoryStoreRetentionPeriodInHours;
    /**
     * The duration for which data must be stored in the magnetic store. 
     */
    MagneticStoreRetentionPeriodInDays: MagneticStoreRetentionPeriodInDays;
  }
  export type String = string;
  export type StringValue2048 = string;
  export type StringValue256 = string;
  export interface Table {
    /**
     * The Amazon Resource Name that uniquely identifies this table.
     */
    Arn?: String;
    /**
     * The name of the Timestream table.
     */
    TableName?: ResourceName;
    /**
     * The name of the Timestream database that contains this table.
     */
    DatabaseName?: ResourceName;
    /**
     * The current state of the table:    DELETING - The table is being deleted.    ACTIVE - The table is ready for use.  
     */
    TableStatus?: TableStatus;
    /**
     * The retention duration for the memory store and magnetic store.
     */
    RetentionProperties?: RetentionProperties;
    /**
     * The time when the Timestream table was created. 
     */
    CreationTime?: _Date;
    /**
     * The time when the Timestream table was last updated.
     */
    LastUpdatedTime?: _Date;
  }
  export type TableList = Table[];
  export type TableStatus = "ACTIVE"|"DELETING"|string;
  export interface Tag {
    /**
     *  The key of the tag. Tag keys are case sensitive. 
     */
    Key: TagKey;
    /**
     *  The value of the tag. Tag values are case-sensitive and can be null. 
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     *  Identifies the Timestream resource to which tags should be added. This value is an Amazon Resource Name (ARN). 
     */
    ResourceARN: AmazonResourceName;
    /**
     *  The tags to be assigned to the Timestream resource. 
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TimeUnit = "MILLISECONDS"|"SECONDS"|"MICROSECONDS"|"NANOSECONDS"|string;
  export interface UntagResourceRequest {
    /**
     *  The Timestream resource that the tags will be removed from. This value is an Amazon Resource Name (ARN). 
     */
    ResourceARN: AmazonResourceName;
    /**
     *  A list of tags keys. Existing tags of the resource whose keys are members of this list will be removed from the Timestream resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDatabaseRequest {
    /**
     *  The name of the database. 
     */
    DatabaseName: ResourceName;
    /**
     *  The identifier of the new KMS key (KmsKeyId) to be used to encrypt the data stored in the database. If the KmsKeyId currently registered with the database is the same as the KmsKeyId in the request, there will not be any update.  You can specify the KmsKeyId using any of the following:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias   
     */
    KmsKeyId: StringValue2048;
  }
  export interface UpdateDatabaseResponse {
    Database?: Database;
  }
  export interface UpdateTableRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
    /**
     * The name of the Timesream table.
     */
    TableName: ResourceName;
    /**
     * The retention duration of the memory store and the magnetic store.
     */
    RetentionProperties: RetentionProperties;
  }
  export interface UpdateTableResponse {
    /**
     * The updated Timestream table.
     */
    Table?: Table;
  }
  export interface WriteRecordsRequest {
    /**
     * The name of the Timestream database.
     */
    DatabaseName: ResourceName;
    /**
     * The name of the Timesream table.
     */
    TableName: ResourceName;
    /**
     * A record containing the common measure and dimension attributes shared across all the records in the request. The measure and dimension attributes specified in here will be merged with the measure and dimension attributes in the records object when the data is written into Timestream. 
     */
    CommonAttributes?: Record;
    /**
     * An array of records containing the unique dimension and measure attributes for each time series data point. 
     */
    Records: Records;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the TimestreamWrite client.
   */
  export import Types = TimestreamWrite;
}
export = TimestreamWrite;
