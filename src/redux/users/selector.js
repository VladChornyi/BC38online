import { createSelector } from 'reselect';

export const selectIsLoading = state => {
  return state.users.isLoading;
};

export const selectUsersItems = state => state.users.items;
export const selectFilter = state => state.users.filter;
// export const selectFilteredUsersItems = state => {
//   // console.log('select');
//   const usersItems = selectUsersItems(state);
//   const filter = selectFilter(state);
//   return usersItems.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
// };

export const selectFilteredUsersItems = createSelector([selectUsersItems, selectFilter], (usersItems, filter) => {
  console.log('memoSelect');
  return usersItems.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});

// export const selectMarriedUsersItems = state => {
//   console.log('withoutMemo');
//   const usersItems = selectUsersItems(state);
//   return usersItems.reduce((acc, item) => {
//     if (item.married) {
//       acc += 1;
//       return acc;
//     }
//     return acc;
//   }, 0);
// };

export const selectMarriedUsersItems = createSelector(selectUsersItems, usersItems => {
  // console.log('memoSelector');
  return usersItems.reduce((acc, item) => {
    if (item.married) {
      acc += 1;
      return acc;
    }
    return acc;
  }, 0);
});
