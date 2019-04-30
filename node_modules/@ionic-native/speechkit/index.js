var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SpeechKitOriginal = /** @class */ (function (_super) {
    __extends(SpeechKitOriginal, _super);
    function SpeechKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKitOriginal.prototype.tts = function (text, language, voice) { return cordova(this, "tts", {}, arguments); };
    SpeechKitOriginal.prototype.asr = function (language) { return cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKitOriginal.pluginName = "SpeechKit";
    SpeechKitOriginal.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.pluginRef = "plugins.speechkit";
    SpeechKitOriginal.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.platforms = ["Android", "iOS"];
    return SpeechKitOriginal;
}(IonicNativePlugin));
var SpeechKit = new SpeechKitOriginal();
export { SpeechKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaGtpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU85Qyx1QkFBRyxhQUNELElBQVksRUFDWixRQUFnQixFQUNoQixLQUFhO0lBVWYsdUJBQUcsYUFDRCxRQUFnQjs7Ozs7O29CQW5EcEI7RUE4QitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BlZWNoS2l0XG4gKiBAZGVzY3JpcHRpb25cbiAqIEltcGxlbWVudGF0aW9uIG9mIE51YW5jZSBTcGVlY2hLaXQgU0RLIG9uIElvbmljXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGVlY2hLaXQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwZWVjaGtpdC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlZWNoa2l0OiBTcGVlY2hLaXQpIHsgfVxuICpcbiAqXG4gKiAvLyBmaW5kIHZvaWNlIG5hbWVzIHRoYXQgbWF0Y2ggbGFuZ3VhZ2UgZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubnVhbmNlLmNvbS9wdWJsaWMvaW5kZXgucGhwP3Rhc2s9c3VwcG9ydGVkTGFuZ3VhZ2VzXG4gKiB0aGlzLnNwZWVjaGtpdC50dHMoJ1RleHQgdG8gYmUgcmVhZCBvdXQgbG91ZCcsICdFTkctR0JSJywgJ1NlcmVuYScpLnRoZW4oXG4gKiAgIChtc2cpID0+IHsgY29uc29sZS5sb2cobXNnKTsgfSxcbiAqICAgKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9XG4gKiApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BlZWNoS2l0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbnVhbmNlLXNwZWVjaGtpdCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3BlZWNoa2l0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TaG1hcmt1cy9jb3Jkb3ZhLXBsdWdpbi1udWFuY2Utc3BlZWNoa2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoS2l0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTcGVhayB0ZXh0IG91dCBsb3VkIGluIGdpdmVuIGxhbmd1YWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHR0cyhcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICB2b2ljZTogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gcmVjb2duaXplIHdoYXQgdGhlIHVzZXIgc2FpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgYXNyKFxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHsgcmV0dXJuOyB9XG5cbn1cbiJdfQ==