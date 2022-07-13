export const logger = store => next => action => {
  console.log(action);
  next(action);
};

export const featuring = store => next => actionInfo => {
  console.log('🚀 ~ file: index.js ~ line 7 ~ actionInfo', actionInfo);
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};
