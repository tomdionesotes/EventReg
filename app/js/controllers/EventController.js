/**
 * Created by TDionesotes on 9/30/2016.
 */
'use strict;';

eventsApp.controller('EventController', function($scope){
   // stuff
    $scope.event = {
        name: 'test event idk',
        date: '1/1/2017',
        time: '11am',
        location: {
            address: "100 main st",
            city: 'los angeles',
            state: 'ca'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'directives'
            },
            {
                name: 'yay scopes'
            },
            {
                name: 'ctrl'
            }
        ]
    }
});