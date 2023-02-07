import { enUS } from 'date-fns/locale';
import { Locale } from '../interface';

const local: Locale = {
    code: 'en-US',
    dateFnsLocale: enUS,
    Pagination: {
        item: 'item',
        // 涉及到单复数问题，mui 中的设计为：Rows per page: 10  https://mui.com/material-ui/react-pagination/#table-pagination
        pageSize: 'items/page',
        page: 'pages',
        // 表示「共 n 页」
        total: '',
        jumpTo: 'Jump to'
    },
    Modal: {
        confirm: 'Confirm',
        cancel: 'Cancel',
    },
    TimePicker: {
        placeholder: {
            time: 'Select time',
            timeRange: 'Select a time range',
        },
        begin: 'Start Time',
        end: 'End Time',
        // 这里的英文为什么没有单位
        hour: '',
        minute: '',
        second: '',
        AM: 'AM',
        PM: 'PM',
    },
    DatePicker: {
        placeholder: {
            date: 'Select date',
            dateTime: 'Select date and time',
            dateRange: ['Start date', 'End date'],
            dateTimeRange: ['Start date', 'End date'],
        },
        footer: {
            confirm: 'Confirm',
            cancel: 'Cancel',
        },
        selectDate: 'Select Date',
        selectTime: 'Select Time',
        monthText: '${month} ${year}',
        months: {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Aug',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',
        },
        fullMonths: {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        },
        weeks: {
            Mon: 'Mon',
            Tue: 'Tue',
            Wed: 'Wed',
            Thu: 'Thu',
            Fri: 'Fri',
            Sat: 'Sat',
            Sun: 'Sun',
        },
        localeFormatToken: {
            FORMAT_SWITCH_DATE: 'MM/dd/yyyy',
        },
    },
    Popconfirm: {
        confirm: 'Confirm',
        cancel: 'Cancel',
    },
    Navigation: {
        collapseText: 'Collapse Sidebar',
        expandText: 'Expand Sidebar',
    },
    Table: {
        emptyText: 'No Result',
        pageText: 'Showing ${currentStart} to ${currentEnd} of ${total}',
    },
    Select: {
        emptyText: 'No Result',
        createText: 'Create',
    },
    Cascader: {
        emptyText: 'No Result',
    },
    Tree: {
        emptyText: 'No Result',
        searchPlaceholder: 'Search',
    },
    List: {
        emptyText: 'No Result',
    },
    Calendar: {
        allDay: 'All Day',
        AM: '${time} AM',
        PM: '${time} PM',
        // 这里是根据月份在前，日在后排序，中文：1月1日，英文：Jan 1，所以有的语言该字段没有翻译
        datestring: '',
        remaining: '${remained} more',
    },
    Upload: {
        mainText: 'Click to Upload File or Drag File to here',
        illegalTips: 'This type of file is not supported',
        legalTips: 'Release and start uploading',
        retry: 'Retry',
        replace: 'Replace File',
        clear: 'Clear',
        selectedFiles: 'Selected Files',
        illegalSize: 'Illegal file size',
        fail: 'Upload fail',
    },
    TreeSelect: {
        searchPlaceholder: 'Search',
    },
    Typography: {
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse',
    },
    Transfer: {
        emptyLeft: 'No Data',
        emptySearch: 'No search results',
        emptyRight: 'No content, check from the left',
        placeholder: 'Search',
        clear: 'Clear',
        selectAll: 'Select all',
        clearSelectAll: 'Unselect all',
        // 单复数形式，阿语的单复数有 6 种，应该如何定义
        total: 'Total ${total} items',
        // 单复数形式，阿语的单复数有 6 种，应该如何定义
        selected: '${total} items selected',
    },
    Form: {
        optional: '(optional)',
    },
    Image: {
        preview: 'Preview',
        loading: 'Loading',
        loadError: 'Failed to load',
        prevTip: 'Previous',
        nextTip: 'Next',
        zoomInTip: 'Zoom in',
        zoomOutTip: 'Zoom out',
        rotateTip: 'Rotate',
        downloadTip: 'Download',
        adaptiveTip: 'Adapt to the page',
        originTip: 'Original size',
    },
};

// [i18n-English(US)]
export default local;
