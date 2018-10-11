document.addEventListener('keyup', function (evt) {
    var KeyMappings = {
        'MediaStop': 'span.shrink-cancel',
        'MediaPlayPause': ['span.shrink-play', 'span.shrink-pause']
    };

    var tryClick = function (selector) {
        switch (typeof (selector)) {
            case 'string':
                var el = document.querySelector(selector);
                if (el) {
                    el.click();
                    return true;
                } else {
                    return false;
                }
                break;
            case 'object':
                if (Array.isArray(selector)) {
                    selector.some(tryClick);
                } else {
                    console.log('非陣列物件 Selector');
                }
                break;
            case 'function':
                selector();
                break;
            default:
                console.log('未知類型 Selector');
            break;
        }
    }

    if (KeyMappings[evt.code]) {
        var target = KeyMappings[evt.code];
        tryClick(KeyMappings[evt.code]);
    }
}, false);