import { types } from "mobx-state-tree";

export const CategoryItem = types
    .model({
        id: types.number,
        name: types.string,
        parent_id: types.number
    });

export const Category = types
    .model({
        items: types.array(CategoryItem)
    });