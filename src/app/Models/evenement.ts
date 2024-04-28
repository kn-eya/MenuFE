

import { Market } from './market.model';
export class Evenement {
        id!: number;
        description!: string;
        dateHeureD!: Date;
         dateHeureF!: Date; 
        file!: string;
        market!: Market;
}
