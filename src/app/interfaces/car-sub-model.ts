import { Remote } from "../remote";
import { RemoteShell } from "../remote-shell";

export interface CarSubModel {
    key: string;
    brand: string;
    model: string;
    submodel: string;
    typeofignition: string;
    icon: string;
    startyear: number;
    endyear: number;
    compatibleremotes: Array<Remote>;
    compatibleremoteshells: Array<RemoteShell>;
    chipID: string;
    freq: string;
    profile: string;
    allLostKeyPrice: number;
    spareKeyPrice: number;
    compatibleDevices: Array<string>;
    allLostKeySpecialNotes: Array<string>;
    spareKeySpecialNotes: Array<string>;
    allLostKeyPriceUpdateDate: Date;
    spareKeyPriceUpdateDate: Date;
}
