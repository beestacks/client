/**
 * 队列的实现
 */
export class Queue {
  private maxLength: number;
  private items = [];
  constructor(maxLength: number) {
    this.maxLength = maxLength ?? 0;
  }

  /**
   * 队列第一个元素
   */
   get front() {
    return this.items[0];
  }

  get data() {
    return this.items;
  }

  /**
   * 向队列尾部添加元素（一个或多个）
   *
   * @param element ConcatArray<any>
   */
  enqueue(element: any) {
    if (element instanceof Array) {
      this.items = this.items.concat(element);
    }
    this.items.push(element);
    if (this.maxLength && this.items.length > this.maxLength) {
      this.dequeue();
    }
  }

  /**
   * 从队列中移除元素并返回其值
   *
   * @returns  队列第一个元素的值
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * 清空队列
   */
  clear() {
    /**
     * js拥有很多清空数组的方法，但重新赋值一个空数组是最快的解决方案，
     * 不过应该小心使用此方法，因为如果从其他变量或属性中引用了此数组，
     * 则原始阵列将保持不变，此处我们可以确保没有其它地方引用，所以可
     * 以放心使用
     */
    this.items = [];
  }
}
