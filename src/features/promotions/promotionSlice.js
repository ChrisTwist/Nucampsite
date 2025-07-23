import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectAllPromotions = () => PROMOTIONS;

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};