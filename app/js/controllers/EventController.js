/**
 * Created by TDionesotes on 9/30/2016.
 */
'use strict;';

eventsApp.controller('EventController', function($scope){
   // stuff
    $scope.snippet = '<span style="color:red">hi there</span>';

    $scope.boolValue = true;

    $scope.myStyle = {color:'red'};

    $scope.myClass = 'blue';

    $scope.buttonDisabled = true;

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
                abstract: 'learn stuff',
                upVoteCount: 0
            },
            {
                name: 'yay scopes',
                creatorName: 'other dude',
                duration: '15 minutes',
                level: 'crazy',
                abstract: 'wow such event',
                upVoteCount: 0
            },
            {
                name: 'ctrl',
                creatorName: 'final dude',
                duration: '90 minutes',
                level: 'medium',
                abstract: 'l2ctrl',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function(session) {
        // stuff
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        // stuff
        session.upVoteCount--;
    };
});