import {reactive} from "vue";

export function usePage2(opts) {

    let {api, repository, pageQuery, defaultPageSize, immediate,} = opts;

    immediate = immediate == false ? false : true;   //默认立即查询

    let pageInfo = reactive({
        page: 1,
        pageSize: defaultPageSize || 8,
        total: 0,
        tableData: {},
    })

    const pageChangeHandler = (page) => {
        query(page, pageInfo.pageSize, pageQuery.value);
    }

    return {
        pageInfo,
        pageChangeHandler,
    }

}