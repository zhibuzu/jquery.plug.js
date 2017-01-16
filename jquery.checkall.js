/*----------------------------------------------------
 CheckAll plugin for jQuery
 Version: 1.0.0
 Copyright (c) 2017 Jesse Hu

 Released under the Apache-2.0 license

 Date: January 16, 2017
 Requires: jQuery 1.7+
 ------------------------------------------------------*/
(function ($) {
    $.fn.checkAll = function (group, options) {
        var opts = $.extend({}, options),
            $master = this,
            $slaves = group instanceof $ ? group : $(group),
            groupSize,
            onClick = typeof opts.onClick === 'function' ? opts.onClick : null,
            onSlavesClick = typeof opts.onSlavesClick === 'function' ? opts.onSlavesClick : null,
            onMasterClick = typeof opts.onMasterClick === 'function' ? opts.onMasterClick : null;

            // compatiable jquery lower version
            propFn = typeof $.fn.prop === 'function' ? 'prop' : 'attr';

        groupSize = $slaves.length;
        if (groupSize === 0) {
            groupSize = -1;
        }

        // 计算附属checkbox选中个数
        function countCheck() {
            return $slaves.filter(':checked').length;
        }

        // 判断主checkbox是否应选中
        function checkMaster() {
            if (groupSize === countCheck()) {
                $master[propFn]('checked', true);
            } else {
                $master[propFn]('checked', false);
            }
        }

        // 取消主checkbox选中
        function disableMaster() {
            $master[propFn]('checked', false);
        }

        // 传递给回调函数的参数: 已选中的附属checkbox对象
        function callbackArguments() {
            return [$slaves.filter(':checked')];
        }

        // 主checkbox点击事件
        $master.unbind('click.checkAll').bind('click.checkAll', function () {
            $slaves.add($master)[propFn]('checked', !!this.checked);
            onClick && onClick.apply(this, callbackArguments());
            onMasterClick && onMasterClick.apply(this, callbackArguments());
        });

        // 附属checkbox点击事件
        $slaves.unbind('click.checkAll').bind('click.checkAll', function () {
            this.checked ? checkMaster() : disableMaster();
            onSlavesClick && onSlavesClick.apply(this, callbackArguments());
        });

        checkMaster();

        return this;
    };
}(jQuery));
