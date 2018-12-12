// let store = require('~/plugins/store');
// let BootstrapDialog = require('~/plugins/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js');
// window.Parsley
//     .addValidator('phone', {
//         requirementType: 'string',
//         validateString: function (value, requirement) {
//             if (!requirement) return requirement;
//             return /^1[3|4|5|7|8][0-9]\d{8}$/.test(value);
//         },
//         messages: {
//             en: 'input the mobile NO.',
//             'zh-cn': '请输入正确的手机号码'
//         }
//     });

//两端去空格函数
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

export let changeTableClass = function (tableObj) {
    tableObj.on('click-row.bs.table', function (e, row, $element) {
        $('.success').removeClass('success')
        $($element).addClass('success')
    })
}

export let getTableHeight = function () {
    let topOffset = 210
    let height = $(window).height()
    let toolbar = $('.panel-toolbar')
    let toolbarHeight = 0
    if (toolbar) {
        toolbarHeight = toolbar.height()
    }
    let navtabs = $('.nav-tabs')
    let navtabsHeight = 0
    if (navtabs) {
        navtabsHeight = 40
    }
    height = height - toolbarHeight - navtabsHeight - topOffset
    return height
}

export let initCkeditor = function (textareaID) {
    CKEDITOR.replace(textareaID)
}

export let selectCheck = function (_self, key, msg) {
    let item = $('#' + key).val()
    if (!item) {
        alert(msg);
        return false
    } else {
        _self.workRow[key] = item[0]
        return true
    }
}

export let initSelect2 = function (jqItem, sdata) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        tags: false,
        width: '100%',
        data: sdata,
        multiple: true
    })
}

export let initSelect2Editable = function (jqItem, sdata) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        width: '100%',
        data: sdata,
        multiple: true,
        tags: false
    })
}

export let getSelect2Val = function (key) {
    let item = $('#' + key).val()
    if (!item || item.length != 1) {
        return ''
    } else {
        return item[0]
    }
}

export let initSelect2Width = function (jqItem, sdata, width) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        tags: false,
        width: width,
        data: sdata,
        multiple: true
    })
}

export let initSelect2Placeholder = function (jqItem, sdata, placeholder) {
    jqItem.select2({
        maximumSelectionLength: 1,
        language: 'zh-CN',
        placeholder: placeholder,
        tags: false,
        width: '200',
        data: sdata,
        multiple: true
    })
}

export let initSelect2Single = function (jqItem, sdata) {
    jqItem.select2({
        minimumResultsForSearch: Infinity,
        language: 'zh-CN',
        tags: false,
        width: '100%',
        data: sdata
    })
    jqItem.val("")
}

export let initSelect2SingleWithSearch = function (jqItem, sdata) {
    jqItem.select2({
        language: 'zh-CN',
        tags: false,
        data: sdata
    })
    jqItem.val("")
}

export let initSelect2SingleWithSearchPlaceholder = function (jqItem, sdata, placeholder) {
    jqItem.select2({
        language: 'zh-CN',
        placeholder: placeholder,
        data: sdata
    })
}

export let initDatepicker = function (jqItem) {
    jqItem.datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd'
    })
}

export let initDatepickerStart = function (jqItem) {
    jqItem.datepicker({
        language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        startDate: new Date()
    })
}

