
define(
    [],
    function () {
        "use strict";

        function MyGuideModelProvider($q) {
            var pages = {};

            // Add pages
            pages['cv'] = { name: "CV", type: "mine.cv", location: "_mine" };

            return {
                getModels: function () {
                    return $q.when(pages);
                }
            };
        }

        return MyGuideModelProvider
    }
);