import { RemoteOrder } from "./remote-order";
import { RemoteshellOrder } from "./remoteshell-order";

export interface OrderDetails {
    key: string;
    year: number;
    month: number;
    remoteList?: Array<RemoteOrder>;
    remoteshelllist?: Array<RemoteshellOrder>;
}