export let DateFormat = function (date, fmt) {
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export let bootstrapTableAjaxOtions = function () {
    let headers = {}
    headers.authorization = getStoreData('token')
    return {
        headers: headers
    }
}

export let remarkFormatter = function (value, row, index) {
    if (value) {
        let displayName = (value.length > 10) ? (value.substring(0, 7) + '...') : value
        return [
            '<a role="button" data-toggle="popover" data-trigger="hover" data-placement="left" data-html="true" data-content="' +
            '<div class=&quot;box&quot;>' +
            '<div class=&quot;box-body&quot;>' +
            '<div class=&quot;form-group&quot;>' +
            '<div class=&quot;&quot;><span>' + value + '</span></div>' +
            '</div>' +
            '</div>' +
            '</div>">' + displayName + '</a>'
        ].join('')
    }
}

export let linkFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<div class="form-group image-set">'
        retString += '<a href="' + value + '" target="_Blank">'
        retString += '<img src="/static/images/link.png" style="max-width: 100%;max-height: 100%;"></a>'
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

export let fileFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<div class="form-group image-set">'
        retString += '<a href="' + value + '" target="_Blank">'
        retString += '<img src="/static/images/file.png" style="max-width: 100%;max-height: 100%;"></a>'
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

export let imageViewerFormatter = function (value, row, index) {
    let retString = '<div class="form-inline" role="form">'
    if (value) {
        retString += '<img class="icon-size image" src="' + value + '">'
    }
    retString += '</div>'
    return retString
}

export let imagesFormatter = function (value, row, index) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="form-group image-set">'
        for (var key in value) {
            retString += '<a class="box-image-link" href="' + value[key] + '" data-lightbox="' + index + '">'
            retString += '<img class="box-image" src="' + value[key] + '"></a>'
        }
        retString += '</div>'
    }
    retString += '<span class="form-group fileupload-button">'
    retString += '<i class="glyphicon glyphicon-plus"></i>'
    retString += '<input class="imageupload" type="file" name="file">'
    retString += '</span></div>'
    return retString
}

export let imagesFormatterNoA = function (value, row, index) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="form-group image-set">'
        for (var key in value) {
            retString += '<a class="box-image-link" href="' + value[key] + '" data-lightbox="' + index + '">'
            retString += '<img class="box-image" src="' + value[key] + '"></a>'
        }
        retString += '</div">'
    }
    retString += '</div>'
    return retString
}

export let filesFormatterWithUpload = function (value, row) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="btn-group">'
        retString += '<button type="button" class="btn btn-xs btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>&nbsp;&nbsp;&nbsp;'
        retString += '<ul class="dropdown-menu" style="min-width: 0; border:2px solid #3c8dbc;">'
        for (let i = 0; i < value.length; i++) {
            //获取后缀
            if (value[i].file_url) {
                let a = getFileExt(value[i].file_url).toLowerCase();
                if (a === 'jpg' || a === 'jpeg' || a === 'png') {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><img src="' + value[i].file_url + '?width=30&height=30&quality=10' + '"></i>'
                } else {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><i class="glyphicon glyphicon-save-file"></i>'
                }
            }
            retString += '</a></li>'
        }
        retString += '</ul></div>'
    }
    retString += '<span class="form-group fileupload-button">'
    retString += '<i class="glyphicon glyphicon-plus"></i>'
    retString += '<input class="fileupload" type="file" name="file">'
    if (value.length > 0) {
        retString += '</span> &nbsp;&nbsp;'
        retString += '<span class="form-group delete-button delete-file">'
        retString += '<i class="fa fa-2x fa-trash-o"></i>'
    }
    retString += '</span></div>'
    return retString
}

//获取文件后缀名
function getFileExt(str) {
    let index1 = str.lastIndexOf(".");
    if (index1 === -1) {
        return '';
    }
    let index2 = str.length;
    let postf = str.substring(index1 + 1, index2);
    return postf;
}

export let filesFormatter = function (value, row) {
    var retString = '<div class="form-inline" role="form">'
    if (value.length > 0) {
        retString += '<div class="btn-group">'
        retString += '<button type="button" class="btn btn-xs btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>&nbsp;&nbsp;&nbsp;'
        retString += '<ul class="dropdown-menu" style="min-width: 0; border:2px solid #3c8dbc;">'
        for (let i = 0; i < value.length; i++) {
            //获取后缀
            if (value[i].file_url) {
                let a = getFileExt(value[i].file_url).toLowerCase();
                if (a === 'jpg' || a === 'jpeg' || a === 'png') {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><img src="' + value[i].file_url + '?width=30&height=30&quality=10' + '"></i>'
                } else {
                    retString += '<li><a href="' + value[i].file_url + '" target="_blank"><i class="glyphicon glyphicon-save-file"></i>'
                }
            }
            retString += '</a></li>'
        }
        retString += '</ul></div>'
    }
    retString += '</div>'
    return retString
}

