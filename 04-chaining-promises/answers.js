/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then(
        /* IMPLEMENT ME! */ (value) => {
          asyncTransformer(value).then(resolve).catch(reject);
        },
      )
      .catch((err) => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then(
    /* IMPLEMENT ME! */ (value) => slowAsyncProcess(value),
  );
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    /* IMPLEMENT ME! */
    return getUserById(userId)
      .then((user) => {
        if (!user) return undefined;

        return getOrganizationById(user.organizationId).then((organization) => {
          user.organization = organization;
          return user;
        });
      })
      .catch((err) => {
        throw err;
      });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
