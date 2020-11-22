/** 配置选项的数据，即解析后的配置内容，一般是键值对 */
export type TConfigData = Map<string, any>;

export enum EConfigSourceType {
    XML,
    JSON,
    SUBSOURCE,
    USERTYPE,
}

/**
 * 配置的来源
 */
export interface IConfigSource {
    /** 配置类型 */
    type: EConfigSourceType;

    /** 配置源数据 */
    data: any;
}

export interface IConfiguration {

    readonly mSource: IConfigSource;
    mConfigData: TConfigData | null;

    /**
     * 解析配置源
     * @param source 配置的源数据
     * @return 键值对
     */
    prase(source: IConfigSource): Promise<TConfigData>;

    /**
     * 重新加载配置
     */
    reload(): Promise<void>;

    /**
     * 获取配置数据，如果没有解析完成则返回null
     * @return 配置数据，可能为空
     */
    getConfigurationData(): TConfigData | null;

    updateValue(key: string, value: any): Promise<void>;
}
