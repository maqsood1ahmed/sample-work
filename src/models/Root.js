import { types, Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { Category } from './Category';
import { Course } from './Course';

const RootModel = types.model({
    category: Category,
    course: Course,
});

let initialState = RootModel.create({
    category: { items: [
        {
            id: 1,
            name: 'Design',
            parent_id: 0
        },
        {
            id: 2,
            name: 'Development',
            parent_id: 0
        },
        {
            id: 3,
            name: 'Marketing',
            parent_id: 0
        }
    ]},
    course: { items: [] },
});


export const rootStore = initialState;

const RootStoreContext = createContext(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}