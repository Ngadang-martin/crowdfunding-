
/**
 * 
 * @param {size} req 
 * @param {page} res 
 * @returns limit and offset
 */
 exports.getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
}

/**
 * 
 * @param {data} req 
 * @param {*limit} res 
 * @returns totalitems, totalspages,currentpages, datas
 */
exports.getPagingData = (data, page, limit) => {
    const { count, project } = data;
    const currentPage = page ? +page : 0;
    const totalItems = count;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, data: project, totalPages, currentPage };
}