export let operateFormatter = function (value, row, index) {
    return [
        '<a class="tableDelete" title="删除">',
        '<i class="glyphicon glyphicon-remove"></i>',
        '</a>',
        // '<a class="btn btn-primary btn-xs m-r-5 tableDelete btn-info-delete">删除</a>',
    ].join('')
}

export let BTRowFormat = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatAlignLeft = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'left',
        valign: 'middle'
    }
}

export let BTRowFormatWrap = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        align: 'left',
        valign: 'middle'
    }
}

export let BTRowFormatEditable = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            emptytext: '无'
        }
    }
}

export let BTRowFormatEditableOpt = function (rowid, rowname, enabled = true, rFormatter) {
    let element = {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    };
    if (enabled) {
        element.editable = {
            type: 'text',
            emptytext: '无'
        };
    }
    return element;
}

export let BTRowFormatEditablePop = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'textarea',
            emptytext: '无'
        }
    }
}

export let BTRowFormatEditableDatePicker = function (rowid, rowname, placement = 'top', rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            title: '选择签约日期',
            type: 'combodate',
            placement: placement,
            emptytext: '无',
            clear: '清除',
            format: 'YYYY-MM-DD',
            viewformat: 'YYYY-MM-DD',
            template: 'YYYY / MMMM / D',
            combodate: {
                language: 'zh-CN',
                minYear: new Date().getFullYear(),
                maxYear: new Date().getFullYear() + 1,
                minuteStep: 1
            }
        }
    }
}

export let BTRowFormatEditableWF = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        class: 'over-hide',
        width: width,
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            emptytext: '无'
        }
    }
}

export let BTRowFormatEdSelect = function (_self, rowid, rowname, paraIndex) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select',
            emptytext: '无',
            source: _self.pagePara[paraIndex],
            display: function (value, sourceData) {
                let showText = ''
                $(sourceData).each(function () {
                    if (this.id == value) {
                        showText = this.text
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}

export let BTRowFormatEditableW = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            display: function (value, sourceData) {
                $(this).html('<div class="form-control">' + value + '</div>')
            }
        }
    }
}

export let BTRowFormatEnumberW = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            display: function (value, sourceData) {
                $(this).html('<div class="form-control">' + value + '</div>')
            }
        }
    }
}
export let BTRowFormatEnumberWMin = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            min: 0,
            display: function (value, sourceData) {
                $(this).html(value)
            }
        }
    }
}
export let BTRowFormatEnumberWMinEnable = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'number',
            emptyclass: 'form-control',
            emptytext: '',
            showbuttons: false,
            onblur: 'submit',
            clear: false,
            min: 0,
            display: function (value, sourceData) {
                $(this).html(value)
            }
        }
    }
}
export let BTRowFormatEdSelectW = function (_self, rowid, rowname, paraIndex, width) {
    return {
        field: rowid,
        title: rowname,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select',
            mode: 'inline',
            emptyclass: 'form-control',
            emptytext: '',
            unsavedclass: null,
            showbuttons: false,
            source: _self.pagePara[paraIndex],
            display: function (value, sourceData) {
                let showText = ''
                $(sourceData).each(function () {
                    if (this.id == value) {
                        showText = this.text
                        return false
                    }
                })
                $(this).html('<div class="form-control">' + showText + '</div>')
            }
        }
    }
}

export let BTRowFormatEdSelect2 = function (_self, rowid, rowname, paraIndex, width = 200) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select2',
            emptytext: '无',
            select2: {
                data: _self.pagePara[paraIndex],
                width: width
            },
            display: function (value) {
                let showText = ''
                $(_self.pagePara[paraIndex]).each(function () {
                    if (this.id == value) {
                        if (this.name) {
                            showText = this.name
                        } else {
                            showText = this.text
                        }
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}

export let BTRowFormatEdSelect2Disabled = function (_self, rowid, rowname, paraIndex, width = 200) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'select2',
            emptytext: '无',
            disabled: true,
            select2: {
                data: _self.pagePara[paraIndex],
                width: width
            },
            display: function (value) {
                let showText = ''
                $(_self.pagePara[paraIndex]).each(function () {
                    if (this.id == value) {
                        if (this.name) {
                            showText = this.name
                        } else {
                            showText = this.text
                        }
                        return false
                    }
                })
                $(this).html(showText)
            }
        }
    }
}


