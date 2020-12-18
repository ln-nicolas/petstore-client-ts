/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.5
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { User } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This can only be done by the logged in user.
         * @summary Create user
         * @param {User} body Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (body: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createUser.');
            }
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUsersWithArrayInput: async (body: Array<User>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createUsersWithArrayInput.');
            }
            const localVarPath = `/user/createWithArray`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUsersWithListInput: async (body: Array<User>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createUsersWithListInput.');
            }
            const localVarPath = `/user/createWithList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This can only be done by the logged in user.
         * @summary Delete user
         * @param {string} username The name that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (username: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling deleteUser.');
            }
            const localVarPath = `/user/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get user by user name
         * @param {string} username The name that needs to be fetched. Use user1 for testing. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName: async (username: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling getUserByName.');
            }
            const localVarPath = `/user/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Logs user into the system
         * @param {string} username The user name for login
         * @param {string} password The password for login in clear text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: async (username: string, password: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling loginUser.');
            }
            // verify required parameter 'password' is not null or undefined
            if (password === null || password === undefined) {
                throw new RequiredError('password','Required parameter password was null or undefined when calling loginUser.');
            }
            const localVarPath = `/user/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (username !== undefined) {
                localVarQueryParameter['username'] = username;
            }

            if (password !== undefined) {
                localVarQueryParameter['password'] = password;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Logs out current logged in user session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This can only be done by the logged in user.
         * @summary Updated user
         * @param {User} body Updated user object
         * @param {string} username name that need to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (body: User, username: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateUser.');
            }
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling updateUser.');
            }
            const localVarPath = `/user/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This can only be done by the logged in user.
         * @summary Create user
         * @param {User} body Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(body: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUsersWithArrayInput(body: Array<User>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUsersWithArrayInput(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUsersWithListInput(body: Array<User>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUsersWithListInput(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This can only be done by the logged in user.
         * @summary Delete user
         * @param {string} username The name that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).deleteUser(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get user by user name
         * @param {string} username The name that needs to be fetched. Use user1 for testing. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByName(username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getUserByName(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Logs user into the system
         * @param {string} username The user name for login
         * @param {string} password The password for login in clear text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginUser(username: string, password: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).loginUser(username, password, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Logs out current logged in user session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logoutUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).logoutUser(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This can only be done by the logged in user.
         * @summary Updated user
         * @param {User} body Updated user object
         * @param {string} username name that need to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(body: User, username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updateUser(body, username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This can only be done by the logged in user.
         * @summary Create user
         * @param {User} body Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(body: User, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).createUser(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUsersWithArrayInput(body: Array<User>, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).createUsersWithArrayInput(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates list of users with given input array
         * @param {Array&lt;User&gt;} body List of user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUsersWithListInput(body: Array<User>, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).createUsersWithListInput(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This can only be done by the logged in user.
         * @summary Delete user
         * @param {string} username The name that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(username: string, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).deleteUser(username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get user by user name
         * @param {string} username The name that needs to be fetched. Use user1 for testing. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName(username: string, options?: any): AxiosPromise<User> {
            return UserApiFp(configuration).getUserByName(username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Logs user into the system
         * @param {string} username The user name for login
         * @param {string} password The password for login in clear text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser(username: string, password: string, options?: any): AxiosPromise<string> {
            return UserApiFp(configuration).loginUser(username, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Logs out current logged in user session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutUser(options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).logoutUser(options).then((request) => request(axios, basePath));
        },
        /**
         * This can only be done by the logged in user.
         * @summary Updated user
         * @param {User} body Updated user object
         * @param {string} username name that need to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(body: User, username: string, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).updateUser(body, username, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param {User} body Created user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUser(body: User, options?: any) {
        return UserApiFp(this.configuration).createUser(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Creates list of users with given input array
     * @param {Array&lt;User&gt;} body List of user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUsersWithArrayInput(body: Array<User>, options?: any) {
        return UserApiFp(this.configuration).createUsersWithArrayInput(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Creates list of users with given input array
     * @param {Array&lt;User&gt;} body List of user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUsersWithListInput(body: Array<User>, options?: any) {
        return UserApiFp(this.configuration).createUsersWithListInput(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param {string} username The name that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public deleteUser(username: string, options?: any) {
        return UserApiFp(this.configuration).deleteUser(username, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get user by user name
     * @param {string} username The name that needs to be fetched. Use user1 for testing. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserByName(username: string, options?: any) {
        return UserApiFp(this.configuration).getUserByName(username, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Logs user into the system
     * @param {string} username The user name for login
     * @param {string} password The password for login in clear text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public loginUser(username: string, password: string, options?: any) {
        return UserApiFp(this.configuration).loginUser(username, password, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Logs out current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public logoutUser(options?: any) {
        return UserApiFp(this.configuration).logoutUser(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This can only be done by the logged in user.
     * @summary Updated user
     * @param {User} body Updated user object
     * @param {string} username name that need to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateUser(body: User, username: string, options?: any) {
        return UserApiFp(this.configuration).updateUser(body, username, options).then((request) => request(this.axios, this.basePath));
    }
}
