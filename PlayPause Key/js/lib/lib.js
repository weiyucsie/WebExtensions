KeyToClick = {
    Click: function (selector) {
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
                    selector.some(arguments.callee);
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
    },
    DoMapping: function(key, KeyMappings) {
        //console.log(location.href + ' Key: ' + key);

        var target = KeyMappings[key];
        if (target) {
            KeyToClick.Click(target);
        }
    }
}

function SetKeyboardBinding(KeyMappings) {
    function DoAction(evt) {
        KeyToClick.DoMapping(evt.key, KeyMappings);
    }

    document.addEventListener('keyup', DoAction, true);
}
