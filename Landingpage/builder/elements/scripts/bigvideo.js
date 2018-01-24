

1

/*

2

  BigVideo - The jQuery Plugin for Big Background Video (and Images)

3

  by John Polacek (@johnpolacek)

4

​

5

  Dual licensed under MIT and GPL.

6

​

7

  Dependencies: jQuery, jQuery UI (Slider), Video.js, ImagesLoaded

8

*/

9

​

10

(function (factory) {

11

  'use strict';

12

  if (typeof define === 'function' && define.amd) {

13

    // Register as an anonymous AMD module:

14

    define([

15

      'jquery',

16

      'videojs',

17

      'imagesloaded',

18

      'jquery-ui'

19

    ], factory);

20

  } else {

21

    factory(jQuery, videojs);

22

  }

23

})(function($, videojs) {

24

​

25

  $.BigVideo = function(options) {

26

​

27

    var defaults = {

28

      // If you want to use a single mp4 source, set as true

29

      useFlashForFirefox:true,

30

      // If you are doing a playlist, the video won't play the first time

31

      // on a touchscreen unless the play event is attached to a user click

32

      forceAutoplay:false,

33

      controls:false,

34

      doLoop:false,

35

      container:$('body'),

36

      shrinkable:false

37

    };

38

​

39

    var BigVideo = this,

40

      player,

41

      vidEl = '#big-video-vid',

42

      wrap = $('<div id="big-video-wrap"></div>'),

43

      video = $(''),

44

      mediaAspect = 16/9,

45

      vidDur = 0,

46

      defaultVolume = 0.8,

47

      isInitialized = false,

48

      isSeeking = false,

49

      isPlaying = false,

50

      isQueued = false,

51

      isAmbient = false,

52

      playlist = [],

53

      currMediaIndex,

54

      currMediaType;

55

​

56

    var settings = $.extend({}, defaults, options);

