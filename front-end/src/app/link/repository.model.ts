import { BDLink } from "./link.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
    private dataSource: SimpleDataSource;
    private links: BDLink[];
    private locator = (p:BDLink, id:number) => p.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.links = new Array<BDLink>();
        this.dataSource.getData().forEach(p => this.links.push(p));
    }

    //возвращает все ссылки
    getBDLinks(): BDLink[] {
        return this.links;
    }
    //возвращает 1 ссылку
    getBDLink(id: number) : BDLink {
        return this.links.find(p => this.locator(p, id));
    }
    //обновляет сущ или добовляет новый объект
    saveBDLink(product: BDLink) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.links.push(product);
        } else {
            let index = this.links.findIndex(p => this.locator(p, product.id));
            this.links.splice(index, 1, product);
        }
    }
   
    private generateID(): number {
        let candidate = 100;
        while (this.getBDLink(candidate) != null) {
        candidate++;
        }
        return candidate;
    }   
}