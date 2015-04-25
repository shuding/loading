/**
 * Created by shuding on 4/25/15.
 * <ds303077135@gmail.com>
 */
;(function (window) {
    var loading = function () {
        var $ = {};

        $.delay = 0;

        /**
         * start(selector)
         * @param selector
         */
        var startFn = function (selector) {
            var elArray = document.querySelectorAll(selector);

            [].forEach.call(elArray, function (el) {
                if (el.dataset['loadingState'] == 'running')
                    return;
                if (el.className.indexOf('loading-running') !== -1)
                    return;

                el.parentNode.style.position = 'relative';

                el.className += ' loading-running';
                el.dataset['loadingState'] = 'running';
                el.style.display = 'inherit';
            });
        };

        /**
         * end(selector)
         * @param selector
         */
        var endFn = function (selector) {
            var elArray = document.querySelectorAll(selector);

            [].forEach.call(elArray, function (el) {
                if (el.dataset['loadingState'] == 'stop')
                    return;

                el.className = el.className.split('loading-running').join(' ');

                // lock state
                el.dataset['loadingState'] = 'stop';

                setTimeout(function () {
                    if (el.dataset['loadingState'] == 'stop')
                        el.style.display = 'none';
                }, 300);
            });
        };

        // define getters
        $.__defineGetter__('start', function () {
            var self = this;
            return function (selector) {
                setTimeout(startFn, self.delay, selector);
                return self;
            };
        });

        $.__defineGetter__('end', function () {
            var self = this;
            return function (selector) {
                setTimeout(endFn, self.delay, selector);
                return self;
            };
        });

        $.wait = function (delay) {
            var self = this;
            if (self.delay == 0) {
                var $$ = {};
                $$.__proto__ = $;
                $$.delay = delay;
                return $$;
            }
            self.delay += delay;
            return self;
        };

        return $;
    };

    window.addEventListener('load', function () {
        var elArray = document.getElementsByClassName('loading-running');

        [].forEach.call(elArray, function (el) {
            el.parentNode.style.position = 'relative';
        });

        var afterElArray = document.querySelectorAll('.loading-full-page:after, .loading-block:after');
        console.log(afterElArray);
    }, false);

    window.loading = loading();

})(window);
