import { Langue } from "./langue";
import { Market } from "./market.model";

export class MarketLangue {
    marketLangueId!: number;
    marketId!: Market;
    langueId!: Langue;
    traduction!: string;
}
