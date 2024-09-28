module.exports = () => ({

    //* GRAPHQL
    graphql: {
        config: {
            endpoint: '/v1/graphql',
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 7,
            amountLimit: 100,
        }
    },
});
