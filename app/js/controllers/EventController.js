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
                name: 'directives',
                creatorName: 'some dude',
                duration: '2 minutes',
                level: 'basic',
                abstract: 'learn stuff'
            },
            {
                name: 'yay scopes',
                creatorName: 'other dude',
                duration: '15 minutes',
                level: 'crazy',
                abstract: 'wow such event'
            },
            {
                name: 'ctrl',
                creatorName: 'final dude',
                duration: '90 minutes',
                level: 'medium',
                abstract: 'l2ctrl'
            }
        ]
    }
});