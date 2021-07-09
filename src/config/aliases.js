function aliases(prefix = './src') {
    return {
        '@components': `${prefix}/components`,
        '@config': `${prefix}/config`,
        '@enums': `${prefix}/enums`,
        '@hooks': `${prefix}/hooks`,
        '@styles': `${prefix}/styles`,
        '@utils': `${prefix}/utils`,
        '@state': `${prefix}/state`,
        '@types': `${prefix}/types`,
    }
};

module.exports = aliases
