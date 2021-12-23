import { types } from 'mobx-state-tree';

export const CourseItem = types
    .model({
        id: types.number,
        name: types.string,
        description: types.string,
        ratings: types.number,
        author: types.string,
        last_updated: types.string,
        category_id: types.number,
    });

export const Course = types
    .model({
        items: types.array(CourseItem)
    });