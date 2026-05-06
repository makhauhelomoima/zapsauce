import { RECIPES_1_10 } from './recipes-1-10'
import { RECIPES_11_20 } from './recipes-11-20'

export const RECIPES = {
 ...RECIPES_1_10,
 ...RECIPES_11_20
}

export type Recipe = typeof RECIPES[keyof typeof RECIPES]