export let BTRowFormatEdNum = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'text',
            validate: function (value) {
                value = $.trim(value)
                if (!value) {
                    return '请输入金额'
                }
                if (!/^\d+\.\d{2}$|^\d+$/.test(value)) {
                    return '请输入正确的金额格式如: 0.00.'
                }

                return ''
            }
        }
    }
}

export let BTRowFormatEdTextarea = function (rowid, rowname) {
    return {
        field: rowid,
        title: rowname,
        class: 'auto-line',
        width: 80,
        align: 'center',
        valign: 'middle',
        editable: {
            type: 'textarea',
            disabled: false,
            emptytext: '无',
            display: function (value, sourceData) {
                let ele = value.toString()
                if (ele) {
                    let displayName = (ele.length > 10) ? (ele.substring(0, 7) + '...') : ele
                    $(this).html(displayName)
                }
            }
        }
    }
}

export let BTRowFormatWidth = function (rowid, rowname, width) {
    return {
        field: rowid,
        title: rowname,
        class: 'text-nowrap',
        width: width,
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatWithFormatter = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatWithFormatterAlignLeft = function (rowid, rowname, rFormatter) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        class: 'text-nowrap',
        align: 'left',
        valign: 'middle'
    }
}

export let BTRowFormatWithFW = function (rowid, rowname, rFormatter, width) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatWithFE = function (rowid, rowname, rFormatter, e) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: e,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatWithFEW = function (rowid, rowname, rFormatter, e, width) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: e,
        width,
        width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatEvent = function (rowid, rowname, rFormatter, tableEvents) {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        events: tableEvents,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let actFormatter = function (rowid, rFormatter, e) {
    return {
        field: rowid,
        events: e,
        formatter: rFormatter,
        align: 'center',
        valign: 'middle',
        class: 'text-nowrap '
    }
}

export let BTRowFormatWithFormatterWidth = function (rowid, rowname, rFormatter, width = '60px') {
    return {
        field: rowid,
        title: rowname,
        formatter: rFormatter,
        width: width,
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let BTRowFormatWithIndex = function (rowname) {
    return {
        field: 'Number',
        title: rowname,
        formatter: function (value, row, index) {
            return index + 1;
        },
        width: '30px',
        class: 'text-nowrap',
        align: 'center',
        valign: 'middle'
    }
}

export let DynamicEditableByDomain = function (_self, table) {
    $("[data-uniqueid]").each(function () {
        $(this).editable({
            disabled: true
        })
        let actrow = table.bootstrapTable('getRowByUniqueId', this.getAttribute('data-uniqueid'))
        if (actrow.domain_id) {
            if (actrow.domain_id != _self.userinfo.domain_id) {
                $(this).find('[data-name]').each(function () {
                    $(this).attr("data-disabled", true)
                })
            }
        }
    })

}


//取浏览器参数值
export let getUrlParams = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


//初始化图片浏览插件
export let initImageViewer = function () {
    window.setTimeout(function () {
        $('.image').viewer();
    }, 500)
}
//分转元
export let unitConversion = function (value, row) {
    let returnData = 0;
    if (!isNaN(value)) {
        returnData = value / 100;
    }
    return returnData
}

export let dateFormat = function (value, type) {
    if (value) {
        let date = new Date(value);
        let year = date.getFullYear();
        let month = (date.getMonth()+1)<10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 ;
        let day = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
        if (type === 'min') {
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        } else {
            return year + '-' + month + '-' + day;
        }
    }
};

export let isVehicleNumber = function (number) {
    let result = false;
    if (number.length == 7){
        let express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        result = express.test(number);
    }
    return result;
};

//判断是否是手机
export let isMobile = function() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|MicroMessenger)/i)
    return flag;
};

export let baiduSeoAutoPush = function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
};
