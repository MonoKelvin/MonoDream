import { removeArray } from "../../util/Utilities";

/**
 * 监听器接口
 * @template {T} 监听的对象列表
 */
export default class Listener<T> {
    public addListener(listener: T) {
        this.listeners.push(listener);
    }

    public removeListener(listener: T) {
        removeArray(this.listeners, listener);
    }

    public clearListener() {
        this.listeners.splice(0, this.listeners.length);
    }

    protected listeners: T[] = [];
}
