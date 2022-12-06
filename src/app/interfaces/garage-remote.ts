import { RemoteNote } from "../remote-note";

export interface GarageRemote {
    key: string;
    tapsycode: string;
    boxnumber: number;
    shell: string;
    frequency: string;
    compatibleBrand: string;
    productType: string;
    qtyavailable: number;
    sellingPrice: string;
    image: string;
    instructionsImage: string;
    notes: Array<RemoteNote>;
    compatibleModels: Array<string>;
}
