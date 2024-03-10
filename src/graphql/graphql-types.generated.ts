export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Refers to a parent/main topic within which multiple sub-topics (subjects) can be managed, facilitating the organization and exploration of books, templates, and clips. */
export type Channel = {
  __typename?: 'channel';
  active: Scalars['Boolean']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  channelTypeId: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  /** An object relationship */
  organization: Organization;
  organizationId: Scalars['Int']['output'];
  /** An array relationship */
  subjects: Array<Subject>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** Refers to a parent/main topic within which multiple sub-topics (subjects) can be managed, facilitating the organization and exploration of books, templates, and clips. */
export type ChannelSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** order by aggregate values of table "channel" */
export type Channel_Aggregate_Order_By = {
  avg?: InputMaybe<Channel_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Channel_Max_Order_By>;
  min?: InputMaybe<Channel_Min_Order_By>;
  stddev?: InputMaybe<Channel_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Channel_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Channel_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Channel_Sum_Order_By>;
  var_pop?: InputMaybe<Channel_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Channel_Var_Samp_Order_By>;
  variance?: InputMaybe<Channel_Variance_Order_By>;
};

/** order by avg() on columns of table "channel" */
export type Channel_Avg_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Bool_Exp>>;
  _not?: InputMaybe<Channel_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  channelTypeId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  subjects?: InputMaybe<Subject_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "channel" */
export type Channel_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "channel" */
export type Channel_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "channel". */
export type Channel_Order_By = {
  active?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelTypeId = 'channelTypeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** order by stddev() on columns of table "channel" */
export type Channel_Stddev_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "channel" */
export type Channel_Stddev_Pop_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "channel" */
export type Channel_Stddev_Samp_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "channel" */
export type Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelTypeId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "channel" */
export type Channel_Sum_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "channel" */
export type Channel_Var_Pop_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "channel" */
export type Channel_Var_Samp_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "channel" */
export type Channel_Variance_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export enum Font_Family_Enum {
  /** https://fonts.google.com/specimen/ABeeZee */
  Abeezee = 'ABEEZEE',
  /** https://fonts.google.com/specimen/Roboto */
  Roboto = 'ROBOTO',
  /** https://fonts.google.com/specimen/Satisfy */
  Satisfy = 'SATISFY'
}

/** Boolean expression to compare columns of type "font_family_enum". All fields are combined with logical 'AND'. */
export type Font_Family_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Font_Family_Enum>;
  _in?: InputMaybe<Array<Font_Family_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Font_Family_Enum>;
  _nin?: InputMaybe<Array<Font_Family_Enum>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Recustom Organization */
export type Organization = {
  __typename?: 'organization';
  bio: Scalars['String']['output'];
  /** An array relationship */
  channels: Array<Channel>;
  createdAt: Scalars['timestamptz']['output'];
  emailAddress: Scalars['String']['output'];
  iamOrgId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  organization_domains: Array<Organization_Domain>;
  /** An object relationship */
  organization_theme?: Maybe<Organization_Theme>;
  phoneNumber: Scalars['String']['output'];
  subdomain: Scalars['String']['output'];
  /** An array relationship */
  subjects: Array<Subject>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** Recustom Organization */
export type OrganizationChannelsArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationOrganization_DomainsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  channels?: InputMaybe<Channel_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  emailAddress?: InputMaybe<String_Comparison_Exp>;
  iamOrgId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  logoUrl?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization_domains?: InputMaybe<Organization_Domain_Bool_Exp>;
  organization_theme?: InputMaybe<Organization_Theme_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  subjects?: InputMaybe<Subject_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Custom domains for various organizations */
export type Organization_Domain = {
  __typename?: 'organization_domain';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organization: Organization;
  organizationId: Scalars['Int']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "organization_domain" */
export type Organization_Domain_Aggregate_Order_By = {
  avg?: InputMaybe<Organization_Domain_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Domain_Max_Order_By>;
  min?: InputMaybe<Organization_Domain_Min_Order_By>;
  stddev?: InputMaybe<Organization_Domain_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organization_Domain_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organization_Domain_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organization_Domain_Sum_Order_By>;
  var_pop?: InputMaybe<Organization_Domain_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organization_Domain_Var_Samp_Order_By>;
  variance?: InputMaybe<Organization_Domain_Variance_Order_By>;
};

/** order by avg() on columns of table "organization_domain" */
export type Organization_Domain_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_domain". All fields are combined with a logical 'AND'. */
export type Organization_Domain_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Domain_Bool_Exp>>;
  _not?: InputMaybe<Organization_Domain_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Domain_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "organization_domain" */
export type Organization_Domain_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "organization_domain" */
export type Organization_Domain_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "organization_domain". */
export type Organization_Domain_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "organization_domain" */
export enum Organization_Domain_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** order by stddev() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organization_domain" */
export type Organization_Domain_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Domain_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Domain_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "organization_domain" */
export type Organization_Domain_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "organization_domain" */
export type Organization_Domain_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "organization_domain" */
export type Organization_Domain_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "organization_domain" */
export type Organization_Domain_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  bio?: InputMaybe<Order_By>;
  channels_aggregate?: InputMaybe<Channel_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  iamOrgId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logoUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_domains_aggregate?: InputMaybe<Organization_Domain_Aggregate_Order_By>;
  organization_theme?: InputMaybe<Organization_Theme_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  IamOrgId = 'iamOrgId',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  iamOrgId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Theming for the organization websites */
export type Organization_Theme = {
  __typename?: 'organization_theme';
  buttonRadius?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  errorColor?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Font_Family_Enum>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  infoColor?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['Int']['output'];
  primaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColor?: Maybe<Scalars['String']['output']>;
  successColor?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  warningColor?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "organization_theme". All fields are combined with a logical 'AND'. */
export type Organization_Theme_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Theme_Bool_Exp>>;
  _not?: InputMaybe<Organization_Theme_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Theme_Bool_Exp>>;
  buttonRadius?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  errorColor?: InputMaybe<String_Comparison_Exp>;
  fontFamily?: InputMaybe<Font_Family_Enum_Comparison_Exp>;
  fontSize?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  infoColor?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  primaryColor?: InputMaybe<String_Comparison_Exp>;
  secondaryColor?: InputMaybe<String_Comparison_Exp>;
  successColor?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  warningColor?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "organization_theme". */
export type Organization_Theme_Order_By = {
  buttonRadius?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorColor?: InputMaybe<Order_By>;
  fontFamily?: InputMaybe<Order_By>;
  fontSize?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  infoColor?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  primaryColor?: InputMaybe<Order_By>;
  secondaryColor?: InputMaybe<Order_By>;
  successColor?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  warningColor?: InputMaybe<Order_By>;
};

/** select columns of table "organization_theme" */
export enum Organization_Theme_Select_Column {
  /** column name */
  ButtonRadius = 'buttonRadius',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorColor = 'errorColor',
  /** column name */
  FontFamily = 'fontFamily',
  /** column name */
  FontSize = 'fontSize',
  /** column name */
  Id = 'id',
  /** column name */
  InfoColor = 'infoColor',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryColor = 'primaryColor',
  /** column name */
  SecondaryColor = 'secondaryColor',
  /** column name */
  SuccessColor = 'successColor',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WarningColor = 'warningColor'
}

/** Streaming cursor of the table "organization_theme" */
export type Organization_Theme_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Theme_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Theme_Stream_Cursor_Value_Input = {
  buttonRadius?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  errorColor?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Font_Family_Enum>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  infoColor?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  successColor?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  warningColor?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_domain" */
  organization_domain: Array<Organization_Domain>;
  /** fetch data from the table: "organization_domain" using primary key columns */
  organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** fetch data from the table: "organization_theme" */
  organization_theme: Array<Organization_Theme>;
  /** fetch data from the table: "organization_theme" using primary key columns */
  organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** fetch data from the table: "subject" */
  subject: Array<Subject>;
  /** fetch data from the table: "subject" using primary key columns */
  subject_by_pk?: Maybe<Subject>;
};


export type Query_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganization_DomainArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Query_RootOrganization_Domain_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganization_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Query_RootOrganization_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSubjectArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Query_RootSubject_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** Refers to a sub-topic within the main topic (channel). Each channel can encompass numerous subjects, aiding in the organization and exploration of books, templates, and clips. */
export type Subject = {
  __typename?: 'subject';
  active: Scalars['Boolean']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  channelId: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  organizationId: Scalars['Int']['output'];
  subjectTypeId: Scalars['Int']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "subject" */
export type Subject_Aggregate_Order_By = {
  avg?: InputMaybe<Subject_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subject_Max_Order_By>;
  min?: InputMaybe<Subject_Min_Order_By>;
  stddev?: InputMaybe<Subject_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subject_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subject_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subject_Sum_Order_By>;
  var_pop?: InputMaybe<Subject_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subject_Var_Samp_Order_By>;
  variance?: InputMaybe<Subject_Variance_Order_By>;
};

/** order by avg() on columns of table "subject" */
export type Subject_Avg_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subject". All fields are combined with a logical 'AND'. */
export type Subject_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Bool_Exp>>;
  _not?: InputMaybe<Subject_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  channelId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  subjectTypeId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "subject" */
export type Subject_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "subject" */
export type Subject_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "subject". */
export type Subject_Order_By = {
  active?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "subject" */
export enum Subject_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  SubjectTypeId = 'subjectTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** order by stddev() on columns of table "subject" */
export type Subject_Stddev_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "subject" */
export type Subject_Stddev_Pop_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "subject" */
export type Subject_Stddev_Samp_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subject" */
export type Subject_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjectTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "subject" */
export type Subject_Sum_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "subject" */
export type Subject_Var_Pop_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "subject" */
export type Subject_Var_Samp_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "subject" */
export type Subject_Variance_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table in a streaming manner: "channel" */
  channel_stream: Array<Channel>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_domain" */
  organization_domain: Array<Organization_Domain>;
  /** fetch data from the table: "organization_domain" using primary key columns */
  organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** fetch data from the table in a streaming manner: "organization_domain" */
  organization_domain_stream: Array<Organization_Domain>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "organization_theme" */
  organization_theme: Array<Organization_Theme>;
  /** fetch data from the table: "organization_theme" using primary key columns */
  organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** fetch data from the table in a streaming manner: "organization_theme" */
  organization_theme_stream: Array<Organization_Theme>;
  /** fetch data from the table: "subject" */
  subject: Array<Subject>;
  /** fetch data from the table: "subject" using primary key columns */
  subject_by_pk?: Maybe<Subject>;
  /** fetch data from the table in a streaming manner: "subject" */
  subject_stream: Array<Subject>;
};


export type Subscription_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootChannel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_DomainArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Subscription_RootOrganization_Domain_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_Domain_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Domain_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Subscription_RootOrganization_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_Theme_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Theme_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Subscription_RootSubjectArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Subscription_RootSubject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSubject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subject_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};
