export class StorageHelper<TItem> {
  private items: Record<string, TItem>;

  constructor(
    private storageKey: string,
    private keySelector: (item: TItem) => string
  ) {
    const itemsString = this.read();
    this.items = itemsString ? JSON.parse(itemsString) : {};
  }

  private read() {
    return localStorage.getItem(`@workshop/${this.storageKey}`);
  }

  private write() {
    return localStorage.setItem(
      `@workshop/${this.storageKey}`,
      JSON.stringify(this.items)
    );
  }

  private getKey(item: TItem | string | undefined) {
    const key =
      typeof item === 'string' ? item : item ? this.keySelector(item) : null;
    if (key == null || key == '') {
      throw new Error(`key not defined: ${JSON.stringify(item)}`);
    }
    return key;
  }

  public query(selector: (item: TItem) => boolean = () => true) {
    const result = Object.values(this.items).filter(selector);
    console.log('query', result, this.items);
    return result;
  }

  public get(key: string): TItem {
    return this.items[this.getKey(key)];
  }

  public push(item: TItem) {
    this.items[this.getKey(item)] = item;
    this.write();
  }

  public remove(item: TItem | string) {
    delete this.items[this.getKey(item)];
    this.write();
  }
}
