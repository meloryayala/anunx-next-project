const formatCurrency = value => {
    return value.toLocaleString('us-en', { style: 'currency', currency: 'EUR' })
}

export {
    formatCurrency,
}