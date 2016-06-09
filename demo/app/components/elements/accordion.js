System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, prismjs_1, common_1;
    var AccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AccordionComponent = (function () {
                function AccordionComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.accordionOption = {
                        exclusive: true,
                        on: "mouseenter"
                    };
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                }
                AccordionComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-accordion",
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Accordion</h1>\n            <p>Semantic UI accordion module <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/modules/accordion.html\" target=\"_blank\">Semantic UI Accordion</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n    \n        <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>\n        <a href=\"http://semantic-ui.com/modules/accordion.html#/settings\" target=\"_blank\">\n        http://semantic-ui.com/modules/accordion.html#/settings\n        </a>\n        \n        <h4 class=\"ui header\">Demo ( with options )</h4>\n        <sm-accordion [options]=\"accordionOption\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        <h4 class=\"ui header\">Code</h4>\n<codeblock prismjs=\"html\">\naccordionOption = {\n    exclusive: true,\n    on: \"mouseenter\"\n}\n&lt;sm-accordion [options]=\"accordionOption\">\n    &lt;sm-accordion-item title=\"What is a dog?\">\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"What kinds of dogs are there?\">\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n    &lt;sm-accordion-item title=\"How do you acquire a dog?\">\n        &lt;accordion-title>What is a dog?&lt;/accordion-title>\n        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>\n    &lt;/sm-accordion-item>\n&lt;/sm-accordion>\n</codeblock>\n         <h4 class=\"ui header\">Demo styled</h4>\n         <sm-accordion class=\"styled\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo fluid ( second is active by default)</h4>\n        <sm-accordion class=\"styled fluid\">\n            <sm-accordion-item>\n                <accordion-title>What is a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>What kinds of dogs are there?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n            <sm-accordion-item>\n                <accordion-title>How do you acquire a dog?</accordion-title>\n                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.</accordion-content>\n            </sm-accordion-item>\n        </sm-accordion>\n        \n        <h4 class=\"ui header\">Demo inverted</h4>\n        <sm-segment class=\"inverted teal\">\n           <sm-accordion class=\"inverted\">\n                <sm-accordion-item>\n                    <accordion-title>What is a dog?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n                <sm-accordion-item>\n                    <accordion-title>What kinds of dogs are there?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n                <sm-accordion-item>\n                    <accordion-title>How do you acquire a dog?</accordion-title>\n                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.</accordion-content>\n                </sm-accordion-item>\n            </sm-accordion>\n        </sm-segment>\n             \n        <h4 class=\"ui header\">Demo form</h4>\n        <sm-segment>\n            <form smForm class=\"ui form\" [ngFormModel]=\"form\">\n                <div class=\"field\">\n                    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n                </div>\n                <sm-accordion>\n                    <sm-accordion-item>   \n                        <accordion-title>Additional</accordion-title>\n                        <accordion-content>\n                            <div class=\"field\">\n                                <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n                            </div>\n                            <div class=\"field\">\n                                <sm-input label=\"Phone number\" [control]=\"emailControl\" placeholder=\"Enter phone number...\"></sm-input>\n                            </div>\n                        </accordion-content>\n                    </sm-accordion-item>\n                </sm-accordion>\n                    <p></p>\n                    <sm-button class=\"primary\">Save</sm-button>\n                </form>\n        </sm-segment>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AccordionComponent);
                return AccordionComponent;
            }());
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUpBO2dCQVlJLDRCQUFZLEVBQWU7b0JBVjNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxnQkFBVyxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0csaUJBQVksR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRzVHLG9CQUFlLEdBQUc7d0JBQ2QsU0FBUyxFQUFFLElBQUk7d0JBQ2YsRUFBRSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7b0JBR0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztxQkFDaEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbktMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQ3hHLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxvclFBNElUO3FCQUNKLENBQUM7O3NDQUFBO2dCQW9CRix5QkFBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsbURBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcbmltcG9ydCB7IENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCA8VHlwZT5Db2RlYmxvY2tDb21wb25lbnQsIDxUeXBlPlByaXNtSnNEaXJlY3RpdmVdLFxuICAgIHNlbGVjdG9yOiBcInNtLXBhZ2UtYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+QWNjb3JkaW9uPC9oMT5cbiAgICAgICAgICAgIDxwPlNlbWFudGljIFVJIGFjY29yZGlvbiBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9hY2NvcmRpb24uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEFjY29yZGlvbjwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIFxuICAgICAgICA8cD5PcHRpb25zIGNhbiBiZSBwYXNzZWQgaW4gZm9ybSBvZiBKYXZhU2NyaXB0IG9iamVjdC4gRnVsbCBsaXN0IG9mIHNldHRpbmdzIGNhbiBiZSBmb3VuZCBvbjogPC9wPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2FjY29yZGlvbi5odG1sIy9zZXR0aW5nc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvYWNjb3JkaW9uLmh0bWwjL3NldHRpbmdzXG4gICAgICAgIDwvYT5cbiAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gKCB3aXRoIG9wdGlvbnMgKTwvaDQ+XG4gICAgICAgIDxzbS1hY2NvcmRpb24gW29wdGlvbnNdPVwiYWNjb3JkaW9uT3B0aW9uXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+SG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuPGNvZGVibG9jayBwcmlzbWpzPVwiaHRtbFwiPlxuYWNjb3JkaW9uT3B0aW9uID0ge1xuICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICBvbjogXCJtb3VzZWVudGVyXCJcbn1cbiZsdDtzbS1hY2NvcmRpb24gW29wdGlvbnNdPVwiYWNjb3JkaW9uT3B0aW9uXCI+XG4gICAgJmx0O3NtLWFjY29yZGlvbi1pdGVtIHRpdGxlPVwiV2hhdCBpcyBhIGRvZz9cIj5cbiAgICAgICAgJmx0O2FjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPyZsdDsvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAmbHQ7YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLiZsdDsvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgJmx0Oy9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAmbHQ7c20tYWNjb3JkaW9uLWl0ZW0gdGl0bGU9XCJXaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlP1wiPlxuICAgICAgICAmbHQ7YWNjb3JkaW9uLXRpdGxlPldoYXQgaXMgYSBkb2c/Jmx0Oy9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICZsdDthY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuJmx0Oy9hY2NvcmRpb24tY29udGVudD5cbiAgICAmbHQ7L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICZsdDtzbS1hY2NvcmRpb24taXRlbSB0aXRsZT1cIkhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz9cIj5cbiAgICAgICAgJmx0O2FjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPyZsdDsvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAmbHQ7YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLiZsdDsvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgJmx0Oy9zbS1hY2NvcmRpb24taXRlbT5cbiZsdDsvc20tYWNjb3JkaW9uPlxuPC9jb2RlYmxvY2s+XG4gICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHN0eWxlZDwvaDQ+XG4gICAgICAgICA8c20tYWNjb3JkaW9uIGNsYXNzPVwic3R5bGVkXCI+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGlzIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPldoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+SG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L2FjY29yZGlvbi1jb250ZW50PlxuICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgPC9zbS1hY2NvcmRpb24+XG4gICAgICAgIFxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGZsdWlkICggc2Vjb25kIGlzIGFjdGl2ZSBieSBkZWZhdWx0KTwvaDQ+XG4gICAgICAgIDxzbS1hY2NvcmRpb24gY2xhc3M9XCJzdHlsZWQgZmx1aWRcIj5cbiAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPldoYXQgaXMgYSBkb2c/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+V2hhdCBraW5kcyBvZiBkb2dzIGFyZSB0aGVyZT88L2FjY29yZGlvbi10aXRsZT5cbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5Ib3cgZG8geW91IGFjcXVpcmUgYSBkb2c/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1jb250ZW50PkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLiBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcyxcbiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gaW52ZXJ0ZWQ8L2g0PlxuICAgICAgICA8c20tc2VnbWVudCBjbGFzcz1cImludmVydGVkIHRlYWxcIj5cbiAgICAgICAgICAgPHNtLWFjY29yZGlvbiBjbGFzcz1cImludmVydGVkXCI+XG4gICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLXRpdGxlPldoYXQgaXMgYSBkb2c/PC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tY29udGVudD5BIGRvZyBpcyBhIHR5cGUgb2YgZG9tZXN0aWNhdGVkIGFuaW1hbC4gS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgICAgICAgICAgICAgICAgIGl0IGNhbiBiZSBmb3VuZCBhcyBhIHdlbGNvbWUgZ3Vlc3QgaW4gbWFueSBob3VzZWhvbGRzIGFjcm9zcyB0aGUgd29ybGQuPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgICAgICA8L3NtLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxzbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5XaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8c20tYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tdGl0bGU+SG93IGRvIHlvdSBhY3F1aXJlIGEgZG9nPzwvYWNjb3JkaW9uLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLFxuICAgICAgICAgICAgICAgICAgICBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvYWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgIDwvc20tYWNjb3JkaW9uPlxuICAgICAgICA8L3NtLXNlZ21lbnQ+XG4gICAgICAgICAgICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gZm9ybTwvaDQ+XG4gICAgICAgIDxzbS1zZWdtZW50PlxuICAgICAgICAgICAgPGZvcm0gc21Gb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNtLWFjY29yZGlvbi1pdGVtPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFjY29yZGlvbi10aXRsZT5BZGRpdGlvbmFsPC9hY2NvcmRpb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiUGhvbmUgbnVtYmVyXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZSBudW1iZXIuLi5cIj48L3NtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9zbS1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8L3NtLWFjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c20tYnV0dG9uIGNsYXNzPVwicHJpbWFyeVwiPlNhdmU8L3NtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc20tc2VnbWVudD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcblxuICAgIGFncmVlQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcbiAgICBlbWFpbENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuICAgIGFjY29yZGlvbk9wdGlvbiA9IHtcbiAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICBvbjogXCJtb3VzZWVudGVyXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsQ29udHJvbDogdGhpcy5lbWFpbENvbnRyb2wsXG4gICAgICAgICAgICBuYW1lQ29udHJvbDogdGhpcy5uYW1lQ29udHJvbCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19