
import { SUPERMARKETS } from '~/helpers/apis';

export default class MarketsUseCase {
    async execute(){
        const markets:any = [];
        SUPERMARKETS.map((supermarket) => {
            markets.push({
                designation: supermarket.Supermercado,
                tipology: supermarket.Tipologia,
                details: supermarket['Outros detalhes'],
                rllt__details1: supermarket.rllt__details1,
                rllt__details2: supermarket.rllt__details2,
                image: supermarket['REF. Imagem'],
                Thumbnail: supermarket.Thumbnail
            });
        });
        return markets;
    }
}