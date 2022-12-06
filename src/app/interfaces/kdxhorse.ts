import { RemoteNote } from "../remote-note";

export interface Kdxhorse {
    key: string;
    tapsycode: string;
    boxnumber: number;
    shell: string;
    name: string;
    series?: string;
    productcategory: string;
    producttype: string;
    qtyavailable: number;
    image: string;
    butttons: number;
    notes: Array<RemoteNote>;
}
