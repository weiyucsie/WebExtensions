// 加入 mo-earphone 允許 MediaPlayPause 也能啟動 TTS
var ReadmooReaderKeyMapping = {
    'MediaStop': 'span.shrink-cancel',
    'MediaPlayPause': [
        '#speech-pop[data-show=show] span.shrink-play',
        '#speech-pop[data-show=show] span.shrink-pause',
        'span.mo-earphone']
};
if (location.href.indexOf('blob:') == 0) {
    // readmoo reader 點連結再點回來後，收到的KeyboardEvent沒有key，而blob有
    // 所以從 blob 收到 keyup 後轉送給 https://reader.readmoo.com/reader/index.html
    // (readmoo 處理跨瀏覽器事件時，產生的 KeyboardEvent 沒有 code，
    // 不知道為什麼接到後變空白，所以從別的地方抓)
    document.addEventListener('keyup', function(e) {
        parent.postMessage({
            type: 'keyup',
            key: e.key
        }, 'https://reader.readmoo.com');
    }, false);
} else {
    window.addEventListener('message', function(msgEvt) {
        var key = msgEvt.data.key;
        KeyToClick.DoMapping(key, ReadmooReaderKeyMapping);
    }, false);
    SetKeyboardBinding(ReadmooReaderKeyMapping);
}
