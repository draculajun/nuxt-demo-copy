import {reactive, watch} from "vue";

/**
 * 王文俊
 * 2023年10月24日
 */
export function usePage(opts) {

    let {api, pageQuery, defaultPageSize, immediate,} = opts;

    immediate = immediate == false ? false : true;   //默认立即查询

    let pageInfo = reactive({
        page: 1,
        pageSize: defaultPageSize || 8,
        total: 0,
        tableData: {},
    })

    const query = (page, pageSize, pageQuery) => {
        if (pageQuery != null) {
            if (api.__v_isRef) {    //当使用computed动态确定api时使用
                api = api.value;
            }
            api({
                page: page,
                pageSize: pageSize,
                ...pageQuery
            }).then(res => {
                pageInfo.page = page;
                pageInfo.tableData = res.data.Data.Lists;
                pageInfo.total = res.data.Data.TotalNum;
            });
        }
    };

    watch(pageQuery, (newVal) => {
        pageInfo.page = 1;
        query(pageInfo.page, pageInfo.pageSize, pageQuery.value);
    }, {immediate: immediate, deep: true})

    const pageChangeHandler = (page) => {
        query(page, pageInfo.pageSize, pageQuery.value);
    }

    return {
        pageInfo,
        pageChangeHandler,
    }

}
