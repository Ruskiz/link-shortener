import {BDLink} from "./link.model";

export class SimpleDataSource {

    private data:BDLink[];
    constructor() {
    this.data = new Array<BDLink>(
        new BDLink(1,"https://www.youtube.com/watch?v=3i3s_25Ir0E", "goo.gl/SFtnxm", "#мультики #амням #всесерии", "мультики про амняма, все серии"),
        new BDLink(2,"https://www.google.by/search?tbm=isch&sa=1&ei", "https://goo.gl/DZLrQZ", "#планеты #картинки", "картинки про планеты"),
        new BDLink(3,"https://www.youtube.com/watch?v=K0Dj6Gp3Dqw", "https://goo.gl/Q4qNQ9", "#фильм #боевик #беркут", "фильм 2018"),
        new BDLink(4,"https://www.youtube.com/watch?v=_pPeh1hiP_A", "https://goo.gl/2oAcSe", "#мультики #peppapig #всесерии", "мультики про свинку пеппу, все серии"),
        new BDLink(5,"https://www.google.by/search?q=картинки&tbm=isch&source=iu&ictx=1&fir=qO2Y", "https://goo.gl/KeMysW", "#картинки", "разные картинки"));
    }
    getData(): BDLink[] {
        return this.data;
    }
}